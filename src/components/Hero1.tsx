import Image from "next/image";


export default function Hero1() {
  return (
    <section
       className='bg-[#F9FAFB] py-12 sm:py-16 md:py-20 bg-no-repeat bg-cover'
      //  style={{backgroundImage: "url(/images/bgHero.jpg)"}}
    // className="bg-gradient-to-r from-green-200 via-yellow-200 to-green-200 text-gray-800 py-20"
    >
    
    {/* // <section className="py-16 bg-gradient-to-r from-[#134C28] via-[#9BB536] to-[#669E42] text-white border-b-2 border-solid border-[#134C28]"> */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center text-center lg:text-left">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-[#134C28]">
              Welcome to Homemade Products
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 text-[#669E42]">
              Discover pure and natural products, crafted with love in Switzerland.
            </p>
            <button className="text-[10px] px-3 py-2 sm:text-sm sm:px-5 sm:py-3 md:text-base md:px-6 md:py-3 bg-[#134C28] hover:bg-[#669E42] text-white font-semibold rounded shadow transition">
              Explore Products
            </button>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <Image
              src="/images/hero.png"
              alt="Hero Image"  
              width={600}
              height={800}
              className="w-[80%] md:w-full max-w-md h-auto"
            />    
          </div>
        </div>
      </div>
    </section>
  );
}
