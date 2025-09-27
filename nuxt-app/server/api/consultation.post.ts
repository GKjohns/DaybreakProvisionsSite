import { serverSupabaseServiceRole } from '#supabase/server'

interface ConsultationRequest {
  name: string
  email: string
  phone: string
  propertyName?: string
  fullAddress: string
  notes?: string
}

export default defineEventHandler(async (event) => {
  // Parse the request body
  const body = await readBody<ConsultationRequest>(event)
  
  // Validate required fields
  if (!body.name || !body.email || !body.phone || !body.fullAddress) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields'
    })
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(body.email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid email address'
    })
  }
  
  // Phone validation (basic check)
  const digitsOnly = body.phone.replace(/\D/g, '')
  if (digitsOnly.length < 10 || digitsOnly.length > 11) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid phone number'
    })
  }
  
  try {
    // Use service role client to bypass RLS
    const client = serverSupabaseServiceRole(event)
    
    // Insert the consultation request
    const { data, error } = await client
      .from('consultation_requests')
      .insert({
        name: body.name,
        email: body.email,
        phone: body.phone,
        property_name: body.propertyName || null,
        full_address: body.fullAddress,
        notes: body.notes || null,
        status: 'pending'
      })
      .select()
      .single()
    
    if (error) {
      console.error('Supabase insert error:', error)
      throw createError({
        statusCode: 500,
        statusMessage: 'Failed to save consultation request'
      })
    }
    
    // Return success response
    return {
      success: true,
      message: 'Consultation request submitted successfully',
      data: {
        id: data.id,
        created_at: data.created_at
      }
    }
    
  } catch (err) {
    console.error('Error saving consultation request:', err)
    
    // Re-throw if it's already an error we created
    if (err instanceof Error && 'statusCode' in err) {
      throw err
    }
    
    // Generic error
    throw createError({
      statusCode: 500,
      statusMessage: 'An unexpected error occurred'
    })
  }
})