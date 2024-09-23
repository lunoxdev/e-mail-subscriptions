import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "SUPABASE_URL IN .ENV FILE";
const supabaseAnonKey = "SUPABASE_ANON_KEY IN .ENV FILE";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
