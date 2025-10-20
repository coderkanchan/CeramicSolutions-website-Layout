import { FaRegStar } from "react-icons/fa";
import { LuThumbsUp } from "react-icons/lu";
import { FiPhoneCall } from "react-icons/fi";
import img from '../assets/sec2img.png';


const items = [
  { id: 1, title: "High Quality Materials", desc: "Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird.", icon: <FaRegStar /> },
  { id: 2, title: "Durability with Warranty", desc: "Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird.", icon: <LuThumbsUp /> },
  { id: 3, title: "24/7 Support", desc: "Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird.", icon: <FiPhoneCall /> },
]



export default function Section2() {
  return (
    <div className="w-full bg-[#FFEBEB] py-[110px] ">

      <div className="max-w-[1320px] mx-auto px-3 flex xl:flex-row flex-col items-center justify-between gap-20">

        <div className="xl:max-w-[590px]">

          <div className="">

            <h2 className="font-semibold text-4xl lg:text-5xl xl:text-[56px] leading-loose">Why Choose us?</h2>
            <p className="font-normal text-base lg:text-lg">Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. </p>

            <div className="max-w-[650px] flex flex-col gap-6 py-10 ">
              {items.map((item) => (
                <div key={item.id} className="w-full rounded-4xl p-4 flex flex-col md:flex-row gap-5 group">
                  <div className="w-[72px] h-[72px] group-hover:bg-[#FF0000] bg-[#B400011A] text-[#FF0000] text-3xl flex items-center justify-center rounded-xl group-hover:text-white group-hover:scale-120">
                    {item.icon}
                  </div>
                  <div className="max-w-[470px]">
                    <h4 className="font-semibold text-xl mb-3 ">{item.title}</h4>
                    <span className="text-base font-normal">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className='my-4 w-[173px] h-[63px] rounded-4xl font-bold text-lg text-white bg-[#FF0000]'>Get a Quote</button>

        </div>

        <div className="w-full max-w-[570px] md:min-h-[605px] relative">
          <div className="absolute xl:bottom-0 -bottom-20  -left-25 bg-[#FF0000] md:w-[350px] md:h-[410px] rounded-4xl "></div>
          <div className="relative z-50 xl:h-[525px] w-full h-full transform transition duration-200 ease hover:scale-110 cursor-pointer">
            <img src={img} className="w-full h-full "/>
          </div>
        </div>

      </div>
    </div>
  )
}