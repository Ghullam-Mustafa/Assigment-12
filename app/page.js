import Navbar from "./(components)/navbar/navbar"

export default function Home() {
  return (
    <>
    
    <div className="header">
      <Navbar  />
      <div className="mx-auto w-10/12  grid  lg:grid-cols-2 ">
        <div className="my-32 ">
          <p className="text-white text-7xl  font-medium ">Creative <br/> Digital  Agency</p>
        </div>
        <div className="my-32">
          <p className="text-white text-7xl  font-medium ">Creative <br/> Digital  Agency</p>
        </div>
      </div>
    </div>
    </>
  )
}
