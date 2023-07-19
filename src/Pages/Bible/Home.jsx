import React, { useEffect, useState  } from 'react'
import { Link, useParams } from 'react-router-dom'
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

export const Home = () => {
    const [getData , setData] = useState([])
    const [getLoad, setLoad] = useState(false)

    useEffect(() => {
        const getBible = async () => { 
            setLoad(true)
            const response = await fetch('https://api.scripture.api.bible/v1/bibles/2dd568eeff29fb3c-02/books',{
                headers: {
                    "api-key": import.meta.env.VITE_API_KEY
                },
            })
            const { data } = await response.json()
            setData(data)
            setLoad(false)
            console.table(data)
        }
        getBible()
    }, [])
    
    return (
        <>
            <div className='m-4'>
                <h1 className='font-bold text-white text-2xl text-center'>
                    Baca Kitab
                </h1>
            </div>
            
        {getLoad ? (
            <Stack sx={{ width: 'auto', margin: 4, color: 'grey.500' }} spacing={2}>
                {/* <LinearProgress color="secondary" />
                <LinearProgress color="success" /> */}
                <LinearProgress color="inherit" />
                <LinearProgress color="inherit" />
                <LinearProgress color="inherit" />
                <LinearProgress color="inherit" />
                <LinearProgress color="inherit" />
                <LinearProgress color="inherit" />
                <LinearProgress color="inherit" />
                <LinearProgress color="inherit" />
                <LinearProgress color="inherit" />
                <LinearProgress color="inherit" />
                <LinearProgress color="inherit" />
                <LinearProgress color="inherit" />
                <LinearProgress color="inherit" />
            </Stack>
        ) : (
            <div className='flex flex-wrap justify-center gap-2 lg:mx-4 my-2'>
                {getData.map((data) => 
                    <Link  key={data.id} to={`/kitab/${data.id}`}>
                        <div className="hover:scale-90 duration-300 card w-80 lg:w-60 bg-gray-900 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title text-white">{data.name}</h2>
                                <p>{data.nameLong}</p>
                                {/* <div class="card-actions justify-end">
                                    <button class="btn btn-primary">Buy Now</button>
                                </div> */}
                            </div>
                        </div>
                    </Link>
                    )}
            </div>
        )}
            
        </>
        // <div className="">
        //     <h1 className="text-3xl font-bold underline">
        //         {getData.descriptionLocal}
        //     </h1>
        //     <button className="btn btn-primary">Button</button>

        // </div>
    )

}

export default Home