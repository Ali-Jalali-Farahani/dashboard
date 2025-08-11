<<<<<<< HEAD
import type { Metadata } from "next";
import "./globals.css";
import { PropsWithChildren } from "react";


const RootLayout:React.FC<PropsWithChildren>=({children})=>{
  return (
    <html lang="en">
      <body>
        {children}
      </body>
=======
import "./globals.css";
import { PropsWithChildren } from "react";

const RootLayout:React.FC<PropsWithChildren>=({children})=>{
  return (
    <html lang="en">
        <body>
            {children}
        </body>
>>>>>>> f54ad7991d2fcd1f6a4f51a5430abb45855e5c91
    </html>
  );
}

export default RootLayout