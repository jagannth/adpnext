'use client'
import Image from "next/image";
import Link from "next/link";

export default function Category(props) {
  const imageBarUrl = '/images/';

  return (
    <>
      <div className='bg-success-subtle' style={{ height: '11rem' }}>
        <div className='container pt-3'>
          <div className='row'>
            <div className='col-4 col-md-2'>
              <div className='card card-body d-flex justify-content-center' style={{ height: '9rem' }}>
                <Image height={100} width={100} className='rounded mx-auto w-100 d-block' alt={props?.category?.image_link} src={imageBarUrl + props?.category?.image_link} />
              </div>
            </div>
            <div className='col-8 col-md-10'>
              <div className=''>
                <h1 className='h1'>{props?.category?.name}</h1>
                <p>Tutorial library for {props?.category?.name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex-wrap flex-lg-nowrap pt-4">
        <main className="">
          <div className="row mb-2">
            <div id={`html`}>
              <div className="col-md-12">
                
                <div className="row text-center">
                  {props?.course?.length > 0 ? <>
                    {props?.course?.map((y, yindex) => {
                      return <div key={`cate_${yindex}`} className='col-6 col-md-4 col-lg-2 my-3 text-center'>
                          <Link href={`/${y.route_name}`} className='tdn'>
                            <div style={{ 'height': '13rem' }} className='zoom card card-body text-center text-dark shadow p-3 border'>
                              <div style={{ fontSize: '' }}>
                                {/* <i className="bi bi-facebook"></i> */}
                                <Image height={50} width={50} className=' mt-4' alt={y?.image_link} src={imageBarUrl + y?.image_link} />
                              </div>
                              <h6 className='mt-4'>{y?.name}</h6>
                              <p className="text-secondary small">{y?.description?.substring(0, 40)} ..</p>
                            </div>
                          </Link>
                        </div>
                    })}
                  </> : <div className='text-center h-100'>
                    <div className="alert alert-success" role="alert">
                      Loading / No courses were added..
                    </div>
                  </div>}
                </div>
               
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
