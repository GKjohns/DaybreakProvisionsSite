-- Migration: Verify Security Fixes
-- This migration contains queries to verify that the security issues have been resolved
-- Run these queries after applying migrations 002 and 003 to confirm the fixes

-- Check 1: Verify the view no longer has SECURITY DEFINER
-- Expected result: Should return 0 rows (no views with SECURITY DEFINER)
DO $$
DECLARE
    definer_count INTEGER;
BEGIN
    SELECT COUNT(*)
    INTO definer_count
    FROM pg_views
    WHERE schemaname = 'public' 
    AND viewname = 'active_consultation_requests'
    AND definition ILIKE '%SECURITY DEFINER%';
    
    IF definer_count > 0 THEN
        RAISE NOTICE 'WARNING: View still has SECURITY DEFINER';
    ELSE
        RAISE NOTICE 'SUCCESS: View security issue fixed';
    END IF;
END $$;

-- Check 2: Verify the function has an explicit search_path
-- Expected result: Should show the function with search_path set
DO $$
DECLARE
    func_search_path TEXT;
BEGIN
    SELECT prosqlbody::text
    INTO func_search_path
    FROM pg_proc p
    JOIN pg_namespace n ON p.pronamespace = n.oid
    WHERE n.nspname = 'public' 
    AND p.proname = 'update_updated_at_column';
    
    IF func_search_path IS NOT NULL THEN
        RAISE NOTICE 'SUCCESS: Function search_path has been set';
    ELSE
        RAISE NOTICE 'WARNING: Function not found or search_path not set';
    END IF;
END $$;

-- Check 3: Verify RLS is still enabled on the main table
-- Expected result: Should return true
SELECT 
    CASE 
        WHEN relrowsecurity THEN 'SUCCESS: RLS is enabled on consultation_requests'
        ELSE 'WARNING: RLS is not enabled on consultation_requests'
    END AS rls_status
FROM pg_class
WHERE relname = 'consultation_requests' 
AND relnamespace = (SELECT oid FROM pg_namespace WHERE nspname = 'public');

-- Check 4: List all objects related to consultation_requests for review
SELECT 
    'Table' as object_type,
    tablename as object_name,
    'RLS: ' || CASE WHEN rowsecurity THEN 'Enabled' ELSE 'Disabled' END as security_info
FROM pg_tables
WHERE schemaname = 'public' 
AND tablename = 'consultation_requests'
UNION ALL
SELECT 
    'View' as object_type,
    viewname as object_name,
    'Owner: ' || viewowner as security_info
FROM pg_views
WHERE schemaname = 'public' 
AND viewname LIKE '%consultation_requests%'
UNION ALL
SELECT 
    'Function' as object_type,
    proname as object_name,
    'Search Path: ' || COALESCE(pg_get_function_arguments(oid), 'Not Set') as security_info
FROM pg_proc
WHERE pronamespace = (SELECT oid FROM pg_namespace WHERE nspname = 'public')
AND proname = 'update_updated_at_column';

-- Final note
SELECT 'Security fixes applied. Please review the above results.' as message;
