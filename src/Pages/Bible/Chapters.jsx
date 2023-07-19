import React , { useEffect, useState  } from 'react'
import { Link, useParams } from 'react-router-dom'
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

export const Chapters = () => {
    const { id } = useParams()
    const [getData, setData] = useState([])
    const [getLoad, setLoad] = useState(false)
    const [getTitle, setTitle] = useState([])
    
    useEffect(() => {
        const getChapters = async () => {
            setLoad(true)
            const response = await fetch(`https://api.scripture.api.bible/v1/bibles/2dd568eeff29fb3c-02/books/${id}/chapters` , {
                headers: {
                    "api-key" : import.meta.env.VITE_API_KEY
                },
            })
            const { data } = await response.json()
            const title = data[0]['reference']
            setData(data)
            setTitle(title)
            setLoad(false)
            // console.table(data[0]['reference'])
        }
        getChapters()
    }, [id])
    
    return (
        <>
        {getLoad ? (
            <>
                <div className='m-4'>
                    <h1 className='font-bold text-white text-2xl text-center'>
                        Kitab
                    </h1>
                </div>
                <Stack sx={{ width: 'auto', margin: 4, color: 'grey.500' }} spacing={2}>
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
            </>
        ) : (
            <>
                <div className='m-4'>
                    <h1 className='font-bold text-white text-2xl text-center'>
                        Kitab {getTitle}
                    </h1>
                </div>

                <div className='flex flex-wrap justify-center gap-2 lg:mx-4 my-2'>
                    <Link to={`/`}>
                        <button className='btn btn-ghost'>keluar</button>
                    </Link>
                    {getData.map((data) => 
                        <Link key={data.id} to={`/bab/${data.id}/isi`}>
                            <div  className="hover:scale-90 duration-300 card w-80 lg:w-60 bg-gray-900 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title text-white">{data.number}</h2>
                                    <p>{data.reference}</p>
                                    {/* <div class="card-actions justify-end">
                                        <button class="btn btn-primary">Buy Now</button>
                                    </div> */}
                                </div>
                            </div>
                        </Link>
                    )}
                </div>
            </>
        )}
        </>
    )
}

export default Chapters