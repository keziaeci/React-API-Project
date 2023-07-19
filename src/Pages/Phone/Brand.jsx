import React ,{ useEffect , useState } from 'react'
import { Link , useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

// import { Navbar } from '../Components/Navbar';

import 'swiper/css';
import 'swiper/css/effect-cards';
import '../../assets/style/style.css'



export const Brand = () => {
    const [getData, setData] = useState([])
    const [getLoad, setLoad] = useState(false)

    useEffect(() => {
        const getBrand = async () => {
            setLoad(true)
            try {
                const response = await fetch('https://phone-specs-clzpu7gyh-azharimm.vercel.app/brands')
                const {data} = await response.json()
                setData(data)
            } catch (error) {
                throw error
            } finally {
                setLoad(false)
            }
        }
        getBrand()
    },[])

    return (
        <>
        {getLoad ? (
            <>
                <Navbar/>
                {/* <div className="navbar bg-transparent p-8">
                    <div className="flex-1">
                        <a className="btn btn-ghost normal-case text-xl">ingfoHP</a>
                    </div>
                    <div className="flex-none gap-2">
                        <div className="form-control">
                            <input type="text" placeholder="Search" className="input bg-transparent input-bordered w-24 md:w-auto" />
                        </div>
                        <div class="dropdown dropdown-end">
                            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                                <div class="w-10 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </label>
                            <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                <a class="justify-between">
                                    Profile
                                    <span class="badge">New</span>
                                </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div> */}

                <div className='mt-10 lg:mt-40 flex items-center justify-center'>
                        <p>wait a dang minute</p>
                </div>

            </>
        ) : (
            <>
            <Navbar/>

            <div className='mt-10 lg:mt-40 flex items-center'>
                <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className="mySwiper">
                    {getData.map((data) =>
                        <SwiperSlide key={data.brand_id}>
                            <Link  to={`/phone/${data.brand_slug}/${1}`} className='link-hover'>
                                <h1>
                                    {data.brand_name} 
                                </h1>
                            </Link> 
                            {/* <p>{data.device_count}</p> */}
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>

            <div className='flex flex-wrap justify-center gap-2 lg:mx-4 my-2'>
            </div>
            </>
        )}
        </>
    )
}

export default Brand



export const Navbar = () => {
    return (
        <div className="navbar bg-transparent p-8">
                <div className="flex-none lg:flex-1">
                    <a className="light:text-white btn btn-ghost normal-case text-xl">ingfoHP</a>
                </div>
                <div className="flex-wrap lg:flex-none gap-5">
                    <ul className="invisible lg:visible menu menu-horizontal px-1">
                        <li>
                            <Link className='link-hover font-semibold text-pink-600 hover:text-pink-700' to={'/phone/latest'}>Latest Released</Link>
                        </li>
                        <li>
                            <Link className='link-hover font-semibold text-pink-600 hover:text-pink-700' to={'/phone/fans'}>Top by fans</Link>
                        </li>
                        <li>
                            <Link className='link-hover font-semibold text-pink-600 hover:text-pink-700' to={'/phone/interest'}>Top by interest</Link>
                        </li>
                    </ul>
                </div>
            </div>
    )
}
    