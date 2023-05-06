import Image from "next/image"
import Button from "../button/button";

export default function priceCard(props) {
    return (
        <>

            <div className="border-[#2370C8] border-2 text-center shadow-lg hover:bg-[#2370C8] hover:text-white  p-5">
                <p className="text-[#262A4E] text-xl font-medium  hover:text-white py-3">{props.title}</p>
                <div className="text-center align-middle ">
                    <Image src={props.src} width={50} height={50} className=' mx-auto' />
                </div>
                <p className="font-normal text-base"><span className="text-[#2370C8] text-3xl font-medium  hover:text-white">  {props.price}</span>/Mounth </p>
               <p className="font-normal text-base">Graphic Design</p>
               <p className="font-normal text-base">Web Design</p>
               <p className="font-normal text-base">UI/UX</p>
               <p className="font-normal text-base">HTML/CSS</p>
               <p className="font-normal text-base">SEO Marketing</p>
               <p className="font-normal text-base">Business Analysis</p>
               <Button title="start now" />
            </div>

        </>
    )
}
