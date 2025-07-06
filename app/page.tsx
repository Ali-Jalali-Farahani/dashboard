import Link from "next/link";

export default function Home() {
  return (
      <div className="containerFlexBothCenter flex-col bg-[#b6ffe7]">
        <Link href={"/login"} className="LinkStyle">
          Login
        </Link>
        <Link href={"/dashboard"} className="LinkStyle">
          dashboard
        </Link>
      </div>
  );
}
