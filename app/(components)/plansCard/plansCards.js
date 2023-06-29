import Image from "next/image"

export default function plansCards(props) {
  return (
    <div className=" text-center  hover:shadow-lg   p-5">
    <div className="text-center align-middle ">
    <Image src={props.src}  width={50} height={50} className=' mx-auto' />
    </div>
    <p className='text-center text-2xl'>{props.title}  </p>
    <p className='text-center text-[#646464] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore</p>
</div>
  )
}
