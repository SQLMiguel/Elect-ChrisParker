-- Create supporters table for campaign updates signup
-- Collects email and phone for SMS/email campaigns

CREATE TABLE IF NOT EXISTS public.supporters (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT,
  zip_code TEXT,
  sms_opt_in BOOLEAN DEFAULT false,
  email_opt_in BOOLEAN DEFAULT true,
  source TEXT DEFAULT 'website',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS supporters_email_idx ON public.supporters(email);
CREATE INDEX IF NOT EXISTS supporters_zip_idx ON public.supporters(zip_code);
CREATE INDEX IF NOT EXISTS supporters_created_at_idx ON public.supporters(created_at DESC);

-- Enable Row Level Security
ALTER TABLE public.supporters ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anonymous users (website signups)
CREATE POLICY "Allow anonymous inserts" ON public.supporters
  FOR INSERT
  WITH CHECK (true);

-- Create policy to allow service role to read all supporters (for campaign exports)
CREATE POLICY "Allow service role full access" ON public.supporters
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Create function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
DROP TRIGGER IF EXISTS update_supporters_updated_at ON public.supporters;
CREATE TRIGGER update_supporters_updated_at
  BEFORE UPDATE ON public.supporters
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
