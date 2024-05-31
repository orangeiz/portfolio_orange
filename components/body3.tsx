"use client";
import {motion} from "framer-motion";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Link from "next/link";
import { MoveUpRight } from 'lucide-react';
import { Github } from 'lucide-react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const projects=[{
    num:"01",
    category:"fullstack",
    title:"project 1",
    description:"This is my spotify clone website",
    stack:[{name:"Next JS"},{name:"Tailwind CSS"},{name:"Node Js"},{name:"Postgresql"}],
    image:'/images/w1.png',
    live:"https://spotify-clone-xi-nine-59.vercel.app/",
    github:"https://github.com/orangeiz/spotify-clone",
},
{
    num:"02",
    category:"fullstack",
    title:"project  2",
    description:"This is my discord clone website",
    stack:[{name:"Next JS"},{name:"Tailwind CSS"},{name:"Node Js"},{name:"Postgresql"}],
    image:'/images/w2.png',
    live:"https://discord-clo-ne-production.up.railway.app/",
    github:"https://github.com/orangeiz/discord-clo-ne",
}
]
const Body3 = () => {
    const [project,setProject]=useState(projects[0]);

    const handleSlideChange = (swiper:any) => {
        setProject(projects[swiper.activeIndex]);
    };
    
    return (
        <motion.section
            initial={{opacity:0}}
            animate={{opacity:1}}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
                <div className="container mx-auto">
                    <div className="flex flex-col xl:flex-row xl:gap-[30px] ">
                        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col  
                        xl:justify-between order-2 xl:order-none">
                        
                        <div className=" flex flex-col gap-[30px] h-[50%]">
                            <div className="text-8xl leading-none font-extrabold text-black text-outline">
                                {project.num}
                            </div>
                            <h2 className="text-[42px] font-bold leading-none text-black group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
                            <p className="text-black/60">{project.description}</p>
                            <ul className="flex gap-4">
                            {project.stack.map((item,index)=>{
                                return(
                                    <li key={index} className="text-xl   text-purple-500">
                                        {item.name}
                                        {index!==project.stack.length-1&&","}
                                    </li>
                                )
                            })}
                            </ul>
                            <div className="border border-black/5">
                            </div>
                            <div className="flex ">
                                <Link href={project.live}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-black/5 flex justify-center items-center group hover:bg-color1">
                                            <MoveUpRight size={40} className="text-black text-3xl  group-hover:text-green-400 "/>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                        <p>Live Project</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                </Link>
                                <Link href={project.github}>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-black/5 flex justify-center items-center group hover:bg-color1">
                                            <Github size={40}className="text-black text-3xl  group-hover:text-green-400 "/>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                        <p>Github Repo</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                        </div>
                        <div className="w-full xl:w-[50%]">
                            <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]}  navigation pagination={{ clickable: true }} spaceBetween={30} slidesPerView={1} className=" xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
                                {projects.map((project,index)=>{
                                    return <SwiperSlide key={index} className="w-full">
                                        <div className="h-[460px] relative group-flex justify-center items-center bg-pink-50/20">
                                            <div></div>
                                            <div className="relative w-full h-full">
                                                <Image src={project.image} fill className="object-cover" alt={project.title}/>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                })}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </motion.section>
            
    )}

export default Body3;