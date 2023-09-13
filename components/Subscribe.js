'use client'

export default function Subscribe() {
    const subScribe = () => {
        var _email = (document.getElementById('email')).value;
        var data = {
            email: _email,
            name: '',
            message: ''
        }
        // console.log(data);
        // createData('contact/new', data).then((res)=>{
        //     (document.getElementById('email')).value = '';
        // });
        alert('Thank you for subscribing');
    }
    return (
        <>
            {/* contact */}
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
                                            <input type="text" id='email' name='email' className="form-control p-4" placeholder="Enter your email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                            <span className="input-group-text btn btn-success pt-4" id="basic-addon2" onClick={() => { subScribe() }}>SUBSCRIBE</span>
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
