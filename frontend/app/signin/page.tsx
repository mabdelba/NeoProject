'use client'
import Image from "next/image";
import Logo from '@/public/logo.svg'
import SimpleInput from "@/Components/SimpleInput";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();



  const handleSubmit = (e: any) => {

    e.preventDefault();

    console.log(email)
    console.log(password)

    console.log("you can post")
    router.push('/dashboard');
    
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-[#632B8D] to-[#9a1163] from-50%">
      <Image src={Logo} alt={"Logo"} className="fixed left-6 top-5"/>
      <form onSubmit={handleSubmit} id="register" className="flex  h-fit w-fit  flex-col  space-y-2">
        <h1 className="font-Montserrat font-bold text-4xl text-white">Sign in</h1>
        <span className="font-Poppins  text-xl text-white">Welcome again to 01 NEO</span>
        <div className="h-5"></div>
        <input onChange={(e)=> {
          setEmail(e.target.value)
        }} required type="email" id="email" placeholder="Email" className="font-Montserrat min-w-52 font-bold text-white text-lg w-[30vw] min-h-16 bg-[#414141] bg-opacity-50 px-4 outline-[#DDFE02] rounded-xl placeholder-[#FFFFFF69]" />
        <input onChange={(e)=> {
          setPassword(e.target.value)
        }} required type="password" id="password" placeholder="Password" className="font-Montserrat min-w-52 w-[30vw] font-bold text-white text-lg min-h-16 bg-[#414141] bg-opacity-50 px-4 outline-[#DDFE02] rounded-xl placeholder-[#FFFFFF69]" />
        <div className="h-1"></div>
        <button type="submit" className="min-h-16 mt-2 w-[30vw] min-w-52 bg-pallette-yellow hover:bg-yellow-100 text-2xl font-Montserrat font-semibold  outline-none rounded-xl">Sign in</button>
        <span className="my-0 mx-auto text-white font-Poppins text-lg font-semibold">You don't have an account<span onClick={()=> router.push('/')} className="ml-1 text-lg font-bold text-pallette-yellow hover:underline cursor-pointer underline-offset-4">Sign up</span></span>
      </form>
    </main>
  );
}
