import img from '../assets/sec5img.png';


export default function Section5() {
  return (
    <div className="w-full py-20 px-3">

      <div className="relative max-w-[1320px] group mx-auto rounded-3xl bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}>

        <div className='absolute inset-0 bg-[#FF0000BF] group-hover:bg-[#4e2424bf] rounded-3xl'></div>

        <div className='relative z-20 w-full max-w-[650px] mx-auto text-center pb-[50px] pt-[60px]'>

          <h1 className='font-semibold text-3xl lg:text-5xl xl:text-[56px] text-white leading-normal'>
            Interested?
            <br />
            Get in touch with us
          </h1>

          <p className='text-base lg:text-lg font-normal text-white py-5'>Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. </p>

          <button className='my-4 w-[173px] h-[63px] rounded-full font-bold text-lg bg-white text-[#FF0000] hover:bg-[#FF0000] hover:text-white'>Get a Quote</button>

        </div>

      </div>

    </div>
  )
}