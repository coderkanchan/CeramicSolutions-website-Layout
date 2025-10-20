import img from '../assets/sec4img.png';
import { RiVerifiedBadgeFill } from "react-icons/ri";



const items = [
  { id: 1, icon: <RiVerifiedBadgeFill />, title: "Contact us", desc: "Lörem ipsum deligen vuprer diar faktigt på dehädiska att sara. Persion. Repp löng blippbetalning. Megaliga fadat om än dening" },
  { id: 2, icon: <RiVerifiedBadgeFill />, title: "Get a Qoute", desc: "Lörem ipsum deligen vuprer diar faktigt på dehädiska att sara. Persion. Repp löng blippbetalning. Megaliga fadat om än dening" },
  { id: 3, icon: <RiVerifiedBadgeFill />, title: "Get your Work Done", desc: "Lörem ipsum deligen vuprer diar faktigt på dehädiska att sara. Persion. Repp löng blippbetalning. Megaliga fadat om än dening" }
]



export default function Section4() {
  return (
    <div className="w-full py-20">

      <div className="max-w-[1320px] mx-auto px-3 flex xl:flex-row flex-col items-center justify-center  gap-20">

        <div className="w-full max-w-[600px] h-auto xl:max-w-[500px] xl:h-[730px] relative">

          <div className="absolute -bottom-15 xl:bottom-5  xl:-left-15 -left-20 bg-[#FF0000] md:w-[340px] md:h-[400px] rounded-3xl "></div>

          <div className="relative z-50 xl:h-[650px] w-full h-full ">
            <img src={img} className="w-full h-auto xl:h-full object-cover rounded-3xl transform transition duration-200 ease hover:scale-110 cursor-pointer" />
          </div>
        </div>

        <div className='xl:max-w-[600px]'>

          <div className=''>
            <h1 className=' font-semibold text-4xl lg:text-5xl xl:text-[56px] leading-loose'>How it works?</h1>
            <p className='text-base lg:text-lg pb-5'>Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. </p>
          </div>

          <div className=''>
            {items.map((item) => (
              <div key={item.id} className='max-w-[592px] flex gap-5 p-6 my-5 shadow-[0_1px_28px_1px_#4747471A] rounded-3xl'>
                <span className='text-[#FF0000] text-3xl'>{item.icon}</span>
                <div className='w-full max-w-[508px] '>
                  <h4 className='text-lg lg:text-xl font-semibold mb-4'>{item.title}</h4>
                  <span className='text-sm lg:text-base font-normal'>{item.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <div className='flex items-center gap-6 mt-9'>
            <button className='w-full h-full max-w-[173px] min-h-[63px]  transition-all duration-300 rounded-4xl font-bold text-sm md:text-base lg:text-lg text-[#FF0000] border-2 border-[#FF0000] hover:text-white hover:bg-[#FF0000] '>Get a Quote</button>

            <button className='w-full h-full max-w-[228px] min-h-[63px]   transition-all duration-300 rounded-4xl text-sm md:text-base lg:text-lg font-bold text-[#FF0000] border-2 border-[#FF0000] hover:text-white hover:bg-[#FF0000]'>View Tile Visualizer</button>
          </div>

        </div>

      </div>
    </div>
  )
}