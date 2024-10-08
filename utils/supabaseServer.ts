import { Database } from '@/types/supabase'
import { createClientComponentClient, createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export const supabaseServer = () => createServerComponentClient<Database>({ cookies })
