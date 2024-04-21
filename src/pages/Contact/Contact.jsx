import React from 'react'
import PageBanner from '../../components/PageBanner/PageBanner';
import banner from '../../assets/contacts.jpg';
import './Contact.css'


function Contact() {
  return (
    <div className='contact-container'>
      <PageBanner bannerIMG={banner} salutation={"Get in "} bannerName='touch with us' desc={`Reach out to us. Have questions or interested in collaborating? We're all ears! Drop us a line, and let's explore the possibilities together.`} />

      <div className='container text-justify d-flex my-5 flex-wrap'  style={{padding:"60px 0"}}>
      <h1 style={{padding:"20px"}}>Contact Us</h1>
        <div className='row gap-5 d-flex flex-wrap'>
          <div className='col mx-2 bg-white' style={{padding:"30px", borderRadius:"8px"}}>
            <h2>Get in touch</h2>
            <p>For general inquiries, share your details below and we'll contact you shortly to discuss about your queries and to resolve it quickly.</p>
            <div className='py-2'>
            <div className="info-box">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="info">
                      <h4 className="info-head">ADDRESS</h4>
                      <p>Third Floor, Instrumentation and Contol Engineering Department, GCOEARA.<br/>Pune, Maharashtra, India.</p>
                  </div>
              </div>
              <div className="info-box">
                  <i className="fas fa-envelope"></i>
                  <div className="info">
                      <h4 className="info-head">E-mail</h4>
                      <p>innovation.lab01@gmail.com</p>
                  </div>
              </div>
            </div>
            {/* <p>Feel free to reach out to us for any query</p> */}
          </div>
          <div className='col-lg-7 d-flex flex-column mx-auto bg-white' style={{padding:"30px", borderRadius:"8px"}}>
            <h2 className='py-2'>Message Us</h2>
            <div className="mb-3">
              <div className="row ">
                <div className="col">
                  <label htmlFor='first-name' className='form-label'>First Name</label>
                  <input type="text" className="form-control mb-1" id='first-name' placeholder="First name" aria-label="First name" />
                </div>
                <div className="col">
                  <label htmlFor='last-name' className='form-label'>Last Name</label>
                  <input type="text" className="form-control mb-1" id='last-name' placeholder="Last name" aria-label="Last name" />
                </div>
              </div>
              <div className="col">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control mb-1" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message..</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send message...</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid text-center bg-info bg-gradient">
        <p>Feel free to reach out to us. Always ready to help &#128522;</p>
        <h6 className='mb-0 pb-2'>THANK YOU FOR REACHING OUT TO US.</h6>
      </div>
    </div>
  )
}

export default Contact;