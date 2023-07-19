import React ,{ useEffect , useState } from 'react'
import { Link , useParams } from 'react-router-dom'

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import { Card } from '../../Components/Card';

export const Fans = () => {
    const {slug} = useParams()
    const {page} = useParams()
    const [getPhone ,setPhone] = useState([])
    const [getData, setData] = useState([])
    const [getLoad, setLoad] = useState(false)

    useEffect(() => {
        const getBrand = async () => {
            setLoad(true)
            try {
                const response = await fetch(`https://phone-specs-clzpu7gyh-azharimm.vercel.app/top-by-fans`)
                const { data } = await response.json()
                const  phones  = data.phones
                setData(data)
                setPhone(phones)
            } catch (error) {
                throw error
            } finally {
                setLoad(false)
            }
        }
        getBrand()
    }, [slug, page])

    return (
        <>
        {getLoad ? (
            <>
                <div className='m-7 md:m-14 lg:m-4 lg:flex'>
                    <Link className='lg:flex-none link-hover  hover:text-pink-600' to={'/'}>Back</Link>
                </div>
                <Box sx={{ display: 'flex' , margin: 2 }}>
                    <CircularProgress style={{  float: 'center'  }}/>
                </Box>
            </>
        ) : (
            <>
                <div className='m-7 md:m-14 lg:m-4 lg:flex'>
                    <Link className='lg:flex-none link-hover  hover:text-pink-600' to={'/'}>Back</Link>
                    <h1 className='font-bold text-white lg:flex-1 text-2xl lg:text-center'>
                        {getData.title} 
                    </h1>
                </div>
                
                <div className='flex flex-wrap justify-center gap-4 md:gap-3 lg:gap-14 lg:mx-4 mt-10'>
                    {getPhone.map((data,index) => 
                        <Card key={index} image={data.image} name={data.phone_name} brand={data.favorites} slug={data.slug} />
                    )}
                </div>
                
                <div className='flex justify-between m-4'>
                    {getData.current_page <= getData.last_page && getData.current_page > 1 &&
                        <Link to={`/phone/${slug}/${parseInt(page)-1}`}>
                            <button className='btn btn-ghost hover:bg-pink-600'>Previous</button>
                        </Link>
                    }

                    {getData.current_page < getData.last_page &&
                        <Link to={`/phone/${slug}/${parseInt(page)+1}`}>
                            <button className='btn btn-ghost'>Next</button>
                        </Link>
                    }
                </div>
            </>
        )}
        </>
    )
}

