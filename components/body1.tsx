'use client'
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
 
import {
  Carousel,
  CarouselContent,
  CarouselItem,

} from "@/components/ui/carousel"
import Image from "next/image";

const Body1 = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 1000, stopOnInteraction: false })
    );



    const imageUrls = [
        "/images/p2.jpg",
        "/images/p3.jpg",
        "/images/p4.jpg",
        "/images/p5.jpg",
        "/images/p6.jpg"
    ];

    return (
        <div className="flex flex-col gap-y-5 px-5 py-5">
            
            <div className="flex flex-row px-2">
            <Carousel
              plugins={[Autoplay({ delay: 1000, stopOnInteraction: false })
              ]}
                className="w-full max-w-xs"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent>
                    {imageUrls.map((url, index) => (
                        <CarouselItem key={index}>
                            <div className="p-5">
                                <div className="aspect-square relative ">
                                    <Image
                                        className="drop-shadow-md "
                                        src={url}
                                        alt={`profile-${index}`}
                                       width={300}
                                       height={300}
                                    />
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
               
            </Carousel>
            <div className="flex flex-col pr-10">
                <div className="text-4xl font-extrabold text-center text-black p-5 ">
                Hi,Im Tanveer Ahmed                
                </div>
                <div className="text-l font-bold text-center capitalize text-blue-900 p-5">
                a passionate web developer currently studying at IIIT Kalyani. Over the past few years, I have immersed myself in the world of web development, cultivating a strong skill set in both frontend and backend technologies. Through various projects, I have not only built my technical skills but also gained the confidence to tackle complex challenges and continuously strive for higher levels of expertise.
                </div>
            </div>
            </div>     
        </div>
    );
}
 
export default Body1;
