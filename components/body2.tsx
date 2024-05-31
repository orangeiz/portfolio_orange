import Image from "next/image";

const Body2 = () => {
    const imageUrls = [
        "/images/tech-stack/1.png",
        "/images/tech-stack/2.png",
        "/images/tech-stack/3.png",
        "/images/tech-stack/4.png",
        "/images/tech-stack/5.png",
        "/images/tech-stack/6.png",
        "/images/tech-stack/7.png",
        "/images/tech-stack/8.png",
        "/images/tech-stack/9.png",
        "/images/tech-stack/10.png" ];
    return (
        <div className="flex flex-col p-5 gap-y-3">       
            <div className="text-black font-extrabold text-center text-2xl ">
                Tech Stacks
            </div>  
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
                {imageUrls.map((url, index) =>(
                <div className="relative w-24 h-24 flex" key={index}>
                    <Image src={url} alt={`Tech-${index}`} width={200} height={200} />

                </div>
            ))}

            </div>
    </div>

    );
}
 
export default Body2;