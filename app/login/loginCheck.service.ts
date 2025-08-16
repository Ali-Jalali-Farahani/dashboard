interface User {
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

 const fetcher=(data:{username: string, password:string})=>async(url:string)=>{
    const response = await fetch("https://reqres.in/api/login", {
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

    const responseData = await response.json();
    console.log(responseData)
    return responseData
 }

 export default fetcher
