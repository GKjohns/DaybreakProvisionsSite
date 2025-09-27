-- Migration: Create consultation_requests table
-- Description: Table to store consultation requests from the website form
-- Created: 2025-09-27

-- Create consultation_requests table
CREATE TABLE consultation_requests (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    
    -- Contact Information
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    
    -- Property Information
    property_name VARCHAR(255),
    full_address TEXT NOT NULL,
    
    -- Additional Information
    notes TEXT,
    
    -- Request Status and Tracking
    status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'scheduled', 'completed', 'cancelled')),
    
    -- Metadata
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Optional: Track which team member is handling this request
    assigned_to UUID REFERENCES auth.users(id),
    
    -- Optional: Store any follow-up dates
    follow_up_date TIMESTAMP WITH TIME ZONE,
    scheduled_visit_date TIMESTAMP WITH TIME ZONE
);

-- Create indexes for better query performance
CREATE INDEX idx_consultation_requests_status ON consultation_requests(status);
CREATE INDEX idx_consultation_requests_created_at ON consultation_requests(created_at);
CREATE INDEX idx_consultation_requests_email ON consultation_requests(email);
CREATE INDEX idx_consultation_requests_assigned_to ON consultation_requests(assigned_to);

-- Create updated_at trigger function if it doesn't exist
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_consultation_requests_updated_at
    BEFORE UPDATE ON consultation_requests
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Add RLS (Row Level Security) policies
ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;

-- Policy: Allow authenticated users to read all consultation requests
CREATE POLICY "Allow authenticated users to read consultation requests" 
ON consultation_requests FOR SELECT 
TO authenticated 
USING (true);

-- Policy: Allow authenticated users to insert consultation requests
CREATE POLICY "Allow authenticated users to insert consultation requests" 
ON consultation_requests FOR INSERT 
TO authenticated 
WITH CHECK (true);

-- Policy: Allow authenticated users to update consultation requests
CREATE POLICY "Allow authenticated users to update consultation requests" 
ON consultation_requests FOR UPDATE 
TO authenticated 
USING (true);

-- Policy: Allow anonymous users to insert consultation requests (for the public form)
CREATE POLICY "Allow anonymous users to insert consultation requests" 
ON consultation_requests FOR INSERT 
TO anon 
WITH CHECK (true);

-- Optional: Create a view for easier querying of active requests
CREATE VIEW active_consultation_requests AS
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
FROM consultation_requests
WHERE status NOT IN ('completed', 'cancelled')
ORDER BY created_at DESC;

-- Grant permissions on the view
GRANT SELECT ON active_consultation_requests TO authenticated;

-- Add comments for documentation
COMMENT ON TABLE consultation_requests IS 'Stores consultation requests submitted through the website form';
COMMENT ON COLUMN consultation_requests.id IS 'Unique identifier for the consultation request';
COMMENT ON COLUMN consultation_requests.name IS 'Full name of the person requesting consultation';
COMMENT ON COLUMN consultation_requests.email IS 'Email address for follow-up communication';
COMMENT ON COLUMN consultation_requests.phone IS 'Phone number for contact';
COMMENT ON COLUMN consultation_requests.property_name IS 'Name of the property/company (optional)';
COMMENT ON COLUMN consultation_requests.full_address IS 'Complete address of the property';
COMMENT ON COLUMN consultation_requests.notes IS 'Additional notes or special requirements';
COMMENT ON COLUMN consultation_requests.status IS 'Current status of the consultation request';
COMMENT ON COLUMN consultation_requests.assigned_to IS 'Team member assigned to handle this request';
COMMENT ON COLUMN consultation_requests.follow_up_date IS 'Date for next follow-up action';
COMMENT ON COLUMN consultation_requests.scheduled_visit_date IS 'Date when site visit is scheduled';
