import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_KEY = process.env.SUPABASE_KEY

if (!SUPABASE_URL || !SUPABASE_KEY)
  throw new Error('Missing Supabase URL or Key')

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

export default supabase
