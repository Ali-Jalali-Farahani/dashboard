'use server';

import { cookies } from 'next/headers';

export default async function addTokenToCookies(token:string){
  const cookieStore=await cookies()
  cookieStore.set("accessToken",token)
}