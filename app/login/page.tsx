"use server"
import React from 'react'
import LoginClientComponent from "./LoginClientComponent"
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

//add token to cookies
export async function addTokenToCookies(token:string){
  const cookieStore=await cookies()
  cookieStore.set("token",token)
}

async function login() {
  const cookieStore=await cookies()

  //check token is available
  if(cookieStore.has("token")){
    if(cookieStore.get("token")?.value=="QpwL5tke4Pnpja7X4"){
      redirect("/dashboard")
    }
  }

  return (
    <div className='containerFlexBothCenter flex-col bg-[#9cdcf1]'>
      <LoginClientComponent/>
    </div>
  )
}

export default login