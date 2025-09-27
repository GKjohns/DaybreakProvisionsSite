-- Migration: Fix Function Search Path
-- Issue: Function 'update_updated_at_column' has a mutable search_path which can be a security risk
-- Solution: Set an explicit, immutable search_path for the function
-- This prevents potential security issues from search path manipulation

-- Drop the existing trigger first (it depends on the function)
DROP TRIGGER IF EXISTS update_consultation_requests_updated_at ON public.consultation_requests;

-- Drop the existing function
DROP FUNCTION IF EXISTS public.update_updated_at_column();

-- Recreate the function with an explicit search_path
-- Setting search_path to 'pg_catalog, public' ensures the function always uses these schemas
-- in this specific order, preventing search path injection attacks
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER 
SECURITY DEFINER
SET search_path = pg_catalog, public
LANGUAGE plpgsql
AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$;

-- Add comment to document the function's purpose and security settings
COMMENT ON FUNCTION public.update_updated_at_column() IS 
    'Automatically updates the updated_at column to current timestamp. Uses fixed search_path for security.';

-- Recreate the trigger for the consultation_requests table
CREATE TRIGGER update_consultation_requests_updated_at
    BEFORE UPDATE ON public.consultation_requests
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- Note: If this function is used by other tables, you'll need to recreate their triggers as well
-- Check for other tables using this function with:
-- SELECT DISTINCT event_object_table 
-- FROM information_schema.triggers 
-- WHERE action_statement LIKE '%update_updated_at_column%';
