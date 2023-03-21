import Plans from "../plansCard/plansCards";
export default function plane() {
  return (
   <>
   
   <div className="things  bg-[#F2F9FF] py-10">
        <div className=" w-10/12  p-5 mx-auto grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-10 my-10 border-[5px] border-neutral-50	 ">
          <div className="x">
            <Plans src="/plane.png" title="Smart planing" />
          </div>

          <div className="x">
            <Plans src="/partnership.png" title="Our partnership" />
          </div>

          <div className="x">
            <Plans src="/idea.png" title="Super ideas" />
          </div>


        </div>
      </div>
   </>
  )
}
