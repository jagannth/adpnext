'use client'

import { useState } from "react";


export default function Contact() {
    const [form, setForm] = useState({
        email: '',
        name: '',
        message: ''
    });
    const clear = () => {
        setForm({
            email: '',
            name: '',
            message: ''
        });
    }
    const subScribe = () => {
        var data = {
            email: form.email,
            name: form.name,
            message: form.message
        }
        console.log(data);
        // createData('contact/new', data);
        clear();
        alert('Thank you for subscribing/submitting the message');
    }
    const handleChange = (e) => {
        const myForm = { ...form };
        myForm[e.target.name] = e.target.value;
        setForm(myForm)
    }

    return (
        <>
            <div className=''>
                <div className='container'>
                    <div className='py-5'>
                        <div className='row'>
                            <div className='col-md-5'>
                                <div className="block my-5">
                                    <h3 className="text-capitalize mb-4 display-6">Keep In Touch With Us.</h3>
                                    <p className="mb-4">We encourage you to reach out to us through our contact form, email address, or social media links. Additionally, we provide regular updates through our blog and newsletter to keep you informed about our activities and offerings. We value your feedback and look forward to hearing from you!</p>
                                    <ol className="p-0 text-start">
                                        <li className="list-group-item d-flex justify-content-between align-items-start">
                                            <div className='mt-2'>
                                                <i className="icn bi bi-bell-fill"></i>
                                            </div>
                                            <div className="ms-2 me-auto">
                                                <div className="fw-bold">Address</div>
                                                328 Queensberry Street, North
                                                Melbourne VIC 3051, Australia.
                                            </div>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-start">
                                            <div className='mt-2'>
                                                <i className="icn bi bi-bell-fill"></i>
                                            </div>
                                            <div className="ms-2 me-auto">
                                                <div className="fw-bold my-3">+(1) 123 456 7890</div>
                                                {/* Whether you are a busy professional, a stay-at-home parent, or a student who prefers to study from home effectively. */}
                                            </div>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-start">
                                            <div className='mt-2'>
                                                <i className="icn bi bi-bell-fill"></i>
                                            </div>
                                            <div className="ms-2 me-auto">
                                                <div className="fw-bold my-3">hi.additionalsheet@gmail.com</div>
                                                {/* Whether you are a busy professional, a stay-at-home parent, or a student who prefers to study from home effectively. */}
                                            </div>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                            <div className='col-md-7'>
                                <form className="block my-5" onSubmit={() => subScribe()}>
                                    <h3 className="text-capitalize mb-4 display-6">Send a Message.</h3>
                                    {/* <p className="mb-4">Neque convallis a cras semper auctor. Libero id faucibus nisl tincidunt egetnvallis.</p> */}
                                    <div className=''>
                                        <div className="input-group mb-3">
                                            <input type="text" name="name" onChange={(e) => { handleChange(e) }} value={form.name} className="form-control p-3 border-success" placeholder="Name" aria-label="Name" aria-describedby="basic-addon2" />
                                            <input type="text" name="email" onChange={(e) => { handleChange(e) }} value={form.email} className="form-control p-3 border-success" placeholder="Email" aria-label="Email" aria-describedby="basic-addon2" />
                                        </div>
                                        <div className="input-group mb-3">
                                            <textarea rows={7} name="message" onChange={(e) => { handleChange(e) }} value={form.message} className='form-control p-3 border-success' placeholder='Message'></textarea>
                                        </div>
                                    </div>
                                    <button className='btn btn-success btn-lg'>Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* faq */}
            <div className='bg-success-light'>
                <div className='container'>
                    <div className='py-5'>
                        <div className='text-center'>
                            <h2>Frequently Asked Questions</h2>
                            <p>A Beginner&apos;s Guide</p>
                        </div>
                        <div className="accordion" id="accordionPanelsStayOpenExample">
                            <div className="accordion-item my-2">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                        Why the name is Additional Sheet?
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                                    <div className="accordion-body">
                                        <strong></strong> The name &quot;AdditionalSheet&quot; was chosen to reflect the purpose of the platform - to provide additional perspectives, insights, and knowledge on a wide range of subjects. Just like an additional sheet of paper can provide more space for ideas and thoughts, AdditionalSheet aimed to offer a space where users could delve deeper into their areas of interest.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item my-2">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                        What are the benefits of expanding tutorial offerings from offline to online?
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                                    <div className="accordion-body">
                                        <strong>Additional Sheet: </strong> We have expanded our tutorial offerings from offline to online as well. This means that in addition to our traditional in-person tutorials, we now provide online tutorials for your convenience and accessibility.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item my-2">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                        What challenges do students face during online learning and how does the online tutorial provider address these challenges?
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                                    <div className="accordion-body">
                                        <strong>Additional Sheet: </strong> We understand that online learning may have its own set of advantages and challenges. However, we are committed to providing you with high-quality content and support to ensure a seamless transition to online tutorials.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item my-2">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                        What is blended learning and how does it combine the best aspects of online and offline learning?
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                                    <div className="accordion-body">
                                        <strong>Additional Sheet: </strong> Our goal is to create a learning environment that combines the best aspects of both online and offline learning, offering you a comprehensive and effective learning experience.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* subscribe */}
            <div className='bg-success-subtle'>
                <div className='container'>
                    <div className='py-5'>
                        <div className='row'>
                            {/* <div className='col-md-2'></div> */}
                            <div className='col-md-8'>
                                <div className="block my-5">
                                    <h3 className="text-capitalize mb-4 display-3 fw-bold">Get Every Latest News</h3>
                                    <p className="mb-4 h4">SUBSCRIBE NEWSLETTER</p>
                                    <div className=''>
                                        <div className="input-group mb-3">
                                            <input type="text" name="email" onChange={(e) => { handleChange(e) }} value={form.email} className="form-control p-4" placeholder="Email" aria-label="Email" aria-describedby="basic-addon2" />
                                            <span onClick={() => subScribe()} className="input-group-text btn btn-success pt-4" id="basic-addon2">SUBSCRIBE</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}