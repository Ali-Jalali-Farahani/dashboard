export interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: "male" | "female" | "other"; // یا string اگر جنسیت‌های دیگری هم ممکن باشد
  image: string; // یا URL اگر TypeScript نسخه جدیدی باشد که این تایپ را پشتیبانی کند
  accessToken: string; // JWT token
  refreshToken: string; // JWT refresh token
}

 const fetcher=async (url:string,data:{username: string, password:string})=>{
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(data),
      credentials: 'include' // Include cookies (e.g., accessToken) in the request

    });
    if (!response.ok) {
      console.log("error")
      return null;
    }

    const responseData:User = await response.json();
    return responseData
 }

 export default fetcher
