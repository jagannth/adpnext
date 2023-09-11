import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function Tutorials(props) {
    const imageBarUrl = '/images/';
  return (
    <div>
       <div className='bg-body-secondary'>
            <div className=''>
                <div className="container flex-wrap flex-lg-nowrap pt-4">
                    <div className="block text-center text-lg-start my-5">
                        <h3 className="display-6 mb-4">Library</h3>
                        <p className="mb-4">The library tutorial offered by Additional Sheet provides a basic overview of how to excel in the related courses. The tutorial covers essential skills such as web development and designing, serverside development and cloud management. By following the step-by-step guidance provided in the tutorial, learners can improve their proficiency in using technologies and gain a better understanding of how to apply these skills to their coursework.</p>
                    </div>
                    <main className="">
                        <div className="row">
                            {props.categories?.map((x, xindex) => {
                                return <div key={'tut_cr_' + xindex} className="col-sm-12 col-lg-6 col-xl-6 mb-3">
                                    <div className="bg-body p-3 shadow rounded-3 grey-box">
                                        <div className="row">
                                            <div className='ps-4 d-flex justify-content-center justify-content-md-start'>
                                                {/* <img src={imageBarUrl + x?.image_link} className='bg-white p-1' height={40} width={40} /> */}
                                                <h5 className="card-title py-1 mb-3 pt-2"><i className="fal fa-cogs icon-md text-dark mb-0 rounded-3 me-2"></i> {x[0]}</h5>
                                            </div>
                                            {x[1]?.slice(0, 6).map((y) => {
                                                return <div key={'tut_' + y?._id} className="col-4 col-sm-2 col-md-2 col-lg-2 col-xxl-2 col-xl-2 text-center">
                                                    <div className="">
                                                        <Link className="tdn" href={`/` + y?.route_name} title="Bitcoin Tutorial">
                                                            <Image height={40} width={40} src={imageBarUrl + y?.image_link} alt={y?.image_link} />
                                                            <div className="small p-2" style={{ 'minHeight': '57px' }}>{y?.name}</div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            })}
                                        </div>
                                        <div className="text-end mt-2 pt-2">
                                            <Link href={'/category/' + x[1][0]?.category[0]?.route_name } className="tdn btn btn-sm btn-outline-success">View More</Link>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                    </main>
                </div>
            </div>
            {/* <Footer name="home" /> */}
        </div>
    </div>
  )
}
