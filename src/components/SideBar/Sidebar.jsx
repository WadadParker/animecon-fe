/* eslint-disable react/prop-types */
import { useCallback } from 'react'
import { useLocation } from 'react-router-dom';
import Icons from './Icons';

const CoolAFCircle = ({classname}) => {
    return (
        <svg className={classname} width="103" height="101" viewBox="0 0 103 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M47.7523 0.0932693C45.7728 0.260887 44.7192 0.404556 44.7352 0.500336C44.7432 0.556206 44.2882 0.644012 43.5539 0.731812C42.8914 0.80365 42.0373 0.931351 41.6622 1.01117C39.7146 1.4342 38.0385 1.84926 36.8571 2.21642C36.1308 2.43991 35.181 2.72726 34.7499 2.86295C31.0384 3.96444 26.4648 6.17541 22.8331 8.60188C20.9654 9.85502 18.1637 12.0261 16.6632 13.391C14.9471 14.9554 12.369 17.5255 11.4032 18.651C9.13632 21.285 7.15683 24.1185 5.87974 26.5929C5.26514 27.7742 3.7486 31.0866 3.29363 32.22C2.43958 34.3831 1.44185 37.951 0.98689 40.4413C0.5878 42.6523 0.5 43.5622 0.5 45.6295C0.5 47.593 0.555873 48.2156 0.715509 48.1677C0.867163 48.1118 1.01084 47.593 1.33809 45.9488C1.50571 45.0947 1.68131 44.2087 1.72122 43.9932C1.78507 43.6819 1.79305 43.7937 1.75314 44.512C1.72122 45.0149 1.69727 46.26 1.69727 47.2817C1.69727 49.3171 1.74516 49.5326 2.05645 49.0058C2.19214 48.7903 2.28793 48.3752 2.42362 47.5052L2.6072 46.3079L2.55931 47.8325C2.53536 48.8621 2.55133 49.5964 2.61518 50.0913C2.71894 50.8177 2.71894 50.8256 2.82271 50.5782C2.90252 50.3946 3.09409 48.7663 3.09409 48.2954C3.09409 48.2794 3.14996 48.2635 3.21382 48.2635C3.41336 48.2635 3.72465 47.0502 4.21952 44.3444C4.47494 42.9157 4.79421 41.2794 4.9299 40.7127C5.20927 39.5473 5.56047 38.3341 5.60836 38.382C5.6323 38.398 5.59239 38.6933 5.52854 39.0365C5.38487 39.7708 5.39285 39.7229 5.48863 39.7229C5.53652 39.7229 5.56845 39.6591 5.56845 39.5793C5.57643 39.4835 5.60836 39.5074 5.69616 39.6671C5.76001 39.7868 5.84781 39.8666 5.8957 39.8427C5.93561 39.8107 6.09525 39.5473 6.2469 39.26C6.40654 38.9407 6.51828 38.7891 6.52627 38.8849C6.52627 38.9806 6.55819 39.0844 6.5981 39.1243C6.63801 39.1722 6.63801 39.5952 6.5981 40.0821C6.5103 41.3033 6.63003 42.2771 6.8615 42.2771C6.96527 42.2771 7.19674 41.7104 7.72354 40.138C8.25832 38.5815 8.29025 38.5097 8.36208 38.7252C8.40199 38.837 8.48181 38.7332 8.68136 38.2782C9.27999 36.9612 10.9562 33.7047 11.5947 32.6351C12.4009 31.2702 12.8319 30.6476 15.0029 27.7422C17.3336 24.6293 18.3473 23.4001 20.3667 21.285C21.3645 20.2393 21.5321 20.1276 20.8935 20.9258C19.7521 22.3705 19.1854 23.4401 19.5685 23.4401C19.7122 23.4401 20.5583 22.7855 22.1307 21.4526C26.8639 17.4297 30.0726 15.2427 34.1593 13.2712C38.6211 11.1082 43.1628 9.85502 48.5106 9.29629C49.8515 9.1606 54.8402 9.1606 56.1731 9.29629C58.7672 9.56767 61.4571 10.0705 63.5643 10.6692C77.301 14.5643 88.0205 24.8369 92.4425 38.3421C93.3923 41.2555 94.0069 44.2965 94.3421 47.7447C94.4698 49.1096 94.4698 53.1883 94.3421 54.609C93.8393 60.0845 92.3866 65.2009 89.8963 70.2534C86.5998 76.9581 81.5792 82.689 75.2896 86.9353C68.2416 91.6845 60.3556 94.111 51.1446 94.3664C43.8253 94.5739 36.8971 92.9776 29.8332 89.4496C28.7077 88.8909 28.9871 89.1463 30.2322 89.8168C35.4284 92.6184 41.0157 94.2786 47.3133 94.8932C48.75 95.0289 53.8504 95.0289 55.2951 94.8932C66.1264 93.8396 75.3374 89.5693 83.0239 82.0265C83.8461 81.2124 84.8917 80.1348 85.3307 79.632C86.4242 78.3868 86.496 78.323 85.8974 79.1531C85.7537 79.3526 85.642 79.5761 85.6499 79.6479C85.6739 79.8315 83.854 81.8669 82.4572 83.2318C79.3523 86.2489 76.0239 88.7153 72.3762 90.6708C70.3967 91.7324 66.749 93.0973 63.9075 93.8316C60.4594 94.7256 57.8493 95.0848 53.3795 95.2763C52.262 95.3242 51.0488 95.3961 50.6896 95.4439C49.0693 95.6355 44.4558 95.1167 41.4068 94.3903C34.3429 92.7062 27.7659 89.3858 22.0509 84.6126C21.1011 83.8145 18.8342 81.6195 17.3735 80.071C16.2002 78.8338 14.8752 77.1736 13.7897 75.5772C13.5104 75.1702 13.2709 74.8589 13.247 74.8828C13.1272 75.0025 15.2025 77.8201 16.5115 79.3207C16.8787 79.7437 17.4613 80.4142 17.8046 80.8133C18.6826 81.827 21.2367 84.3093 22.3702 85.2671C26.9677 89.0984 32.0361 91.9 37.6553 93.7119C39.2996 94.2467 41.7899 94.8693 43.3623 95.1566C43.9769 95.2604 44.6634 95.3881 44.8789 95.428C45.1183 95.4679 45.1902 95.4998 45.0624 95.5078C44.6394 95.5238 41.9815 95.0289 40.3851 94.6298C37.3121 93.8715 34.2471 92.7621 31.4694 91.3972C24.6769 88.0608 19.1615 83.5032 14.7635 77.5727C14.3005 76.9501 13.9094 76.4552 13.8855 76.4792C13.8376 76.5191 14.4283 77.3572 15.2983 78.4746C19.2573 83.559 24.174 87.7335 29.7134 90.7028C36.7534 94.4702 44.799 96.3379 53.0602 96.1224C54.1378 96.0985 55.3191 96.0585 55.6942 96.0346L56.3727 96.0027L55.6703 96.1144C54.3772 96.314 52.3977 96.4177 50.1868 96.4177C45.238 96.4097 41.5105 95.8271 37.2562 94.3983C33.3611 93.0893 28.9312 90.8544 25.6028 88.5237C17.5172 82.8646 11.4032 74.9467 8.29025 66.1188C7.77143 64.6342 7.61977 64.706 8.11465 66.1986C10.597 73.7334 15.4978 80.9889 21.7875 86.4564C22.1307 86.7518 22.4101 87.0152 22.4101 87.0311C22.4101 87.0551 22.2025 86.9034 21.9551 86.6879C19.1375 84.3253 16.6711 81.7232 14.4682 78.7939C12.6643 76.3994 11.4111 74.3241 9.66312 70.852C8.98466 69.5111 8.37805 68.3617 8.31419 68.2978C8.21841 68.202 8.20245 68.202 8.20245 68.3377C8.20245 68.5293 8.3541 69.0321 8.63346 69.7665C8.74521 70.0618 8.82503 70.3412 8.80108 70.3811C8.66539 70.5966 11.1956 75.1223 12.7601 77.4529C15.5776 81.6514 19.4009 85.6662 23.5674 88.8111C24.7328 89.6811 26.9118 91.1258 28.1969 91.8761C29.5059 92.6344 29.6655 92.7541 28.7556 92.2752C26.5846 91.1497 23.6153 89.1224 21.3325 87.2147C17.7487 84.2295 14.7395 80.8931 12.2093 77.0938C11.2834 75.7209 10.3336 74.1245 10.3895 74.0687C10.4533 74.0048 9.95844 73.063 9.7589 72.8874C9.6711 72.7996 9.47155 72.4404 9.32788 72.0892C9.18421 71.738 8.87292 71.0914 8.64145 70.6524C7.78739 69.0561 6.53425 65.576 5.84781 62.9181C4.96981 59.5019 4.53081 56.6124 4.37118 53.0925C4.25943 50.7618 4.23549 50.5862 4.22751 52.0149C4.1876 55.479 4.86605 60.0287 6.00745 63.9956C7.32445 68.5532 9.35981 72.9991 11.922 76.8942C12.337 77.5248 12.6563 78.0835 12.6324 78.1234C12.5366 78.2671 13.67 79.8156 15.6255 82.2181C15.7612 82.3857 15.6575 82.3298 15.3063 82.0345C14.7156 81.5476 14.6118 81.6035 14.979 82.2101L15.2264 82.6252L14.8593 82.2261C14.2527 81.5795 12.6882 79.6001 11.8581 78.4347C9.27999 74.811 7.05307 70.5726 5.59239 66.5019C5.3689 65.8873 5.14541 65.2727 5.09752 65.145L5.00972 64.9056L5.04165 65.1849C5.05761 65.3366 5.29707 66.0948 5.56845 66.8611C8.01887 73.7175 11.93 79.9193 17.0623 85.0676C18.6905 86.6959 19.5606 87.4781 21.3724 88.9308C23.336 90.5032 24.2938 91.2056 25.9221 92.2832C32.8104 96.8567 40.5288 99.4748 48.8458 100.065C50.5699 100.185 54.0819 100.161 55.8618 100.018C61.8562 99.5386 67.7787 97.9263 73.1664 95.3083C77.7719 93.0733 82.4492 89.8966 85.8415 86.7039C86.2965 86.2808 86.6796 85.9376 86.6956 85.9376C86.8313 85.9376 86.4002 86.4963 85.8814 86.9832C82.6967 90.0243 78.0114 93.241 73.789 95.2763C67.0523 98.5329 60.0842 100.153 52.4217 100.265C44.6394 100.369 37.2562 98.7404 30.2003 95.3561C23.0087 91.908 16.7829 86.7996 11.93 80.3503C6.55021 73.2066 3.29363 65.2089 2.21609 56.4847C1.98462 54.5851 1.80902 53.4517 1.73718 53.4117C1.49773 53.2681 1.60947 55.91 1.93673 58.105C3.17391 66.5259 6.53425 74.4757 11.6666 81.1485C16.743 87.7495 23.5355 93.0734 31.1901 96.4576C40.0339 100.369 49.3886 101.622 59.2062 100.217C64.9611 99.3949 71.1869 97.2798 76.3192 94.3983C82.7126 90.8225 87.8769 86.2649 92.3946 80.2306C95.8347 75.6411 98.6284 69.8942 100.273 64.0275C101.51 59.6056 102.053 55.6227 102.18 50.0195C102.188 49.4288 102.196 50.219 102.18 51.7755C102.172 53.6672 102.116 55.0241 102.037 55.8462C101.175 64.1712 98.7242 71.3628 94.398 78.2671C93.9191 79.0333 93.536 79.6719 93.5599 79.6879C93.6158 79.7517 94.1426 79.0413 94.7891 78.0356C98.7082 71.8976 101.206 64.9215 102.18 57.4426C102.563 54.4893 102.699 50.0195 102.476 47.3456C101.997 41.463 100.744 36.2588 98.6364 31.382C98.4129 30.8552 98.1175 30.1049 97.9818 29.7138C96.7526 26.0581 93.6956 20.9657 90.3353 16.9748C89.1619 15.586 86.6716 13.0876 85.3466 11.9941C83.0559 10.0945 80.3021 8.16287 78.6818 7.32478C75.3614 5.61668 74.0284 4.9941 71.8973 4.16399C71.3066 3.93252 70.2451 3.50948 69.5427 3.23011C65.7194 1.67366 61.4012 0.659973 56.4924 0.1651C54.6566 -0.0184784 49.5961 -0.0583878 47.7523 0.0932693ZM33.4649 4.10013C27.9973 6.27118 22.6415 9.48785 18.4192 13.1355C17.2857 14.1173 15.2185 16.1287 14.109 17.334C13.3826 18.1242 13.3986 18.0603 14.1808 17.0945C16.2641 14.5244 20.3109 11.1161 24.206 8.65775C26.9038 6.94964 30.5914 5.05795 32.8263 4.23582C33.5447 3.97243 34.0715 3.86067 33.4649 4.10013ZM26.9677 8.70564C26.9118 8.76949 26.5446 9.01693 26.1376 9.25639C23.0326 11.1082 19.2892 14.1013 16.9425 16.5917C16.0885 17.5016 13.654 19.8482 13.9813 19.4492C14.101 19.2975 14.6837 18.651 15.2663 18.0124C18.3872 14.6122 22.003 11.6429 26.0338 9.17656C26.5606 8.85729 27.0076 8.59389 27.0236 8.59389C27.0475 8.59389 27.0156 8.64178 26.9677 8.70564ZM9.63917 25.0763C9.63917 25.0923 9.4955 25.3477 9.3199 25.6351C8.91283 26.2975 8.22639 27.6624 7.6517 28.9555C7.40427 29.5062 7.1249 30.033 7.0371 30.1288C6.72581 30.464 4.95385 34.5427 4.451 36.0912C4.28338 36.626 4.13172 36.9133 4.13172 36.7138C4.13172 36.4105 5.24918 33.3455 5.92763 31.7731C6.73379 29.9053 8.03483 27.4549 9.28797 25.4116C9.48752 25.0923 9.63917 24.9406 9.63917 25.0763ZM6.1591 32.675C5.50459 34.2394 4.41907 37.504 4.02796 39.0844C3.73263 40.2817 3.37345 42.2452 3.10207 44.097C3.01427 44.6796 2.91051 45.2064 2.8706 45.2543C2.83069 45.3102 2.77482 45.422 2.75087 45.5098C2.65509 45.837 2.79078 44.7435 3.06216 42.9875C3.35749 41.032 3.73263 39.4037 4.3632 37.3204C4.95385 35.3409 6.35067 31.6613 6.4225 31.8768C6.43847 31.9247 6.31874 32.2839 6.1591 32.675ZM1.87287 43.4904C1.84893 43.5542 1.82498 43.5303 1.82498 43.4425C1.817 43.3547 1.84094 43.3068 1.86489 43.3387C1.88883 43.3626 1.89682 43.4345 1.87287 43.4904ZM2.89454 46.3399C2.86262 46.5394 2.81472 46.6591 2.79876 46.6033C2.77482 46.5474 2.7828 46.292 2.82271 46.0445C2.86262 45.7572 2.89454 45.6614 2.91849 45.7811C2.93445 45.8849 2.92647 46.1403 2.89454 46.3399ZM20.3029 86.5043C25.06 90.6788 30.6074 93.8476 36.6177 95.8351C39.4433 96.7689 42.6599 97.4793 45.9804 97.9103C47.0978 98.054 47.5528 98.1418 48.4707 98.3813C48.9256 98.501 47.8082 98.4291 46.148 98.2296C35.3965 96.9286 25.507 92.1076 18.1398 84.5727L17.182 83.591L18.2675 84.6286C18.8582 85.2033 19.7761 86.0414 20.3029 86.5043ZM45.6611 95.5717C45.6052 95.5876 45.4935 95.5876 45.4216 95.5717C45.3418 95.5477 45.3897 95.5317 45.5174 95.5317C45.6531 95.5317 45.709 95.5477 45.6611 95.5717Z" fill="#FFFCEC"/>
            <path d="M92.1642 81.6034C88.748 85.9455 84.813 89.5772 80.2394 92.6023C73.8699 96.8247 66.7342 99.5306 59.367 100.536C57.7706 100.76 57.5471 100.8 57.6748 100.84C57.8345 100.903 60.3168 100.552 61.8813 100.257C69.456 98.7962 76.5438 95.6514 82.7936 90.9581C85.5793 88.8748 88.1973 86.4404 90.4801 83.8303C91.5018 82.657 92.6831 81.1564 92.6272 81.1006C92.6112 81.0766 92.3957 81.3081 92.1642 81.6034Z" fill="#FFFCEC"/>
        </svg>

    )
}

const NavCard = ({path,text}) => {
    const location = useLocation();
    const isActive = useCallback(
        (path) => location.pathname === path,
        [location.pathname]
      );
    return (
        <li className='relative flex flex-col items-center hover:cursor-pointer'>
            <section className='absolute bottom-8 -left-1 z-20'>
                <Icons text={text} />
            </section>
            <div className='w-fit relative'>
                {isActive(path) && <section className=' bg-primary-dark size-[82px] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 -mt-0.5'>
                </section>}
                <section className='bg-black size-[87px] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></section>
                <CoolAFCircle classname={'z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'} />
            </div>
            <p className={` ${text!="Scratch Cards"?"text-[22px] pr-3":"text-lg text-nowrap"}  text-white font-bold z-20 self-end pt-2`}
            //  style={{textShadow: ` 2.09px 2.09px 0 black,-2.09px 2.09px 0 black,2.09px -2.09px 0 black,-2.09px -2.09px 0 black`}}
            style={{textShadow:"2px 2px  black , -2px 2px 0 black, -2px -2px 0 black , 2px -2px 0 black "}}
            >
                {text}
            </p>
        </li>
    )
}

const Sidebar = () => {
    
    const navList = [{path:"/home",text:"Home"},{path:"/scratch",text:"Scratch Cards"},{path:"/polls",text:"Polls"},{path:"/chat",text:"CHAT"}]

  return (
    <div className='h-screen bg-black pl-10 pr-4 font-ruddy'>
        <main className='bg-primary-blue h-full w-[146px] -skew-x-[1.2deg] flex flex-col justify-start pt-44 items-center pr-4 pl-5'>
            <ul className='space-y-24 text-right'>
                {
                    navList.map(({path,text,index})=>(
                        <NavCard key={index} path={path} text={text} />
                    ))
                }
            </ul>
        </main>
    </div>
  )
}

export default Sidebar