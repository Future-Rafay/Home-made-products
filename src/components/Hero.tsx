import Image from "next/image";
import Link from "next/link";


export default function Hero() {
  return (
    <section
       className='bg-[#F9FAFB] py-12 sm:py-16 md:py-20 bg-no-repeat bg-cover'
      //  style={{backgroundImage: "url(/images/bgHero.jpg)"}}
    // className="bg-gradient-to-r from-green-200 via-yellow-200 to-green-200 text-gray-800 py-20"
    >
    
    {/* // <section className="py-16 bg-gradient-to-r from-[#134C28] via-[#9BB536] to-[#669E42] text-white border-b-2 border-solid border-[#134C28]"> */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center text-center lg:text-left">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-snug text-[#134C28]">
              Pure & Natural <br /> Homemade Products
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl my-6 text-[#669E42]">
              Crafted with love in Switzerland, discover the best in organic and healthy products.
            </p>
            <button className="text-white bg-[#9BB536] hover:bg-[#134C28] px-6 py-3 rounded-lg font-medium text-sm sm:text-base md:text-lg shadow-lg lg:hover:shadow-2xl transition">
              <Link href='/products'>Explore Products</Link>
            </button>
          </div>
          <div className="lg:w-1/2 flex justify-center mt-10">
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
