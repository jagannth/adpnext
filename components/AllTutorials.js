'use client';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState } from "react";

export default function AllTutorials(props) {

    const imageBarUrl = '/images/';
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
        <div>
            <div className='bg-success-subtle'>
                <div className="container py-3">
                    <div className="block text-lg-start">
                        <h1 className="text-capitalize mb-4 display-4 ">Ignite Your Curiosity, Expand Your Knowledge.</h1>
                        <p className="mb-4">Welcome to <span className='text-success fw-bold'>Additional Sheet</span>, where learning is made easy and accessible for everyone. Whether you&apos;re a student looking to excel in your studies or an individual seeking to acquire new skills, we are here to guide you on your learning journey.</p>
                        <div className="input-group mb-3">
                            <input type="text" id='search' onKeyDown={(e) => handleSearch(e)} autoComplete="off" name='search' className="form-control p-3 border-success" placeholder="Search our tutorials, e.g. HTML" aria-label="Recipient's username" data-bs-toggle="dropdown" aria-expanded="false" />
                            <ul className="dropdown-menu w-100 shadow overflow-x-auto" style={{ maxHeight: '15rem' }}>
                                {searchData.map((x, inx) => (<li key={`srch_${inx}`}><Link className="dropdown-item cd fw-bold" href={`/${x?.route_name}`}>{x?.name}</Link></li>))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-body'>
                <div className='container text-center'>
                    <div className='py-5'>
                        <div className="block text-center text-lg-start my-5">
                            <h3 className="text-capitalize mb-4 fw-bold">All Tutorials.</h3>
                            <p className="mb-4">If you&apos;re looking for the best instructors to learn from, there are many online course providers that offer expert-led courses across a variety of topics.</p>
                        </div>
                        <div className='row'>
                            {props?.data.map((x) => {
                                return <div key={'hm_crsall_' + x?._id} className='col-6 col-md-2 my-2 text-center'>
                                    <Link href={`/${x?.route_name}`}>
                                        <div className={`bg-info-subtle card`}>
                                        {/* <div className={props?.colors[Math.floor(Math.random() * props?.colors.length)] + ` card`}> */}
                                            <div style={{ 'height': '6rem' }} className='cd card-body text-center shadow p-3 border'>
                                                <div>
                                                    {/* <i className="bi bi-facebook"></i> */}
                                                    <Image height={40} width={40} alt={x?.image_link} src={imageBarUrl + x?.image_link} />
                                                    <h6 className='small pt-1'>{x?.name}</h6>
                                                </div>
                                                {/* <h6 className='mt-1'>Graphic Design</h6> */}
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='py-5'>
                        <div className="block text-lg-start my-5">
                            <h3 className="text-capitalize mb-4 fw-bold">All Examples/Articles.</h3>
                            <p className="mb-4">If you&apos;re looking for the best instructors to learn from, there are many online course providers that offer expert-led courses across a variety of topics.</p>
                        </div>
                        <div className='row'>
                            <ol className="list-group list-group-numbered">
                                {props?.articles.map((x, _inx) => {
                                    return <li key={'article_' + _inx} className="list-group-item d-flex justify-content-between align-items-start">
                                        <Link href={'/article/' + x?.route_name} className='text-body'><div className="ms-2 me-auto">
                                            <div className="fw-bold">{x?.name}</div>
                                            {x?.description}
                                        </div>
                                        </Link>
                                        <Image src={imageBarUrl + x?.image_link} alt={x?.image_link} height={30} width={30} />
                                        {/* <span className="badge bg-primary rounded-pill">2</span> */}
                                    </li>
                                })}

                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
