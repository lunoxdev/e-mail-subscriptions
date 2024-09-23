import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "SUPABASE_URL HERE";
const supabaseAnonKey = "SUPABASE_ANON_KEY HERE";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
