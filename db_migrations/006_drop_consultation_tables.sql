-- Migration: Drop consultation_requests table and related objects
-- Description: Remove consultation-related tables as they are not needed for the cleaning service
-- Created: 2025-09-29

-- Drop the view first (if it exists)
DROP VIEW IF EXISTS active_consultation_requests CASCADE;

-- Drop RLS policies
DROP POLICY IF EXISTS "Allow authenticated users to read consultation requests" ON consultation_requests;
DROP POLICY IF EXISTS "Allow authenticated users to insert consultation requests" ON consultation_requests;
DROP POLICY IF EXISTS "Allow authenticated users to update consultation requests" ON consultation_requests;
DROP POLICY IF EXISTS "Allow anonymous users to insert consultation requests" ON consultation_requests;

-- Drop the trigger
DROP TRIGGER IF EXISTS update_consultation_requests_updated_at ON consultation_requests;

-- Drop indexes
DROP INDEX IF EXISTS idx_consultation_requests_status;
DROP INDEX IF EXISTS idx_consultation_requests_created_at;
DROP INDEX IF EXISTS idx_consultation_requests_email;
DROP INDEX IF EXISTS idx_consultation_requests_assigned_to;

-- Drop the table
DROP TABLE IF EXISTS consultation_requests CASCADE;

-- Note: The update_updated_at_column() function is kept as it might be used by other tables

-- Comment for documentation
COMMENT ON SCHEMA public IS 'Daybreak Cleaning - Residential cleaning service database schema';
