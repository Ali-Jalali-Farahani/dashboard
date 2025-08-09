import "./globals.css";
import { PropsWithChildren } from "react";

const RootLayout:React.FC<PropsWithChildren>=({children})=>{
  return (
    <html lang="en">
        <body>
            {children}
        </body>
    </html>
  );
}

export default RootLayout