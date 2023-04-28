import Navbar from "../navbar/navbar"
export default function header(props) {
  return (
    <>
    <div className="bg-[#122E99] ">
        <Navbar/>
        <p className="text-center text-yellow-100 p-20 font-bold text-6xl" >{props.title}</p>

    </div>
    
    </>
  ) 
}
