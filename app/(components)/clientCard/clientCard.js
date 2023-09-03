import Image from "next/image"
export default function clientCard(props) {
  return (
<>
<div className="border-[#2370C8] border-2 text-center shadow-lg  justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-700 hover:animate-fade-down hover:animate-duration-1000 hover:bg-[#CFEAFF] duration-1000  p-5">
                <div className="text-center align-middle ">
  
                <Image src={props.src}  width={50} height={50} className=' mx-auto' alt="Picture of the author"/>
                </div>
                <p className='text-center text-2xl text-white '>{props.title}  </p>
                <p className='text-center text-xl text-white'>{props.title2}  </p>
                <p className='text-center  text-white '>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,</p>
            </div>
</>
  )
}
