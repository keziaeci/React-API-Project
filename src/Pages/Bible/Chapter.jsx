import React, { useEffect, useState  } from 'react'
import { Link, useParams } from 'react-router-dom'
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

export const Chapter = () => {
    const { id } = useParams()
    const [getData, setData] = useState([])
    const [getLoad, setLoad] = useState(false)

    useEffect(() => {
        const getChapter = async () => {
            setLoad(true)
            const response = await fetch(`https://api.scripture.api.bible/v1/bibles/2dd568eeff29fb3c-02/chapters/${id}`, {
                headers: {
                    "api-key" : import.meta.env.VITE_API_KEY
                },
            })
            const { data } = await response.json()
            setData(data)
            setLoad(false)
        }
        getChapter()
    }, [id])

    // console.log(getData);
    console.table(getData)
    return (
        <>
        {getLoad ? (
            <>
                <div className='m-4'>
                    <h1 className='font-bold text-white text-2xl text-center'>
                        <Stack sx={{ width: 100, margin: 4,  color: 'grey.500' }} spacing={2}>
                            {/* <LinearProgress color="secondary" />
                            <LinearProgress color="success" /> */}
                            <LinearProgress color="inherit" />
                            <LinearProgress color="inherit" />
                        </Stack>
                    </h1>
                </div>

                <div className='m-10 lg:flex lg:justify-between gap-2'> 
                    <div className="mockup-code lg:w-full lg:h-full">
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
                    </div>
                    
                    {/* <div className=''>
                        <Link to={`/kitab/${getData.bookId}`}>
                            <button className='btn btn-ghost'>Keluar</button>
                        </Link>

                        <Link className={`${getData.previous ? '' : 'hidden'}`} to={`/bab/${getData.previous?.id}/isi`}>
                            <button className='btn btn-ghost'>Sebelumnya</button>
                        </Link>

                        <Link className={`${getData.next ? '' : 'hidden'}`} to={`/bab/${getData.next?.id}/isi`}>
                            <button className='btn btn-ghost'>Selanjutnya</button>
                        </Link>
                    </div> */}
                </div>
                
            </>
        ) : (
            <>
                <div className='m-4'>
                        <h1 className='font-bold text-white text-2xl text-center'>
                            {getData.reference}
                        </h1>
                </div>

                <div className='m-10 lg:flex lg:justify-between gap-2'> 
                    <div className="mockup-code">
                        <p className='m-5'><code dangerouslySetInnerHTML={{ __html: getData.content }} /></p>
                    </div>
                    
                    <div className=''>
                        <Link to={`/kitab/${getData.bookId}`}>
                            <button className='btn btn-ghost'>Keluar</button>
                        </Link>

                        <Link className={`${getData.previous ? '' : 'hidden'}`} to={`/bab/${getData.previous?.id}/isi`}>
                            <button className='btn btn-ghost'>Sebelumnya</button>
                        </Link>

                        <Link className={`${getData.next ? '' : 'hidden'}`} to={`/bab/${getData.next?.id}/isi`}>
                            <button className='btn btn-ghost'>Selanjutnya</button>
                        </Link>
                    </div>
                </div>
            </>
        )}
        </>
    )
}

export default Chapter