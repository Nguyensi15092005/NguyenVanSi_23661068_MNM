import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://dxtxpyiyedkwxxfbyhjx.supabase.co";
const SUPABASE_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4dHhweWl5ZWRrd3h4ZmJ5aGp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE3ODM3MjIsImV4cCI6MjA3NzM1OTcyMn0.SrFogygwEA01Cf-TmvZi45dSCkbwvYJ3Di47ctp4wM8";

export const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);
