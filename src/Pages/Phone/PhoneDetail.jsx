import React ,{ useEffect , useState } from 'react'
import { Link , useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const PhoneDetail = () => {
    const { slug } = useParams()
    const [getData, setData] = useState([])
    const [getImage, setImage] = useState([])
    const [getSpecifications, setSpecifications] = useState([])
    const [getLoad, setLoad] = useState(false)

    useEffect(() => {
        const getDetail = async () => { 
            setLoad(true)
            try {
                const response = await fetch(`https://phone-specs-clzpu7gyh-azharimm.vercel.app/${slug}`)
                const {data} = await response.json()
                const images = data.phone_images
                const specifications = data.specifications
                setData(data)
                setImage(images)
                setSpecifications(specifications)
            } catch (error) {
                throw error
            } finally {
                setLoad(false)
            }
        }
        getDetail()
    },[slug])
    return (
        <>
        {getLoad ? (
            <>
                <div className='m-7 md:m-14 lg:m-4 lg:flex'>
                    <Link className='lg:flex-none link-hover text-pink-600 className="font-semibold text-white"0  hover:text-pink-600' to={'/'}>Back</Link>
                </div>
                <Box sx={{ display: 'flex', margin: 5}}>
                    <CircularProgress style={{  float: 'center'  }}/>
                </Box>

            </>
        ) : (
            <div className='m-4'>
                <Link className='lg:flex-none link-hover text-pink-600 className="font-semibold text-white"0  hover:text-pink-600' to={'/'}>Back</Link>
                <h1 className='font-bold text-lg'>{getData.brand}</h1>
                <h1 className='font-black text-6xl text-white'>{getData.phone_name}</h1>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    style={{ backgroundColor: 'none' }}
                    className='swiper2 my-5 lg:w-72 mx-0'>
                        {getImage.map((data, index) => 
                    <SwiperSlide key={index}>
                        <img src={data}  className='m-2'/>

                    </SwiperSlide>
                        )}
                </Swiper>

                <div className='m-0 p-0'>
                    <p className="font-semibold text-white">{getData.release_date}</p>    
                    <p className="font-semibold text-white">{getData.dimension}</p>
                    <p className="font-semibold text-white">{getData.os}</p>
                    <p className="font-semibold text-white">{getData.storage}</p>
                </div>

                <div className='mt-5'>
                    {getSpecifications.map((data,index) =>
                    <div key={index}>
                        <div className='divider'></div>
                        <div className='flex flex-wrap lg:flex-nowrap gap-5 border-black border-2 '>
                            <p className='font-bold'>{data.title}</p>
                            {data.specs.map((d, index) => 
                            <div key={index}>
                                <p className='font-semibold text-white'>{d.key} </p>
                                <p>{d.val} </p>
                            </div>
                                
                            )}

                        </div>
                    </div>
                    )}
                </div>
            </div>
        )}
        </>
    )
}
