import { createClient } from '@supabase/supabase-js'

const URL = import.meta.env.VITE_SUPABASE_URL
const KEY = import.meta.env.VITE_SUPABASE_KEY

if (!URL && !KEY) throw new Error('Missing Supabase URL or Key')

const supabase = createClient(URL, KEY)

export default supabase
