import React from 'react'
import Navbar from './Navbar'

const Contact = () => {
  return (
    <div>
        <Navbar/>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div style={{color:'white'}} className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <h1>CONTACT US</h1>
                    </div>
                    <div className="row g-3">
                        <div style={{color:'white'}} className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">NAME</label>
                            <input type="text" className="form-control" placeholder='Enter your name' />
                        </div>
                        <div style={{color:'white'}} className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">EMAIL</label>
                        <input type="text" className="form-control" placeholder='Enter your email' />
                        </div>
                        <div style={{color:'white'}} className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">SUBJECT</label>
                        <input type="text" className="form-control" placeholder='Enter your subject' />
                        </div>
                        <div style={{color:'white'}} className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">MESSAGE</label>
                        <textarea name="" id="" className="form-control" placeholder='Enter your message'>
                        </textarea>
                        </div>
                        <div style={{color:'white'}} className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                         <p>Ph: 91XXXXXXXX</p>                                email:thebooknook@ghnnj.com
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
