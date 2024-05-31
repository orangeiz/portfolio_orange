import Image from "next/image";
const Header = () => {
    return ( 

        <div className="bg-color1 flex flex-row gap-x-10 px-5 py-5 relative overflow-hidden">
            <div className="flex flex-col gap-y-5 px-5 py-5">
                <div className="font-extrabold text-5xl text-black w-70">
                    Tanveer Ahmed
                </div>
                <div className="font-semibold text-xl text-black w-15">
                    Full Stack Developer
                </div>
            </div>
            <div className="pr-20 gap-20 relative flex justify-end">
                <div className="absolute bg-emerald-600 w-32 h-32 rounded-full top-1/2 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 flex items-center justify-center overflow-hidden">
                    <Image  
                        className="drop-shadow-md" 
                        src="/images/p1.png"
                        fill
                        alt="profile" 
                        objectFit="cover"
                    />
                </div>
            </div>
            <div className="text-3xl pt-12 gap-y-2 font-bold text-black hidden md:block">
                Elevating Heights
            </div>
        </div>
     );
}
 
export default Header;
