import React, { useRef, useState } from 'react'

const LandingPage = () => {
    const [percentage,setPercentage] = useState(0);
    const containerRef = useRef(null);

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
    <div ref={containerRef} onWheel={(e)=>handleScroll(e)} className='relative h-screen bg-black font-ruddy overflow-y-hidden'>
        <h1 className='text-white'>Landing Page</h1>
        <main className={`flex transition-all ease-linear w-fit gap-[4vmin] absolute left-[50%] top-[50%]  -translate-y-1/2`}>
            <img draggable={false} style={{objectPosition:`${percentage}% center`}} className='w-[40vmin] h-[56vmin] object-cover' src='https://wallpapers.com/images/high/kurama-naruto-4k-face-6sldj5g7h1m7gzxa.webp' />
            <img draggable={false} style={{objectPosition:`${percentage}% center`}} className='w-[40vmin] h-[56vmin] object-cover' src='https://wallpapers.com/images/high/one-piece-gear5-luffy-transformation-gllvkrhrpsyvn3i3.webp' />
            <img draggable={false} style={{objectPosition:`${percentage}% center`}} className='w-[40vmin] h-[56vmin] object-cover' src='https://wallpapers.com/images/high/levi-fanart-4k-7hysh67ja5gbe2ha.webp' />
            <img draggable={false} style={{objectPosition:`${percentage}% center`}} className='w-[40vmin] h-[56vmin] object-cover' src='https://wallpapers.com/images/high/tengen-uzui-losing-his-hand-6ynpundzh79dh642.webp' />
            <img draggable={false} style={{objectPosition:`${percentage}% center`}} className='w-[40vmin] h-[56vmin] object-cover' src='https://wallpapers.com/images/high/jujutsu-kaisen-gojo-blue-eyes-white-hair-2u0uu8aj2620juv3.webp' />
            <img draggable={false} style={{objectPosition:`${percentage}% center`}} className='w-[40vmin] h-[56vmin] object-cover' src='https://wallpapers.com/images/high/black-clover-yami-uggkrj4san36girp.webp' />
            <img draggable={false} style={{objectPosition:`${percentage}% center`}} className='w-[40vmin] h-[56vmin] object-cover' src='https://wallpapers.com/images/high/one-piece-pictures-3c9gbfhk3jpv8xoj.webp' />
            <img draggable={false} style={{objectPosition:`${percentage}% center`}} className='w-[40vmin] h-[56vmin] object-cover' src='https://wallpapers.com/images/high/one-piece-gear5-luffy-transformation-gllvkrhrpsyvn3i3.webp' />
            <img draggable={false} style={{objectPosition:`${percentage}% center`}} className='w-[40vmin] h-[56vmin] object-cover' src='https://wallpapers.com/images/high/one-piece-gear5-luffy-transformation-gllvkrhrpsyvn3i3.webp' />
        </main>
    </div>
  )
}

export default LandingPage