import React from 'react'
import Image from "next/image";
import Link from "next/link";

export default function Category(props) {
  const imageBarUrl = '/images/';

  return (
    <>
      <div className="container">
        <div className='text-center bg-dark text-light mt-3 py-3'>
          <div className=''>
            <h1 className='h1'>{props?.category?.name}</h1>
            <p>Tutorial library for {props?.category?.name}</p>
          </div>
        </div>
        <div className="row text-center">
          {props?.course?.map((y) => {
            return <div key={'cate_' + y?._id} className='col-6 col-md-4 col-lg-2 my-3 text-center'>
              <Link href={`/` + y?.route_name} className='tdn'>
                <div style={{ 'height': '13rem' }} className='zoom card card-body text-center text-dark shadow p-3 border'>
                  <div style={{ fontSize: '' }}>
                    <Image height={50} width={50} className=' mt-4' alt={y?.image_link} src={imageBarUrl + y?.image_link} />
                  </div>
                  <h6 className='mt-4'>{y?.name}</h6>
                  <p className="text-secondary small">{y?.description?.substring(0, 40)} ..</p>
                </div>
              </Link>
            </div>
          })}
        </div>
      </div>
    </>
  )
}
