import PortfolioCards from "../portfolioCards/portfolioCards";

export default function portfolio() {
  return (
    <>
     <div className="portfolio w-10/12 mx-auto py-14 ">
        <p className="text-[#2370C8] text-xl">OUR PORTFOLIO</p>
        <p className="text-5xl font-medium text-[#262A4E]">Take A Look  At Our Latest Work</p>
        <div className="grid mx-auto lg:grid-cols-3 sm:grid-cols-1  md:grid-cols-2  sm:justify-items-center justify-items-stretch md:py-10 gap-10 ">
          <div className="x">
            <PortfolioCards src="https://assignment01-liart.vercel.app/" />
          </div>
          <div className="x">
            <PortfolioCards src="https://react-todo-app-peach-ten.vercel.app/" />
          </div>
          <div className="x">
            <PortfolioCards src="https://todo-appmustafa.surge.sh/" />
          </div>



          <div className="x"><PortfolioCards src="https://calculatorapp-mustafa.surge.sh/" /> </div>
          <div className="x"><PortfolioCards src="https://smoggy-friction.surge.sh/" /> </div>
          <div className="x"><PortfolioCards src="https://sweet-sky.surge.sh/" /> </div>
        </div>
      </div>
    </>
  )
}
