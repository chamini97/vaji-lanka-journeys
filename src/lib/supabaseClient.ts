import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hfxckibuczktprzwpanq.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmeGNraWJ1Y3prdHByendwYW5xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkzMjM2NTgsImV4cCI6MjA2NDg5OTY1OH0.6gds-4LRINXrkhka6TnQNyD36zvLw1sl5mmm31piXdE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
