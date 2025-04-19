// pages/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://ekwdhimbdfmudviunyue.supabase.co', // Replace with your Supabase URL
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVrd2RoaW1iZGZtdWR2aXVueXVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5NjY4MTMsImV4cCI6MjA2MDU0MjgxM30.FZIQ86fP42NGIpUUlE9gpp-iY_CErCaxei5UpV3XAY0"
  // Replace with your Supabase API key
)

export default supabase
