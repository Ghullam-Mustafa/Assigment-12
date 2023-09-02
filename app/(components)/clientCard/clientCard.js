import Image from "next/image"
export default function clientCard(props) {
  return (
<>
<div className="border-[#2370C8] border-2 text-center shadow-lg hover:bg-[#CFEAFF]  p-5">
                <div className="text-center align-middle ">
  return (
                <Image src={props.src}  width={50} height={50} className=' mx-auto' alt="..." />
                </div>
                <p className='text-center text-2xl text-white'>{props.title}  </p>
                <p className='text-center text-xl text-white'>{props.title2}  </p>
                <p className='text-center  text-white '>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,</p>
            </div>
</>
  )
}
