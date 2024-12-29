import { useState } from "react";

const TicketCard = () => {
  // const [qrImg, setQrImg] = useState('');
  // const generateQrCode = async () => {
  //   try {
  //     // Convert the input text into a data URL for the QR code image
  //     const url = await QRCode.toDataURL(text);
  //     setQrImg(url);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  return (
    <aside className="flex flex-col items-center justify-around w-full h-full bg-bg-light "
     style={{clipPath:"polygon(7% 1.5%,99.7% 0.4%,100% 94%,1% 95.65%)"}}>
      <header className="" style={{WebkitTextStroke:"1.84px black",textShadow:"3.68px 4.29px 0 black"}}>
        <h1 className="text-primary-dark font-bold text-6xl text-nowrap">ANIME CON</h1>
        <h2 className="text-primary-dark font-bold text-5xl">Hubli</h2>
      </header>
      dwd
    </aside>
  )
}

const Home = () => {
  return (
    <div className='font-ruddy w-full relative flex'>
      <main className="bg-bg-light h-full pt-20 pl-14 w-2/3">
        <h2 className=" text-5xl mb-4">KONNICHIWA,</h2>
        <h1 className='text-8xl bg-transparent font-bold tracking-[-0.020em] text-primary-red z-10' style={{WebkitTextStroke:"2.34px #9C0000",textShadow:"12px 10px 0 black"}}>Veena San</h1>
        <h3 className=" text-5xl mt-8">Here is your ticket</h3>
      </main>
      <section className=" grow flex flex-col justify-center items-start pl-3.5 pt-4 pb-2 bg-primary-blue -ml-10 mt-3"
       style={{clipPath:"polygon(1% 0%,70% 1%,100% 50%,100% 100%,3% 100%,0% 97%)"}}>
        <div className="relative w-[80%] flex h-full  bg-black hover:cursor-pointer" style={{clipPath:"polygon(5% 1%,84% 0%,100% 100%,0% 96%)"}}>
          <main className=" w-[83.5%]  bg-primary-red p-1"
          style={{clipPath:"polygon(7% 1.5%,99.7% 0.4%,100% 94%,1% 95.65%)"}}
          >
            <TicketCard />
          </main>
        </div>
      </section>
    </div>
  )
}

export default Home