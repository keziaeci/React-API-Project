import React from 'react'
import { Link , useParams } from 'react-router-dom'

export const Card = ({image , name , brand , slug}) => {
    return (
        <div className="hover:scale-90 duration-300 card card-side w-80 lg:w-96 bg-gray-900 shadow-xl">
            <figure><img src={image} className=''/></figure>
            <div className="card-body">
                <h2 className="light:text-white card-title">{name}</h2>
                <p className='light:text-white'>{brand}</p>
                <div className="card-actions justify-start">
                    <Link to={`/phone/${slug}/detail`} className='link-hover link-secondary font-semibold hover:text-pink-500'>
                        More Details
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card