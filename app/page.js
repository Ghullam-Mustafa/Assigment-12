import Image from "next/image";
import About from "./(components)/about/about";
import Plane from "./(components)/plane/plane";
import Navbar from "./(components)/navbar/navbar";
import Button from "./(components)/button/button";
import Serviceses from "./(components)/serviceses/serviceses";
import PriceCard from "./(components)/priceCard/priceCard";
import ClientCard from "./(components)/clientCard/clientCard";
import Portfolio from "./(components)/portfolio/portfolio";
import BlogsCards from "./(components)/blogsCards/blogsCards";


export default function Home() {
  return (
    <>

      <div className="header">
        <Navbar />
        <div className="mx-auto container w-10/12 mt-2 grid pb-10 lg:grid-cols-2 mg:grid-cols-2 sm:grid-cols-1   gap-5">
          <div className="mt-20  lg:hidden  ">
            <Image src='/Frame.png' width={5000} height={5000} alt="Picture of the author" />
          </div>
          <div className="lg:mt-32  mt-10   ">
            <p className="text-white text-7xl  font-medium font-sans  ">Creative Digital  Agency</p>
            <p className="text-white py-5  text-sm font-normal leading-7 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

            <Button title="Learn More" />
          </div>
          <div className="mt-20  hidden lg:block  justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-700  ">
            <Image src='/Frame.png' width={5000} height={5000} className="animate-fade-up animate-once" alt="Picture of the author" />
          </div>
        </div>
      </div>

      <div className="secondSection bg-[#FFFFFF]">


<Serviceses/>

        


       <About/>
      </div>

      <Plane/>
     

      <Portfolio/>


      <div className="team bg-[#F2F9FF] ">
        <div className="w-10/12 mx-auto py-14">
          <p className="text-[#2370C8] text-xl text-center">OUR TEAM</p>
          <p className="text-[#262A4E] text-5xl text-center">Our top dedicated professionals.</p>
        </div>
        <div className=" w-10/12  mx-auto grid lg:grid-cols-2 justify-items-center  md:grid-cols-2 sm:grid-cols-1 gap-10 md:pb-20 my-5 ">
          {/* <div className="x"><Image src="/certificate.jpg" width={500} height={500} alt="Picture of the author"/> </div> */}
          <div className="w-96 hover:shadow-2xl flex justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-700"><Image src="/ahmad.jpg" width={500} height={500} className="rounded-lg " alt="Picture of the author" /> </div>
          <div className="w-96 hover:shadow-2xl flex justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-700 "><Image src="/mustafa.jpg" width={500} height={500} className="rounded-lg " alt="Picture of the author" /> </div>
        </div>
      </div>

      <div className="pricing bg-#FFFFFF">
        <div className="w-10/12 mx-auto py-14">
          <p className="text-[#2370C8] text-xl ">OUR PRICING</p>
          <div className="flex justify-between">
            <p className="text-[#262A4E] text-5xl ">Choose A Plan That’s Right For You</p>
            <div className=" hidden md:block">
              <Image src='/Group 29.png' width={100} height={500} alt="Picture of the author" />
            </div>
          </div>
        </div>
        <div className=" w-10/12  mx-auto grid lg:grid-cols-3 md:grid-cols-2 md:pb-10 sm:grid-cols-1 gap-10 my-10 ">
          <div className="x"><PriceCard title="Basic plane" src="/Premium.png" price="$50" /> </div>
          <div className="x"><PriceCard title="Standart Plan" src="/Premium.png" price="$99" /> </div>
          <div className="x"><PriceCard title="Premium Plan" src="/Premium.png" price="$150" /> </div>
        </div>
      </div>

      <div className="pricing bg-[#3782D7E5]">
        <div className="w-10/12 mx-auto py-14">

          <p className=" text-5xl text-center text-[white]">We’re trusted by clients.</p>
          <div className=" w-10/12  mx-auto grid lg:grid-cols-2 md:grid-cols-2 md:pb-10 sm:grid-cols-1 gap-10 my-10 ">
            <div className="x hover:animate-fade-down hover:animate-duration-1000 hover:bg-[#CFEAFF] duration-1000"><ClientCard src="/one (2).png" title="Edward Hunter" title2="CONSULTANT" /></div>
            <div className="x"><ClientCard src="/one (1).png" title="Mina Whatson" title2="IT SPCIALIST" /></div>
          </div>

        </div>
      </div>


      <div className="pricing bg-#FFFFFF">
        <div className="w-10/12 mx-auto py-14">
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4">
                <BlogsCards title="Bluebery" />
                <BlogsCards title="Bluebery" />
                <BlogsCards title="Bluebery" />
              </div>
            </div>
          </section>
        </div>
      </div>

      
    </>
  )
}
