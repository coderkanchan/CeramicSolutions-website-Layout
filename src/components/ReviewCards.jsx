import { IoStar } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";

const datas = [
  { id: 1, logo: <FcGoogle size={55} />, title: "Google Review", rating: "4.6", desc: "Based on 145 reviews" },
  { id: 2, logo: <IoStar className='text-green-500' />, title: "Trust Pilot Review", rating: "4.6", desc: "Based on 145 reviews" },
];


export default function ReviewCards() {
  return (
    <div className='flex md:flex-row flex-col items-center gap-8 text-center justify-center py-10'>
      {datas.map((data) => (
        <div key={data.id} className='w-full max-w-[250px] bg-white p-2 px-3 flex gap-4 items-center justify- border border-[#14141426] rounded-2xl'>

          <span className=' lg:text-5xl'>{data.logo}</span>
          <div className='flex flex-col items-start'>
            <span className='text-sm'> {data.title}</span>
            <span className='text-2xl flex gap-1 items-center my-1.5'>
              {data.rating}
              <div className='flex items-center gap-1'>
                {[...Array(5)].map((_, i) => (
                  <span key={i} className='text-lg text-[#FCB547]'> <IoStar /></span>
                ))}
              </div>
            </span>
            <span className='text-sm'>{data.desc}</span>
          </div>

        </div>
      ))}
    </div>
  )
}