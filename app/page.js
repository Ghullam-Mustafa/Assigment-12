import Navbar from "./(components)/navbar/navbar"
import Image from "next/image"
export default function Home() {
  return (
    <>

      <div className="header">
        <Navbar />
        <div className="mx-auto w-10/12 mt-2 grid pb-10 lg:grid-cols-2 gap-5">
        <div className="mt-20  lg:hidden ">
            <Image src='/Frame.png' width={5000}  height={5000} />
          </div>
          <div className="lg:mt-32  mt-10  ">
            <p className="text-white text-7xl  font-medium w-11/12 ">Creative Digital  Agency</p>
            <p className="text-white py-5 w-11/12 text-sm font-normal leading-7 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

            <button type="button" className="text-white  bg-[#2370C8] px-10 py-2 rounded-full text-center justify-center  "  >Learn More</button>
          </div>
          <div className="mt-20  hidden lg:block">
            <Image src='/Frame.png' width={5000} height={5000} />
          </div>
        </div>
      </div>
    </>
  )
}
