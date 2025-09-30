-- Create a simple contact inquiries table for Daybreak Cleaning
CREATE TABLE IF NOT EXISTS public.contact_inquiries (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    notes TEXT,
    status VARCHAR(50) DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'completed', 'archived')),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for email lookups
CREATE INDEX IF NOT EXISTS idx_contact_inquiries_email ON public.contact_inquiries(email);

-- Create index for status filtering
CREATE INDEX IF NOT EXISTS idx_contact_inquiries_status ON public.contact_inquiries(status);

-- Create index for created_at ordering
CREATE INDEX IF NOT EXISTS idx_contact_inquiries_created_at ON public.contact_inquiries(created_at DESC);

-- Enable Row Level Security
ALTER TABLE public.contact_inquiries ENABLE ROW LEVEL SECURITY;

-- Create policy for inserting (anyone can submit an inquiry)
CREATE POLICY "Anyone can create contact inquiry" ON public.contact_inquiries
    FOR INSERT
    WITH CHECK (true);

-- Create policy for selecting (only authenticated users can view)
CREATE POLICY "Authenticated users can view inquiries" ON public.contact_inquiries
    FOR SELECT
    USING (auth.role() = 'authenticated');

-- Create policy for updating (only authenticated users can update)
CREATE POLICY "Authenticated users can update inquiries" ON public.contact_inquiries
    FOR UPDATE
    USING (auth.role() = 'authenticated');

-- Add comment to table
COMMENT ON TABLE public.contact_inquiries IS 'Stores contact form submissions from the Daybreak Cleaning website';

-- Add comments to columns
COMMENT ON COLUMN public.contact_inquiries.id IS 'Unique identifier for the inquiry';
COMMENT ON COLUMN public.contact_inquiries.name IS 'Name of the person submitting the inquiry';
COMMENT ON COLUMN public.contact_inquiries.email IS 'Email address for follow-up communication';
COMMENT ON COLUMN public.contact_inquiries.notes IS 'Any additional notes or questions from the user';
COMMENT ON COLUMN public.contact_inquiries.status IS 'Current status of the inquiry';
COMMENT ON COLUMN public.contact_inquiries.created_at IS 'Timestamp when the inquiry was submitted';
COMMENT ON COLUMN public.contact_inquiries.updated_at IS 'Timestamp when the inquiry was last updated';
