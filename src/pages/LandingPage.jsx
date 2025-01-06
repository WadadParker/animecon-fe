import { useRef, useState } from 'react'
import { useNavigate } from 'react-router';

const LandingPage = () => {
    const [percentage,setPercentage] = useState(0);
    const containerRef = useRef(null);

    const navigate = useNavigate();

    const handleScroll = (e) => {
        if (containerRef.current) {
          const container = containerRef.current;
    
          // 1) Convert vertical scroll to horizontal
          container.scrollLeft += e.deltaY;
    
          // 2) Calculate how far we can scroll horizontally
          const maxScroll = container.scrollWidth - container.clientWidth;
          const scrolled = container.scrollLeft;

          
          // 3) Compute the scroll percentage [0..100]
          //    Optionally clamp to avoid going under 0 or above 100.
          const scrollPercentage = Math.min(
              100, 
              Math.max(0, (scrolled / maxScroll) * 100)
            );
            
        console.log(maxScroll,scrolled,scrollPercentage)
          setPercentage(scrollPercentage);
        }
      };

  return (
    <div ref={containerRef} onWheel={(e)=>handleScroll(e)} className=' scroll-smooth relative h-screen bg-black font-ruddy overflow-y-hidden'>
        <aside className='text-primary font-ruddy pl-14 pt-40'>
                <h1 className='text-primary font-ruddy text-9xl font-bold'>AnimeCon</h1>
                <p className='text-8xl'>Hubli</p>
            </aside>
        <main className={`flex w-fit gap-[4vmin] absolute left-[50%] top-[50%] transition-all ease-linear  -translate-y-1/2`}>
            
            <img draggable={false} style={{objectPosition:`${percentage}% center`}} className='w-[30vmin] transition-all ease-linear h-[56vmin] object-cover' src='https://wallpapers.com/images/high/kurama-naruto-4k-face-6sldj5g7h1m7gzxa.webp' />
            <img draggable={false} style={{objectPosition:`${percentage}% center`}} className='w-[20vmin] transition-all ease-linear h-[56vmin] object-cover' src='https://wallpapers.com/images/high/one-piece-gear5-luffy-transformation-gllvkrhrpsyvn3i3.webp' />
            <img draggable={false} style={{objectPosition:`${percentage}% center`}} className='w-[30vmin] transition-all ease-linear h-[56vmin] object-cover' src='https://wallpapers.com/images/high/levi-fanart-4k-7hysh67ja5gbe2ha.webp' />
            <img draggable={false} style={{objectPosition:`${percentage}% center`}} className='w-[30vmin] transition-all ease-linear h-[56vmin] object-cover' src='https://wallpapers.com/images/high/tengen-uzui-losing-his-hand-6ynpundzh79dh642.webp' />
            <img draggable={false} style={{objectPosition:`${percentage}% center`}} className='w-[30vmin] transition-all ease-linear h-[56vmin] object-cover' src='https://wallpapers.com/images/high/jujutsu-kaisen-gojo-blue-eyes-white-hair-2u0uu8aj2620juv3.webp' />
            <img draggable={false} style={{objectPosition:`${percentage}% center`}} className='w-[30vmin] transition-all ease-linear h-[56vmin] object-cover' src='https://wallpapers.com/images/high/black-clover-yami-uggkrj4san36girp.webp' />
            <img draggable={false} style={{objectPosition:`${percentage}% center`}} className='w-[30vmin] transition-all ease-linear h-[56vmin] object-cover' src='https://wallpapers.com/images/high/one-piece-pictures-3c9gbfhk3jpv8xoj.webp' />
        </main>
        <button onClick={()=>navigate("/payment")} className='fixed font-ruddy bg-red-600 bottom-10 left-1/2 z-20 text-white font-bold tracking-wide p-3 peer -rotate-3 hover:text-red-600 hover:bg-white hover:border hover:border-red-600 hover:rotate-3 transition-all ease-linear'>Register Now</button>
        <button className='fixed font-ruddy bg-white bottom-10 left-[49.5%] z-10 text-transparent font-bold tracking-wide p-3 px-5 -rotate-6 peer-hover:rotate-6 peer-hover:bg-red-600 transition-all ease-linear'>Register Now</button>
    </div>
  )
}

export default LandingPage