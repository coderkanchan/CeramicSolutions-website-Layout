import img from '../assets/card1.png';
import { IoIosArrowRoundForward } from "react-icons/io";

const items = [
  { id: 1, src: img, desc: "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.", btn: "Learn more"  },
  { id: 2, src: img, desc: "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.", btn: "Learn more"  },
  { id: 3, src: img, desc: "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.", btn: "Learn more"  }
]



export default function Section6() {
  return (
    <div className="w-full py-20">

      <div className="max-w-[600px] mx-auto text-center">
        <h1 className="text-4xl lg:text-5xl xl:text-[56px] font-semibold leading-normal">Our Blog</h1>
        <p className="text-base lg:text-lg font-normal ">Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. Fejkade</p>
      </div>

      <div className="w-full max-w-[1320px] mx-auto px-3 grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-7  place-items-center py-10">
        {items.map((item) => (
          <div key={item.id} className='w-full xl:max-w-[420px]  p-8 rounded-3xl border border-[#0000001F]  transition-all duration-300  ease-in  hover:border-none hover:shadow-[0_0_15px_5px_#B6B6B660] group'>
            <div className='xl:max-w-[370px] h-[250px] transform transition duration-200 ease group-hover:scale-107  '>
              <img src={item.src} className='w-full h-full object-cover rounded-xl' />
            </div>
            <div className='xl:max-w-[320px] mt-8'>
              <span className='py-6 font-semibold text-xl lg:text-2xl leading-normal'>{item.desc}</span>
               <button className='mt-6 text-sm lg:text-base font-semibold text-[#FF0000] flex items-center justify-between'>{item.btn} <IoIosArrowRoundForward size={30} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}