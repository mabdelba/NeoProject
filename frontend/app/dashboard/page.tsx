import React from "react";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import Plus from "@/public/Plus.svg";

const content = [
  {
    question:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem?",
    responses: [
      {
        number: 1,
        response:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem?",
      },
      {
        number: 2,
        response:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem?",
      },
      {
        number: 3,
        response:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem?",
      },
    ],
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem?",
    responses: [
      {
        number: 1,
        response:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem?",
      },
      {
        number: 2,
        response:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem?",
      },
      {
        number: 3,
        response:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem?",
      },
    ],
  },
];

const Dashboard = () => {
  return (
    <div className="w-screen h-screen min-h-screen min-w-screen bg-gradient-to-br from-[#632B8D] to-[#9a1163] from-50% flex justify-center">
      <Image src={Logo} alt="Logo" className="fixed left-6 top-5"></Image>
      <div className="flex items-center flex-col space-y-14">
        {content.map((items, index) => (
          <div className="flex justify-center flex-col items-center space-y-20">
            <div
              key={index}
              className="flex w-[40%] bg-black/30 p-5 rounded-xl"
            >
              <span className=" font-poppins font-medium">
                {items.question}
              </span>
            </div>
            <div className="flex justify-center flex-col items-center space-y-14">
              {items.responses.map((res, index) => (
                <div className="flex flex-col items-center relative w-[40%]">
                  <div className="w-[60px] h-[60px] absolute -left-[30px] -top-[58px] rounded-full bg-[#DDFE02] text-black font-poppins text-4xl font-bold flex justify-center items-center">
                    {res.number}
                  </div>
                  <div className="w-fll border-l-2 border-[#DDFE02] flex justify-center items-center p-5">
                    <span key={index} className="font-poppins font-normal">
                      {res.response}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button className="rounded-full">
        <Image src={Plus} alt="plus" className="fixed right-10 bottom-5"></Image>
      </button>
    </div>
  );
};

export default Dashboard;