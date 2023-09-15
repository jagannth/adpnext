import React from 'react'

export default function loading() {
    return (
        <div className='text-center h-100 p-5'>
            <div className="spinner-grow text-success" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
