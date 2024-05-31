import { Linkedin, Instagram, Mail, Phone, Github,StickyNote} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const contacts = [
  {
    title: "My Socials",
    stack: [
      { name: "Linkedin", icon: Linkedin, Link: "https://www.linkedin.com/in/tanveer-ahmed-008978289/" },
      { name: "Instagram", icon: Instagram, Link: "https://www.instagram.com/orangeizz7/" },
      { name: "Github", icon: Github, Link: "https://github.com/orangeiz" }
    ]
  },
  {
    title: "Mail Me",
    stack: [{ name: "Gmail:orangegamerz2124@gmail.com", icon: Mail, Link: "" }]
  },
  {
    title: "Call Me",
    stack: [{ name: "Phone No:+91-9749728488", icon: Phone, Link: "" }]
  },
  {
    title: "Not Your Average Typescript Developer",
    stack: [{ name: "My Resume", icon: StickyNote, Link: "" }]
  },
];

const Footer = () => {
  return (
    <div>
      <div className="text-black font-extrabold text-5xl text-center">
        Reach out
      </div>
      {contacts.map((contact, index) => (
        <div key={index} className="flex flex-col">
          <div className="text-black font-bold text-3xl p-5">
            {contact.title}
          </div>
          <div className=" border border-transparent "></div>
          <div className="flex flex-col">
            {contact.stack.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div className="flex flex-row items-center p-2" key={idx}>
                  <Link href={item.Link}>
                    <div className="w-[70px] h-[70px] rounded-full bg-black/5 hover:bg-color1 flex items-center justify-center">
                        <IconComponent className="text-black hover:text-emerald-400" size={40} />
                    </div>
                  </Link>
                  <div className="text-semibold text-xl text-black ml-3">
                    {item.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
      <div  className="bg-color1 p-5 pr-20 gap-5 flex flex-row">
        <Image src={"/images/p7.png"} alt="loader" width={150} height={150} />
            <div className="text-black pt-2 font-black text-3xl ">
                All Rights Reserved 2024
        </div> 
      </div>
    </div>
  );
};

export default Footer;
