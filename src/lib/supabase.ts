import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://uxlmulynjzmkepquwiek.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4bG11bHluanpta2VwcXV3aWVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE1OTU0MDcsImV4cCI6MjA4NzE3MTQwN30.Xw-EqNy7Pe6SuO4ufElh7-1ppTFMtzHDyVi-2Xsxiv4';

export const supabase = createClient(supabaseUrl, supabaseKey);

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  category: string;
  status: 'draft' | 'generating' | 'published' | 'archived';
  author: string;
  featured_image_url: string | null;
  meta_description: string | null;
  tags: string[];
  published_at: string | null;
  created_at: string;
  updated_at: string;
}
