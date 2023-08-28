import Image from "next/image"
import Link from "next/link"


export default function navbar() {
  return (
<>
    <div className="flex  justify-between mx-auto container items-center m-1 bg-transparent blur-5">
        <div className="items-center ">
            <Image src='/logo.png'width={120} height={43.693}  alt=" logo"  className="hidden sm:hidden md:hidden lg:block "  />
            <Image src='/logo.png'width={60} height={21}  alt=" logo" className=" lg:hidden "/>
        </div>
        <div className=" hidden sm:hidden md:hidden lg:flex space-x-10 items-center second">
            <div className="text-white"> <Link href="/">HOME</Link> </div>
            <div className="text-white"> <Link href="/about">ABOUT</Link></div>
            <div className="text-white"><Link href="/pages">PAGES</Link></div>
            <div className="text-white"> <Link href="/services">SERVICES</Link></div>
            <div className="text-white"><Link href="/portfolio">PORTFOLIO</Link></div>
            <div className="text-white"><Link href="/blog">BLOG</Link></div>
            <div className="text-white"> <Link href="/contact">CONTACT</Link></div>
        </div>
        <div className=" items-center space-x-10 border p-2 rounded-full  hidden  sm:hidden  md:flex lg:flex border-[#2370C8]">
          <p  className="text-[#2370C8]" >Search</p>
          <div className=""> <Image src='/magnify.png' width={21} height={21.846} alt="search" /> </div>
        </div>
    </div>
</>
  )
}
