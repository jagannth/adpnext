'use client'
import Image from 'next/image';
import Link from 'next/link';
import {useState } from 'react'

const imageBarUrl = '/images/';

export default function HomeLanding(props) {
    // console.log('props',props);

    const [searchData, setSearchData] = useState(props?.data);
    const [mainSearchData, setMainSearchData] = useState(props?.data);

    const handleSearch = (e) => {
        const searchTerm = e.target.value;
        setSearchData(
            searchTerm === "" || searchTerm === null
                ? mainSearchData
                : mainSearchData.filter((item) =>
                    item.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
        );
    }

    return (
        <div className=''>
            <div className="container mt-2 mb-5">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 my-3 mb-lg-0">
                        <div className="block text-lg-start">
                            <h1 className="text-capitalize mb-4 display-4 ">Start Better Learning Future From Here.</h1>
                            <p className="mb-4">Welcome to <span className='text-success fw-bold'>Additional Sheet</span>, where learning is made easy and accessible for everyone. Whether you&apos;re a student looking to excel in your studies or an individual seeking to acquire new skills, we are here to guide you on your learning journey.</p>
                            <div className="input-group mb-3">
                                <input type="text" id='search' onKeyDown={(e) => handleSearch(e)} autoComplete="off" name='search' className="form-control p-3 border-success" placeholder="Search our tutorials, e.g. HTML" aria-label="Recipient's username" data-bs-toggle="dropdown" />
                                <ul className="dropdown-menu w-100 shadow overflow-x-auto" style={{ maxHeight: '15rem' }}>
                                    {searchData.map((x, inx) => (<li key={`srch_${inx}`}><a className="dropdown-item cd fw-bold" href={`/${x?.route_name}`}>{x?.name}</a></li>))}
                                </ul>
                            </div>
                            <div className="d-grid gap-2 col-md-6">
                                <Link type="button" href='/alltutorials' className="btn btn-lg btn-success">Learn New Course <span style={{ fontSize: '14px' }} className="ms-2 fas fa-arrow-right"></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-center">
                        <div className='row'>
                            {props?.data?.slice(0, 30).map((x) => {
                                return <div key={'hm_crs_top_' + x?._id} className='col-md-2 col-3 my-2 text-center'>
                                    <Link href={`/` + x?.route_name} className='tdn'>
                                        <div className={`bg-info-subtle`}>
                                        {/* <div className={props?.colors[Math.floor(Math.random() * props?.colors.length)] + ``}> */}
                                            <div className='cd card-body text-center shadow p-2'>
                                                <div>
                                                    <Image height={40} width={40} src={imageBarUrl + x?.image_link} alt={x?.image_link} />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
