import { serverSupabaseServiceRole } from '#supabase/server'

export default defineEventHandler(async (event) => {
  // Parse the request body
  const body = await readBody(event)
  
  // Validate required fields
  if (!body.name || !body.email) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Name and email are required'
    })
  }
  
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(body.email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid email format'
    })
  }
  
  // Use server-side Supabase client with service role key for write operations
  const supabase = await serverSupabaseServiceRole(event)
  
  try {
    // Insert the contact inquiry
    const { data, error } = await supabase
      .from('contact_inquiries')
      .insert([
        {
          name: body.name.trim(),
          email: body.email.trim().toLowerCase(),
          notes: body.notes?.trim() || null,
          status: 'new'
        }
      ])
      .select()
      .single()
    
    if (error) {
      console.error('Supabase error:', error)
      throw createError({
        statusCode: 500,
        statusMessage: 'Failed to save contact information'
      })
    }
    
    // Return success response
    return {
      success: true,
      message: 'Contact inquiry saved successfully',
      id: data.id
    }
  } catch (error) {
    console.error('Error saving contact inquiry:', error)
    
    // If it's already a created error, re-throw it
    if (error instanceof Error && 'statusCode' in error) {
      throw error
    }
    
    // Otherwise throw a generic error
    throw createError({
      statusCode: 500,
      statusMessage: 'An error occurred while processing your request'
    })
  }
})
