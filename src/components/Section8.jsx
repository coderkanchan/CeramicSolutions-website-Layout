import { FaLocationDot } from "react-icons/fa6";


const items = [
  { id: 1, icon: <FaLocationDot />, title: "Knoxville" },
  { id: 2, icon: <FaLocationDot />, title: "Sevierville" },
  { id: 3, icon: <FaLocationDot />, title: "Maynardville" },
  { id: 4, icon: <FaLocationDot />, title: "Knoxville" },
  { id: 5, icon: <FaLocationDot />, title: "Sevierville" },
  { id: 6, icon: <FaLocationDot />, title: "Maynardville" },
  { id: 7, icon: <FaLocationDot />, title: "Knoxville" },
  { id: 8, icon: <FaLocationDot />, title: "Sevierville" },
  { id: 9, icon: <FaLocationDot />, title: "Maynardville" },
  { id: 10, icon: <FaLocationDot />, title: "Knoxville" },
  { id: 11, icon: <FaLocationDot />, title: "Sevierville" },
  { id: 12, icon: <FaLocationDot />, title: "Maynardville" },
  { id: 13, icon: <FaLocationDot />, title: "Knoxville" },
  { id: 14, icon: <FaLocationDot />, title: "Sevierville" },
  { id: 15, icon: <FaLocationDot />, title: "Maynardville" },
  { id: 16, icon: <FaLocationDot />, title: "Knoxville" },
  { id: 17, icon: <FaLocationDot />, title: "Sevierville" },
  { id: 18, icon: <FaLocationDot />, title: "Maynardville" },
  { id: 19, icon: <FaLocationDot />, title: "Knoxville" },
  { id: 20, icon: <FaLocationDot />, title: "Sevierville" },

]


export default function Section8() {
  return (
    <div className="w-full py-20">

      <div className="max-w-[1320px] mx-auto px-3 ">

        <div className="max-w-[600px] ">
          <h1 className="text-4xl lg:text-5xl xl:text-[56px] font-semibold leading-tight">We provide services in these areas</h1>
          <p className="text-base lg:text-lg font normal py-6">Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. Fejkade</p>
        </div>

        <div className="max-w-[1320px] gap-6 flex items-center justify-center flex-wrap">
          {items.map((item) => (
            <div key={item.id} className="w-full  max-w-[410px]  flex gap-5 rounded-3xl items-center shadow-[0_2px_44px_3px_#5757571A] p-6">
              <div className="lg:w-[50px] lg:h-[50px] w-[40px] h-[40px] text-white text-lg lg:text-3xl rounded-full bg-[#FF0000] flex items-center justify-center">
                {item.icon}
              </div>
              <span className="text-lg lg:text-2xl font-semibold">{item.title}</span>
            </div>
          ))}
        </div>

      </div>

    </div>
  )
}