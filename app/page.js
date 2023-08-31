import Navbar from "./(components)/navbar/navbar"
import Image from "next/image"
import Card from './(components)/servicesCard/servicesCard'
export default function Home() {
  return (
    <>

      <div className="header">
        <Navbar />
        <div className="mx-auto container w-10/12 mt-2 grid pb-10 lg:grid-cols-2 mg:grid-cols-2 sm:grid-cols-1   gap-5">
          <div className="mt-20  lg:hidden  ">
            <Image src='/Frame.png' width={5000} height={5000} />
          </div>
          <div className="lg:mt-32  mt-10   ">
            <p className="text-white text-7xl  font-medium font-sans  ">Creative Digital  Agency</p>
            <p className="text-white py-5  text-sm font-normal leading-7 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

            <button type="button" className="text-white  bg-[#2370C8] px-10 py-2 rounded-full text-center justify-center  "  >Learn More</button>
          </div>
          <div className="mt-20  hidden lg:block  ">
            <Image src='/Frame.png' width={5000} height={5000} />
          </div>
        </div>
      </div>

      <div className="secondSection bg-[#FFFFFF]">




        <div className="services lg:mt-20">
          <p className="text-[#2370C8] text-center">OUR SERVICES</p>
          <p className="text-4xl text-center">We Are Providing Digital services</p>
          <div className=" w-10/12  mx-auto grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-10 my-10 ">
            <div className=""><Card src='/web.webp' title='Web App Development' /> </div>
            <div className=""><Card src='/mobile.webp' title='Mobile App Development' /> </div>
            <div className=""><Card src='/ai.webp' title='AI Based Solutions' /> </div>

          </div>
        </div>


        <div className="aboutus ">
          <div className=" w-10/12 mt-32 mx-auto grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 my-10 ">
            <div className="">
              <Image src="/pngwing.png" width={500} height={500} />
            </div>
            <div className="mt-5">
              <p className="text-[#2370C8] text-sm font-medium">ABOUT US</p>
              <p className="text-5xl font-medium font-sans ">We design, build brands & digital projects.</p>
              <p className="py-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic unde optio sunt nesciunt deserunt totam accusamus quod ratione. Dolorem numquam non corporis, dolores ducimus rerum sit veniam soluta recusandae? Maxime!</p>
              <br />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, deleniti ut excepturi labore facere nobis corporis </p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
