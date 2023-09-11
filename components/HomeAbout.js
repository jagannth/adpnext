import Image from "next/image";
import Link from "next/link";

export default function HomeAbout() {
  return (
    <div>
      {/* about our courses */}
      <div className='bg-success-light pt-5'>
        <div className='container text-center'>
          <div className='py-5'>
            <div className='row'>
              <div className='col-12 col-lg-6'>
                <div className="block text-center text-lg-start my-5">
                  <h1 className="text-capitalize mb-4 display-2">Creating A Community Of Life Long Learners</h1>
                  <p className="mb-4">Online learning has become increasingly popular in recent years, offering a flexible and convenient way for individuals to pursue education and training.</p>
                  <ol className="p-0 text-start">
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                      <div className='mt-2'>
                        <i className="icn bi bi-bell-fill"></i>
                      </div>
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">Flexible Classes</div>
                        Flexible Classes refers to the process of acquiring knowledge or skills through the use of digital technologies and the internet.
                      </div>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                      <div className='mt-2'>
                        <i className="icn bi bi-bell-fill"></i>
                      </div>
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">Learn From Anywhere</div>
                        Whether you are a busy professional, a stay-at-home parent, or a student who prefers to study from home effectively.
                      </div>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                      <div className='mt-2'>
                        <i className="icn bi bi-bell-fill"></i>
                      </div>
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">Up-to-Date Course Content</div>
                        Our platform also features a collaborative learning environment, where you can connect with fellow learners.
                      </div>
                    </li>
                  </ol>
                  <Link type="button" href="/alltutorials" className="btn btn-lg btn-success mt-4">Learn Without Hassel</Link>
                </div>
              </div>
              <div className='col-12 col-lg-6'>
                <Image className='w-100 ' width={600} height={700} src='/images/about.png' alt='about' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
