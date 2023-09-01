import Image from "next/image";
import Navbar from "./(components)/navbar/navbar";
import Plans from "./(components)/plansCard/plansCards";
import Button from "./(components)/button/button";
import Card from './(components)/servicesCard/servicesCard';
import PriceCard from "./(components)/priceCard/priceCard";
import ClientCard from "./(components)/clientCard/clientCard";
import PortfolioCards from "./(components)/portfolioCards/portfolioCards";

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

            <Button title="Learn More" />
          </div>
          <div className="mt-20  hidden lg:block  ">
            <Image src='/Frame.png' width={5000} height={5000} />
          </div>
        </div>
      </div>

      <div className="secondSection bg-[#FFFFFF]">




        <div className="services lg:mt-20">
          <p className="text-[#2370C8] text-center text-xl">OUR SERVICES</p>
          <p className="text-4xl text-center">We Are Providing Digital services</p>
          <div className=" w-10/12  mx-auto grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-10 my-10 ">
            <div className=""><Card src='/web.webp' title='Web App Development' /> </div>
            <div className=""><Card src='/mobile.webp' title='Mobile App Development' /> </div>
            <div className=""><Card src='/ai.webp' title='AI Based Solutions' /> </div>
          </div>
        </div>


        <div className="aboutus ">
          <div className=" w-10/12 mt-32 mx-auto grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10 my-10 ">
            <div className="">
              <Image src="/pngwing.png" width={500} height={500} />
            </div>
            <div className="mt-5">
              <p className="text-[#2370C8] text-sm font-medium">ABOUT US</p>
              <p className="text-5xl font-medium font-sans ">We design, build brands & digital projects.</p>
              <p className="py-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic unde optio sunt nesciunt deserunt totam accusamus quod ratione. Dolorem numquam non corporis, dolores ducimus rerum sit veniam soluta recusandae? Maxime!</p>

              <p className="py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, deleniti ut excepturi labore facere nobis corporis </p>
              <Button title="Learn More" />
            </div>
          </div>
        </div>
      </div>


      <div className="things  bg-[#F2F9FF] py-10">
        <div className=" w-10/12  p-5 mx-auto grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-10 my-10 border-[5px] border-neutral-50	 ">
          <div className="">
            <Plans src="/plane.png" title="Smart planing" />
          </div>

          <div className="">
            <Plans src="/partnership.png" title="Our partnership" />
          </div>

          <div className="">
            <Plans src="/idea.png" title="Super ideas" />
          </div>


        </div>
      </div>

      <div className="portfolio w-10/12 mx-auto py-14 ">
        <p className="text-[#2370C8] text-xl">OUR PORTFOLIO</p>
        <p className="text-5xl font-medium text-[#262A4E]">Take A Look  At Our Latest Work</p>


        <div className="grid mx-auto lg:grid-cols-3 sm:grid-cols-1  md:grid-cols-2  sm:justify-items-center justify-items-stretch md:py-10 gap-10 ">
          <div className="">
            <PortfolioCards src="https://assignment01-liart.vercel.app/" />
          </div>
          <div className="">
            <PortfolioCards src="https://react-todo-app-peach-ten.vercel.app/" />
          </div>
          <div className="">
            <PortfolioCards src="https://todo-appmustafa.surge.sh/" />
          </div>



          <div className=""><PortfolioCards src="https://calculatorapp-mustafa.surge.sh/" /> </div>
          <div className=""><PortfolioCards src="https://smoggy-friction.surge.sh/" /> </div>
          <div className=""><PortfolioCards src="https://sweet-sky.surge.sh/" /> </div>
        </div>
      </div>


      <div className="team bg-[#F2F9FF] ">
        <div className="w-10/12 mx-auto py-14">
          <p className="text-[#2370C8] text-xl text-center">OUR TEAM</p>
          <p className="text-[#262A4E] text-5xl text-center">Our top dedicated professionals.</p>
        </div>
        <div className=" w-10/12  mx-auto grid lg:grid-cols-2 justify-items-center  md:grid-cols-2 sm:grid-cols-1 gap-10 md:pb-20 my-5 ">
          {/* <div className=""><Image src="/certificate.jpg" width={500} height={500}/> </div> */}
          <div className="w-96 hover:shadow-2xl "><Image src="/ahmad.jpg" width={500} height={500} className="rounded-lg " /> </div>
          <div className="w-96 hover:shadow-2xl "><Image src="/mustafa.jpg" width={500} height={500} className="rounded-lg " /> </div>
        </div>
      </div>

      <div className="pricing bg-#FFFFFF">
        <div className="w-10/12 mx-auto py-14">
          <p className="text-[#2370C8] text-xl ">OUR PRICING</p>
          <div className="flex justify-between">
            <p className="text-[#262A4E] text-5xl ">Choose A Plan That’s Right For You</p>
            <div className=" hidden md:block">
              <Image src='/Group 29.png' width={100} height={500} />
            </div>
          </div>
        </div>
        <div className=" w-10/12  mx-auto grid lg:grid-cols-3 md:grid-cols-2 md:pb-10 sm:grid-cols-1 gap-10 my-10 ">
          <div className=""><PriceCard title="Basic plane" src="/Premium.png" price="$50" /> </div>
          <div className=""><PriceCard title="Standart Plan" src="/Premium.png" price="$99" /> </div>
          <div className=""><PriceCard title="Premium Plan" src="/Premium.png" price="$150" /> </div>
        </div>
      </div>

      <div className="pricing bg-[#3782D7E5]">
        <div className="w-10/12 mx-auto py-14">

          <p className=" text-5xl text-center text-[white]">We’re trusted by clients.</p>
          <div className=" w-10/12  mx-auto grid lg:grid-cols-2 md:grid-cols-2 md:pb-10 sm:grid-cols-1 gap-10 my-10 ">
            <div className=""><ClientCard src="/one (2).png" title="Edward Hunter" title2="CONSULTANT" /></div>
            <div className=""><ClientCard src="/one (1).png" title="Mina Whatson" title2="IT SPCIALIST" /></div>
          </div>

        </div>
      </div>

    </>
  )
}
