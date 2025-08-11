import { cookies } from "next/headers";
export default async function getToken(params) {
  const cookieStore=await cookies()
  if(cookieStore.has("token")){
    const token=String(cookieStore.get("token"))
    return token;
  }
  else{
    return undefined
  }
}