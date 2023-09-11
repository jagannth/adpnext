import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function HomeCategory() {
  const imageBarUrl = '/images/';
  const cateList = [
    { _id: 1, name: 'Web Development', route_name: 'web_development', image_link: 'coding.png' },
    { _id: 2, name: 'Designing', route_name: 'designing', image_link: 'design.png' },
    { _id: 3, name: 'Server Side Dev.', route_name: 'server_side_development', image_link: 'servers.png' },
    { _id: 4, name: 'Programming Language', route_name: 'programming_language', image_link: 'coding-language.png' },
    { _id: 5, name: 'Databases', route_name: 'databases', image_link: 'database.png' },
    // { _id: 6, name: 'Mobile Development', route_name: 'mobile_development', image_link:'android.png' },
    // { _id: 7, name: 'Machine Learning', route_name: 'machine_learning', image_link:'ml.png' },
    // { _id: 8, name: 'Artificial Intelligence', route_name: 'artificial_intelligence', image_link:'ai.png' },
    // { _id: 9, name: 'Marketing', route_name: 'marketing', image_link:'digital-marketing.png' },
    // { _id: 10, name: 'Personal Development', route_name: 'personal_development', image_link:'personal-development.png' },
    // { _id: 11, name: 'Business', route_name: 'business', image_link:'cooperation.png' }
  ];
  return (
    <>
      {/* categories */}
      <div className='bg-success-light'>
        <div className='container text-center'>
          <div className='py-5'>
            <h2>Top Categories</h2>
            <p>We provide courses based on your needs</p>

            <div className='row'>
              {cateList?.map((x, inx) => {
                return <div key={`cate_${inx}`} className='col-6 col-md-4 col-lg-2 my-3 text-center'>
                  <Link href={`/category/${x.route_name}`} className='tdn'>
                    <div style={{ 'height': '11rem' }} className='cd card card-body text-center text-dark shadow p-3 border'>
                      <div className='mt-2'>
                        {/* <i className="bi bi-facebook"></i> */}
                        <Image src={imageBarUrl + x?.image_link} alt={x?.image_link} height={70} width={70} />
                      </div>
                      <h6 className='mt-4'>{x?.name}</h6>
                    </div>
                  </Link>
                </div>
              })}
              <div className='col-6 col-md-4 col-lg-2 my-3 text-center'>
                <Link href={`/alltutorials`} className='tdn'>
                  <div style={{ 'height': '11rem' }} className='cd card card-body text-center text-dark shadow p-3 border'>
                    <div className='mt-2'>
                      {/* <i className="bi bi-facebook"></i> */}
                      <Image src={imageBarUrl + 'others.png'} height={70} width={70} alt='others' />
                    </div>
                    <h6 className='mt-4'>Others</h6>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
