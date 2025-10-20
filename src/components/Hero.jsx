import herobg from '../assets/herobg.png';
import ReviewCards from './ReviewCards.jsx';
import batch1 from '../assets/batch1.png';
import batch2 from '../assets/batch2.png';

export default function Hero() {
  return (
    <div className="relative w-full bg-center bg-cover bg-no-repeat"
      style={{ background: `url(${herobg})` }}>

      <div className='absolute inset-0 bg-[#0000008C]'></div>

      <div className="max-w-[1320px] mx-auto px-3 pt-[250px] ">

        <div className='relative z-10 w-full max-w-[830px] text-left '>

          <h1 className='relative z-20 font-semibold text-3xl lg:text-4xl xl:text-[64px] text-white leading-snug'>Transform Your Space with Precision and Quality:
            Get a Free Quote Today!</h1>

          <p className='max-w-[742px] min-h-[58px] py-6 font-normal text-base lg:text-lg text-white leading-loose'>Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. Fejkade nyheter eurosamma sol: teroktig,</p>

          <button className='my-4 w-[173px] h-[63px] rounded-4xl font-bold text-lg text-white bg-[#FF0000]'>Get a Quote</button>

        </div>

        <div className='w-full max-w-[850px] relative flex flex-col lg:flex-row mt-20 pb-10 lg:pb-0 lg:items-center lg:gap-10'>

          <div className='text-left w-full md:max-w-[530px] max-w-[250px]'>
            <ReviewCards />
          </div>

          <div className='flex items-center gap-8'>

            <div className='w-[100px] h-[100px]'>
              <img src={batch1} className='w-full h-full' />
            </div>

            <div className='w-[100px] h-[100px]'>
              <img src={batch2} className='w-full h-full' />
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}