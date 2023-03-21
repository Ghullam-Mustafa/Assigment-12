import Image from "next/image"
import Button from "../button/button"

export default function about() {
  return (
    <>
     <div className="aboutus ">
          <div className=" w-10/12 mt-32 mx-auto grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10 my-10 ">
            <div className="x">
              <Image src="/pngwing.png" width={500} height={500} alt="Picture of the author" />
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
    </>
  )
}
