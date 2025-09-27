# Database Migrations

This directory contains SQL migration files for the Daybreak Provisions database.

## Migration Files

### 001_create_consultation_requests.sql
Creates the `consultation_requests` table to store form submissions from the website consultation form.

**Table Schema:**
- `id` (UUID, Primary Key) - Unique identifier
- `name` (VARCHAR) - Contact person's name
- `email` (VARCHAR) - Contact email address
- `phone` (VARCHAR) - Contact phone number
- `property_name` (VARCHAR) - Property/company name (optional)
- `full_address` (TEXT) - Complete property address
- `property_type` (VARCHAR) - Type of property
- `notes` (TEXT) - Additional notes or requirements
- `status` (VARCHAR) - Request status (pending, contacted, scheduled, completed, cancelled)
- `created_at` (TIMESTAMP) - When the request was created
- `updated_at` (TIMESTAMP) - When the request was last updated
- `assigned_to` (UUID) - Team member assigned to handle the request
- `follow_up_date` (TIMESTAMP) - Next follow-up date
- `scheduled_visit_date` (TIMESTAMP) - Scheduled site visit date

**Features:**
- Row Level Security (RLS) enabled
- Automatic `updated_at` timestamp updates
- Indexes for performance
- View for active requests
- Proper permissions for authenticated and anonymous users

### 001_create_consultation_requests_rollback.sql
Rollback script to undo the consultation_requests table creation.

## How to Run Migrations

1. Open the Supabase Dashboard
2. Navigate to the SQL Editor
3. Copy and paste the migration SQL
4. Execute the migration

## Migration Naming Convention

Migrations are numbered sequentially: `001_`, `002_`, etc.
Each migration should have a descriptive name and include both forward and rollback scripts.

## Notes

- Always test migrations in a development environment first
- Keep rollback scripts for easy reversal if needed
- Document any breaking changes or data transformations
- Consider data migration scripts for existing data when modifying schemas
