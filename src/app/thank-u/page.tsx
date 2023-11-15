import Image from 'next/image';

import PrideFlagGif from '../../../public/pride-flag.gif';
import PrideGif from '../../../public/pride.gif';
import PrideHeartGif from '../../../public/pride-heart.gif';

export default function ThankU() {
  return (
    <>
      <div className='w-screen px-4 py-5 flex mt-14'>
        <div className="grid grid-flow-col gap-x-6 m-auto">
          <Image src={PrideGif} alt='A pride flag' width={200} height={140} className='mt-10' />
          <Image src={PrideFlagGif} alt='A pride flag' width={220} height={180} />
        </div>
      </div>

      <h1 className="text-5xl text-center pt-12 font-semibold text-red-500">Eu te amo demasiadamente muito, minha gata</h1>

      <Image src={PrideHeartGif} alt='A pride flag' width={120} height={100} className="rounded-full m-auto mt-14" />
    </>
  )
}
