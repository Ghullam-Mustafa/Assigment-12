import Image from "next/image"
import FooterCard from "../footerCard/footerCard"

export default function footer() {
  return (
    <>
    <div className="pricing bg-[#c6dff8]">
                <div className="w-11/12 mx-auto py-14">
                    <div className=" w-11/12  mx-auto grid md:grid-cols-4 lg:grid-cols-4 sm:grid-cols-2 gap-10 my-10 justify-items-center">
                        <div className="">
                            <Image src="/logo.png" width={100} height={500} alt="Picture of the author"/>
                            <p className="text-white  hover:text-[#3782D7]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi asperiores doloremque amet, ipsam recusandae totam sit reiciendis pariatur eveniet obcaecati assumenda voluptate accusantium facere dolore quo eius nisi ipsum nulla!</p>
                            <div className="flex">
                                <Image src='/facebook.png' width={27} height={27} alt="Picture of the author" />
                                <Image src='/linkedin.png' width={27} height={27} alt="Picture of the author"/>
                                <Image src='/twitter.png' width={27} height={27} alt="Picture of the author"/>
                            </div>
                        </div>
                        
                        <div className="">
                            <FooterCard title="Our Links" h1="Home " h2=" About Us "  h3=" Services " h4="Team " h5=" Blog"/>
                        </div>

                        <div className="">
                            <FooterCard title="Our Company" h1="About Company " h2="  Our Testimonials "  h3=" Latest News  " h4=" Our misson " h5=" Get a free Quot"/>
                        </div>

                        <div className="">
                            <FooterCard title="Our Services" h1="App Development  " h2=" Web Development"  h3="Graphic Design" h4="Web Solution " h5="   App Design "/>
                        </div>




                    </div>


                </div>

                <hr />
                <p className="text-center text-[#2370C880] py-1">@ Copyright 2020 Brandoxide. All rights reserved.</p>
            </div>
    </>
  )
}
