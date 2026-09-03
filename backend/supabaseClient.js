import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

// Try loading local .env file if it exists
try {
  const __dirname = path.dirname(fileURLToPath(import.meta.url))
  dotenv.config({ path: path.join(__dirname, '.env') })
} catch (e) {
  // Ignore missing local .env file in production environments
}

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY || process.env.SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error("⚠️ Supabase URL or Key is missing from Environment Variables!")
}

export const supabase = createClient(supabaseUrl || 'https://placeholder.supabase.co', supabaseKey || 'placeholder')