import { use } from "react"
import QRCode from 'qrcode';

const generateQRCode = async () => {
  return await QRCode.toDataURL("https://x.com/wadadparker");
  
}

const qrCodePromise = generateQRCode();

const TicketCard = () => {
  const qrCode = use(qrCodePromise)

  return (
    <aside className="flex flex-col items-center pt-12 px-3 space-y-10 w-full h-full bg-bg-light "
     style={{clipPath:"polygon(6.5% 1.5%,99.7% 0.4%,97% 95%,0.5% 95.65%)"}}>
      <header className="ml-2" style={{WebkitTextStroke:"1.84px black",textShadow:"3.68px 4.29px 0 black"}}>
        <h1 className="text-primary-dark font-bold text-6xl text-nowrap">ANIME CON</h1>
        <h2 className="text-primary-dark font-bold text-5xl">Hubli</h2>
      </header>
      <img className="size-60 aspect-auto object-contain bg-transparent" src={qrCode} />
      <article className="flex font-bold text-3xl self-stretch mx-10 justify-between items-center">
        <p>21-dec</p>
        <p>4:00 PM</p>
      </article>
      <button className="relative self-stretch mx-14">
        <section className="relative z-10 bg-primary-dark flex justify-center items-center space-x-1 p-4 -skew-x-12">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
          </svg>
          <b className="inline-block -rotate-3 text-xl pb-1">View on Map</b>
        </section>
        <aside className="absolute top-2 left-2 -right-2 -bottom-2  bg-black p-4  -skew-x-12 "></aside>
      </button>
    </aside>
  )
}

const Home = () => {
  return (
    <div className='font-ruddy w-full relative flex'>
      <main className="bg-bg-light h-full pt-20 pl-14 w-[60%]">
        <h2 className=" text-5xl mb-4">KONNICHIWA,</h2>
        <h1 className='text-8xl bg-transparent font-bold tracking-[-0.020em] text-primary-red z-10' style={{WebkitTextStroke:"2.34px #9C0000",textShadow:"12px 10px 0 black"}}>Veena San</h1>
        <h3 className=" text-5xl mt-8">Here is your ticket</h3>
      </main>
      <section className=" grow flex flex-col justify-center items-start pl-3.5 pt-4 pb-2 bg-primary-blue -ml-10 mt-3"
       style={{clipPath:"polygon(1% 0%,75% 1%,100% 50%,100% 100%,3% 100%,0% 97%)"}}>
        <div className="relative w-[80%] flex h-full  bg-black" style={{clipPath:"polygon(5% 1%,91% 0%,100% 100%,0% 96%)"}}>
          <main className=" w-[90.5%]  bg-primary-red p-1"
          style={{clipPath:"polygon(6% 1.5%,99.7% 0.4%,97% 95%,0% 95.65%)"}}
          >
            <TicketCard />
          </main>
        </div>
      </section>
    </div>
  )
}

export default Home