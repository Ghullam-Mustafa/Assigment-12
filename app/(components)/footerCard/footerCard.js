

export default function footerCard(props) {
    return (
        <>
            
            <p className="text-2xl text-white hover:text-[#3782D7] font-medium">{props.title}</p>
            <p className="font-normal py-3 text-white hover:text-[#3782D7]  text-base">{props.h1}</p>
            <p className="font-normal py-3 text-white hover:text-[#3782D7] text-base">{props.h2}</p>
            <p className="font-normal py-3 text-white hover:text-[#3782D7] text-base">{props.h3}</p>
            <p className="font-normal py-3 text-white hover:text-[#3782D7] text-base">{props.h4}</p>
            <p className="font-normal py-3 text-white hover:text-[#3782D7] text-base">{props.h5}</p>
        </>
    )
}
