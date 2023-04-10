
import Image from 'next/image'
export default function servicesCard(props) {
    return (
        <>
            <div className="border-[#2370C8] border-2 text-center shadow-lg hover:bg-[#CFEAFF]  p-5">
                <div className="text-center align-middle ">
                <Image src={props.src}  width={50} height={50} className='mx-auto' alt="Picture of the author"/>
                </div>
                <p className='text-center text-2xl'>{props.title}  </p>
                <p className='text-center text-[#646464] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore</p>
            </div>
        </>
    )
}
