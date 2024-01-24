import Image from "next/image";
import Logo from '@/public/logo.svg'
import SimpleInput from "@/Components/SimpleInput";

export default function Home() {

  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-[#632B8D] to-[#9a1163] from-50%">
      <Image src={Logo} alt={"Logo"} className="fixed left-6 top-5"/>
      <form id="register" className="flex  h-fit w-fit  flex-col  space-y-2">
        <h1 className="font-Montserrat font-bold text-4xl text-white">Sign up</h1>
        <span className="font-Poppins  text-xl text-white">Welcome to 01 NEO</span>
        <div className="h-5"></div>
        <div className="flex space-x-10 font-Montserrat text-white text-lg font-bold">
          <input type="text" id="firstname" className="min-h-16 bg-[#414141] bg-opacity-50 px-4 outline-[#DDFE02] rounded-xl placeholder-[#FFFFFF69]" placeholder="First Name"/>
          <input type="text" id="lastname"  className="min-h-16 bg-[#414141] bg-opacity-50 px-4 outline-[#DDFE02] rounded-xl placeholder-[#FFFFFF69]" placeholder="Last Name"/>
        </div>
        <input type="email" id="email" placeholder="Email" className="font-Montserrat font-bold text-white text-lg min-h-16 bg-[#414141] bg-opacity-50 px-4 outline-[#DDFE02] rounded-xl placeholder-[#FFFFFF69]" />
        <input type="password" id="password" placeholder="Password" className="font-Montserrat font-bold text-white text-lg min-h-16 bg-[#414141] bg-opacity-50 px-4 outline-[#DDFE02] rounded-xl placeholder-[#FFFFFF69]" />
        <input type="password" id="verify" placeholder="Confirm password" className="font-Montserrat font-bold text-white  text-lg min-h-16 bg-[#414141] bg-opacity-50 px-4 outline-[#DDFE02] rounded-xl placeholder-[#FFFFFF69]" />
        <div className="h-1"></div>
        <label htmlFor="check" className="font-Montserrat  text-white flex items-center"><input type="checkbox" className="min-h-6 min-w-6 rounded-full mr-2" id="check" />Confirm your <span className="text-[#DDFE02] ml-1 hover:text-blue-500 font-Montserrat underline underline-offset-4">privacy policy</span></label>
        <div className="h-1"></div>
        <button type="submit" className="min-h-16 min-w-20 mt-2 bg-pallette-yellow hover:bg-yellow-100 text-2xl font-Montserrat font-semibold  outline-none rounded-xl">Sign up</button>
        <span className="my-0 mx-auto text-white font-Poppins text-lg font-semibold">Already have an account <span className="ml-1 text-lg font-bold text-pallette-yellow hover:underline cursor-pointer underline-offset-4">Sign in</span></span>
      </form>
    </main>
  );
}
