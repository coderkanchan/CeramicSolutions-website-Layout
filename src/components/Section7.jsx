import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";


const items = [
  { id: 1, title: "Lörem ipsum koda astrobel: sutaveligen.", desc: "Amet vitae hendrerit facilisi gravida. Nascetur sed luctus sit elit in mi orci. Aliquet ullamcorper quis felis at scelerisque non faucibus. Amet vitae hendrerit facilisi gravida. Nascetur sed luctus sit elit in mi orci. Aliquet ullamcorper quis felis at scelerisque non faucibus.Amet vitae hendrerit facilisi gravida. Nascetur sed luctus sit elit in mi orci. Aliquet ullamcorper quis felis at scelerisque non faucibus.", icon: <IoIosArrowDown /> },

  { id: 2, title: "Rodod bänera viliga", desc: "Amet vitae hendrerit facilisi gravida. Nascetur sed luctus sit elit in mi orci. Aliquet ullamcorper quis felis at scelerisque non faucibus. Amet vitae hendrerit facilisi gravida. Nascetur sed luctus sit elit in mi orci. Aliquet ullamcorper quis felis at scelerisque non faucibus.Amet vitae hendrerit facilisi gravida. Nascetur sed luctus sit elit in mi orci. Aliquet ullamcorper quis felis at scelerisque non faucibus.", icon: <IoIosArrowDown /> },

  { id: 3, title: "Pregigt primasofi dede facebooka: förutom", desc: "Amet vitae hendrerit facilisi gravida. Nascetur sed luctus sit elit in mi orci. Aliquet ullamcorper quis felis at scelerisque non faucibus. Amet vitae hendrerit facilisi gravida. Nascetur sed luctus sit elit in mi orci. Aliquet ullamcorper quis felis at scelerisque non faucibus.Amet vitae hendrerit facilisi gravida. Nascetur sed luctus sit elit in mi orci. Aliquet ullamcorper quis felis at scelerisque non faucibus.", icon: <IoIosArrowDown /> },

  { id: 4, title: "Ipsum koda astrobel: sutaveligen. Rodod bänera viliga.", desc: "Amet vitae hendrerit facilisi gravida. Nascetur sed luctus sit elit in mi orci. Aliquet ullamcorper quis felis at scelerisque non faucibus. Amet vitae hendrerit facilisi gravida. Nascetur sed luctus sit elit in mi orci. Aliquet ullamcorper quis felis at scelerisque non faucibus.Amet vitae hendrerit facilisi gravida. Nascetur sed luctus sit elit in mi orci. Aliquet ullamcorper quis felis at scelerisque non faucibus.", icon: <IoIosArrowDown /> },

  { id: 5, title: "Rodod bänera viliga. Pregigt primasofi dede facebooka", desc: "Amet vitae hendrerit facilisi gravida. Nascetur sed luctus sit elit in mi orci. Aliquet ullamcorper quis felis at scelerisque non faucibus. Amet vitae hendrerit facilisi gravida. Nascetur sed luctus sit elit in mi orci. Aliquet ullamcorper quis felis at scelerisque non faucibus.Amet vitae hendrerit facilisi gravida. Nascetur sed luctus sit elit in mi orci. Aliquet ullamcorper quis felis at scelerisque non faucibus.", icon: <IoIosArrowDown /> },
]



export default function Section7() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <div className="w-full py-20">

      <div className="max-w-[765px] text-center mx-auto">
        <h1 className="font-semibold text-3xl lg:text-4xl xl:text-[56px] leading-loose">Frequently Asked Questions</h1>
        <p className="text-base lg:text-lg font-normal">Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. Fejkade</p>
      </div>

      <div className="max-w-[1320px] mx-auto px-3 py-20">

        {items.map((item, index) => (

          <div key={item.id} className={`max-w-[1140px] mx-auto shadow-[0_2px_44px_3px_#5757571A] rounded-xl p-7 my-6 ${openIndex === index ? "bg-[#FF0000] text-white" : ""}`}>

            <div className="flex items-center justify-between">

              <span className="text-lg lg:text-xl leading-normal font-normal">{item.title}</span>

               <button onClick={() => toggleFaq(index)} className="w-[27px] h-[27px] lg:w-[32px] lg:h-[32px] bg-[#FF0000] flex items-center justify-center text-2xl text-white rounded-lg">
              <span className={`transition-all duration-500 ease-in-out ${openIndex === index ? "rotate-180" : ""}`}>{item.icon}</span>
            </button>

            </div>

           
            <div className={`overflow-hidden transition-all duration-500 ${openIndex === index ? "max-h-40 pt-4" : "max-h-0 pt-0"}`}>
              <span className="text-base font-normal ">{item.desc}</span>
            </div>
          </div>

        ))}
      </div>
    </div>
  )
}
