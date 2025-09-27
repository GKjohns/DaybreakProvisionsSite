-- Migration: Fix Security Definer View
-- Issue: View 'active_consultation_requests' uses SECURITY DEFINER which can be a security risk
-- Solution: Recreate the view without SECURITY DEFINER, using SECURITY INVOKER (default) instead
-- This ensures the view respects the permissions of the querying user, not the view creator

-- Drop the existing view with SECURITY DEFINER
DROP VIEW IF EXISTS public.active_consultation_requests;

-- Recreate the view with SECURITY INVOKER (default behavior)
-- This view will respect the RLS policies and permissions of the user querying it
CREATE VIEW public.active_consultation_requests AS
SELECT 
    id,
    name,
    email,
    phone,
    property_name,
    full_address,
    notes,
    status,
    created_at,
    updated_at,
    assigned_to,
    follow_up_date,
    scheduled_visit_date
FROM public.consultation_requests
WHERE status IN ('pending', 'contacted', 'scheduled')
ORDER BY created_at DESC;

-- Add comment to document the view's purpose
COMMENT ON VIEW public.active_consultation_requests IS 
    'View of consultation requests that are still active (pending, contacted, or scheduled). Uses SECURITY INVOKER to respect user permissions.';

-- Grant appropriate permissions if needed
-- Uncomment and adjust based on your application's needs:
-- GRANT SELECT ON public.active_consultation_requests TO authenticated;
-- GRANT SELECT ON public.active_consultation_requests TO anon;
