import React from 'react'
import Image from 'next/image'

const Clients = () => {
  return (
    <>
      <div className="sm:py-[30px] font-montserrat xl:max-w-[1440px] bg-white mx-auto">
        <div className="p-10 sm:p-0">
          <h6 className="sm:text-[30px] md:text-[60px] text-[70px] font-black sm:text-center sm:ml-[5px] ml-[60px] text-black">See Our Clients</h6>
        </div>
        <article className="sm:h-[350px] h-[450px] wrapper sm:py-1 sm:pb-0 pb-5">
          <div className="marquee">
            <div className="marquee__group gap-[8px]">
              <Image src={"/assets/client01.png"} height={150} width={200} alt="pic" />
              <Image src={"/assets/client02.png"} height={150} width={200} alt="pic" />
              <Image src={"/assets/client03.png"} height={150} width={200} alt="pic" />
              <Image src={"/assets/client04.png"} height={150} width={200} alt="pic" />
              <Image src={"/assets/client05.png"} height={150} width={200} alt="pic" />
            </div>

            <div aria-hidden="true" className="marquee__group gap-[8px]">
              <Image src={"/assets/client01.png"} height={150} width={200} alt="pic" />
              <Image src={"/assets/client02.png"} height={150} width={200} alt="pic" />
              <Image src={"/assets/client03.png"} height={150} width={200} alt="pic" />
              <Image src={"/assets/client04.png"} height={150} width={200} alt="pic" />
              <Image src={"/assets/client05.png"} height={150} width={200} alt="pic" />
            </div>
          </div>

          <div className="marquee marquee--reverse">
            <div className="marquee__group gap-[8px]">
              <Image src={"/assets/client01.png"} height={150} width={200} alt="pic" />
              <Image src={"/assets/client02.png"} height={150} width={200} alt="pic" />
              <Image src={"/assets/client03.png"} height={150} width={200} alt="pic" />
              <Image src={"/assets/client04.png"} height={150} width={200} alt="pic" />
              <Image src={"/assets/client05.png"} height={150} width={200} alt="pic" />
            </div>

            <div aria-hidden="true" className="marquee__group gap-[8px]">
              <Image src={"/assets/client01.png"} height={150} width={200} alt="pic" />
              <Image src={"/assets/client02.png"} height={150} width={200} alt="pic" />
              <Image src={"/assets/client03.png"} height={150} width={200} alt="pic" />
              <Image src={"/assets/client04.png"} height={150} width={200} alt="pic" />
              <Image src={"/assets/client05.png"} height={150} width={200} alt="pic" />
            </div>
          </div>
        </article>
      </div>
    </>
  )
}

export default Clients