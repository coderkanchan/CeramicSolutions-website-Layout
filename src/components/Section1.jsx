import { IoIosArrowRoundForward } from "react-icons/io";
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import card4 from '../assets/card4.png';
import card5 from '../assets/card5.png';
import card6 from '../assets/card6.png';
import card7 from '../assets/card7.png';

const data = [
  { id: 1, src: card1, title: "Kitchen Backsplash", desc: "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.", btn: "Learn more" },
  { id: 2, src: card2, title: "Custom Showers", desc: "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.", btn: "Learn more" },
  { id: 3, src: card3, title: "Custom Flooring", desc: "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.", btn: "Learn more" },
  { id: 4, src: card4, title: "Large Format Tiling", desc: "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.", btn: "Learn more" },
  { id: 5, src: card5, title: "Wall Tiling", desc: "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.", btn: "Learn more" },
  { id: 6, src: card6, title: "ADA Compliant Showers", desc: "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.", btn: "Learn more" },
  { id: 7, src: card7, title: "Fireplace Tiling", desc: "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.", btn: "Learn more" }
]



export default function Section1() {
  return (
    <div className="w-full pt-[150px] pb-20">

      <h1 className="text-center text-4xl xl:text-[56px] font-semibold">What we do?</h1>

      <div className="max-w-[1320px] mx-auto py-10 xl:py-20 px-3 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">

        {data.map((item) => (
          <div key={item.id} className='border border-[#0000001F]  transition-all duration-300  ease-in p-7 rounded-3xl hover:border-none hover:shadow-[0_0_15px_5px_#B6B6B660] group'>

            <div className='w-full h-full'>

              <div className='w-full h-[280px] transform transition duration-200 ease group-hover:scale-104 '>
                <img src={item.src} className='w-full h-[280px] object-cover rounded-xl' />
              </div>

              <div className='mt-6  xl:max-w-[350px] '>
                <h3 className='font-semibold text-lg lg:text-2xl mb-4'>{item.title}</h3>
                <span className='w-full max-w-[350px] font-normal text-sm lg:text-base '>{item.desc}</span>
              </div>

              <button className='mt-5 text-sm lg:text-base font-semibold text-[#FF0000] flex items-center justify-between'>{item.btn} <IoIosArrowRoundForward size={30} /></button>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}