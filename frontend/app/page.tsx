'use client'
import Image from "next/image";
import Logo from '@/public/logo.svg'
import SimpleInput from "@/Components/SimpleInput";
import { useState } from "react";
import axios from "axios";

export default function Home() {

  const [firstname, setFirsname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [vpassword, setVpassword] = useState('');


  const handleSubmit = (e: any) => {

    e.preventDefault();

    console.log(firstname)
    console.log(lastname)
    console.log(email)
    console.log(password)
    console.log(vpassword)
    if(password !== vpassword)
      console.log("error ")
    else{

      const apiUrl = "http://localhost:8000/auth/register";
      const requestData = {
        firstName: firstname,
        lastName: lastname,
        email: email,
        password: password,
      };
      axios.post(apiUrl, requestData).then((response)=>{

        console.log(response);
      })
      .catch((e)=>{
        console.log("error", e);
      })
    }
    
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-[#632B8D] to-[#9a1163] from-50%">
      <Image src={Logo} alt={"Logo"} className="fixed left-6 top-5"/>
      <form onSubmit={handleSubmit} id="register" className="flex  h-fit w-fit  flex-col  space-y-2">
        <h1 className="font-Montserrat font-bold text-4xl text-white">Sign up</h1>
        <span className="font-Poppins  text-xl text-white">Welcome to 01 NEO</span>
        <div className="h-5"></div>
        <div className="flex space-x-10 font-Montserrat text-white text-lg font-bold">
          <input onChange={(e)=> {
            setFirsname(e.target.value)
          }} type="text" id="firstname" className="min-h-16 bg-[#414141] bg-opacity-50 px-4 outline-[#DDFE02] rounded-xl placeholder-[#FFFFFF69]" placeholder="First Name" required/>
          <input onChange={(e)=> {
            setLastname(e.target.value)
          }} type="text" id="lastname"  className="min-h-16 bg-[#414141] bg-opacity-50 px-4 outline-[#DDFE02] rounded-xl placeholder-[#FFFFFF69]" placeholder="Last Name" required/>
        </div>
        <input onChange={(e)=> {
          setEmail(e.target.value)
        }} type="email" id="email" placeholder="Email" className="font-Montserrat font-bold text-white text-lg min-h-16 bg-[#414141] bg-opacity-50 px-4 outline-[#DDFE02] rounded-xl placeholder-[#FFFFFF69]" required />
        <input onChange={(e)=> {
          setPassword(e.target.value)
        }} type="password" id="password" placeholder="Password" className="font-Montserrat font-bold text-white text-lg min-h-16 bg-[#414141] bg-opacity-50 px-4 outline-[#DDFE02] rounded-xl placeholder-[#FFFFFF69]"  required/>
        <input onChange={(e)=> {
          setVpassword(e.target.value)
        }} type="password" id="verify" placeholder="Confirm password" className="font-Montserrat font-bold text-white  text-lg min-h-16 bg-[#414141] bg-opacity-50 px-4 outline-[#DDFE02] rounded-xl placeholder-[#FFFFFF69]" required/>
        <div className="h-1"></div>
        <label htmlFor="check" className="font-Montserrat  text-white flex items-center"><input type="checkbox" className="min-h-6 min-w-6 rounded-full mr-2" id="check" required/>Confirm your <span className="text-[#DDFE02] ml-1 hover:text-blue-500 font-Montserrat underline underline-offset-4">privacy policy</span></label>
        <div className="h-1"></div>
        <button type="submit" className="min-h-16 min-w-20 mt-2 bg-pallette-yellow hover:bg-yellow-100 text-2xl font-Montserrat font-semibold  outline-none rounded-xl">Sign up</button>
        <span className="my-0 mx-auto text-white font-Poppins text-lg font-semibold">Already have an account <span className="ml-1 text-lg font-bold text-pallette-yellow hover:underline cursor-pointer underline-offset-4">Sign in</span></span>
      </form>
    </main>
  );
}
