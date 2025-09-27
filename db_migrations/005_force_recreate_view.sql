-- Migration: Force recreate view without any security definer
-- This is a more aggressive approach to ensure the view is created correctly
-- The Supabase advisor might be detecting something not visible in standard pg_views

-- First, completely drop the view and any dependencies
DROP VIEW IF EXISTS public.active_consultation_requests CASCADE;

-- Wait a moment for the drop to fully complete
DO $$ BEGIN PERFORM pg_sleep(0.1); END $$;

-- Recreate the view with explicit SECURITY INVOKER
-- Note: SECURITY INVOKER is the default, but we're being explicit here
CREATE OR REPLACE VIEW public.active_consultation_requests 
WITH (security_invoker = true) AS
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

-- Re-grant permissions
GRANT SELECT ON public.active_consultation_requests TO anon;
GRANT SELECT ON public.active_consultation_requests TO authenticated;

-- Add comment
COMMENT ON VIEW public.active_consultation_requests IS 
    'View of active consultation requests (pending, contacted, or scheduled). Uses SECURITY INVOKER to respect user permissions.';

-- Verify the view was created correctly
DO $$
DECLARE
    view_exists boolean;
BEGIN
    SELECT EXISTS (
        SELECT 1 
        FROM pg_views 
        WHERE schemaname = 'public' 
        AND viewname = 'active_consultation_requests'
    ) INTO view_exists;
    
    IF view_exists THEN
        RAISE NOTICE 'SUCCESS: View active_consultation_requests has been recreated';
    ELSE
        RAISE EXCEPTION 'ERROR: View was not created successfully';
    END IF;
END $$;
