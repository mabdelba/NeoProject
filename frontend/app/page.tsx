import Image from "next/image";
import Logo from '@/public/logo.svg'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-[#632B8D] to-[#9a1163] from-50%">
      <Image src={Logo} alt={"Logo"} className="fixed left-6 top-5"/>
      <form id="register" className="flex h-fit w-fit  flex-col  space-y-2">
        <h1 className="font-Montserrat font-bold text-4xl text-white">Sign up</h1>
        <span className="font-Poppins  text-xl text-white">Welcome to 01 NEO</span>
        <div className="h-5"></div>
        <div className="flex space-x-10 font-Montserrat text-white text-lg font-bold">
          <input type="text" id="firstname" className="min-h-16 bg-[#414141] bg-opacity-50 px-4 outline-[#DDFE02] rounded-xl placeholder-[#FFFFFF69]" placeholder="First Name"/>
          <input type="text" id="lastname"  className="min-h-16 bg-[#414141] bg-opacity-50 px-4 outline-[#DDFE02] rounded-xl placeholder-[#FFFFFF69]" placeholder="Last Name"/>
        </div>
        <input type="email" id="email" placeholder="Email" className="font-Montserrat font-bold text-white text-lg min-h-16 bg-[#414141] bg-opacity-50 px-4 outline-[#DDFE02] rounded-xl placeholder-[#FFFFFF69]" />
        <input type="password" id="password" placeholder="Password" className="font-Montserrat font-bold text-white text-lg min-h-16 bg-[#414141] bg-opacity-50 px-4 outline-[#DDFE02] rounded-xl placeholder-[#FFFFFF69]" />
        <input type="password" id="verify" placeholder="Confirm password" className="font-Montserrat font-bold text-white text-lg min-h-16 bg-[#414141] bg-opacity-50 px-4 outline-[#DDFE02] rounded-xl placeholder-[#FFFFFF69]" />
        <label htmlFor="check"><input type="checkbox" className="min-h-10 min-w-8" id="check" /></label>
      </form>
    </main>
  );
}
