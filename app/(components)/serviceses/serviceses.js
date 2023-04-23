import Card from '../servicesCard/servicesCard';

export default function serviceses() {
  return (
    <>
    <div className="services lg:mt-20">
          <p className="text-[#2370C8] text-center text-xl">OUR SERVICES</p>
          <p className="text-4xl text-center">We Are Providing Digital services</p>
          <div className=" w-10/12  mx-auto grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-10 my-10 ">
            <div className=""><Card src='/web.webp' title='Web App Development' /> </div>
            <div className=""><Card src='/mobile.webp' title='Mobile App Development' /> </div>
            <div className=""><Card src='/ai.webp' title='AI Based Solutions' /> </div>
          </div>
        </div>

    </>
  )
}
