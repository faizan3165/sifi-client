import React, { Fragment } from 'react'
import './Talk.css'
import ContImg from '../../assets/images/contact.png'
import TeleImg from '../../assets/images/Tele_Icon.png'

function Talk() {
  return (
    <Fragment>
         <div className="container-fluid d-flex mb-3 mt-5 talk_container">

         <div className="container talk_container_left ">
            <img src={ContImg} alt=''/>
        </div>
        <div className="container talk_container_right ">
            <div className='container mt-5 call_circle'>
                <img src={TeleImg} alt='' className='mt-3'/>

            </div>

            <div className='container'>
            <h1 >+92 313 xxxxxx</h1>
            </div>
            <div className='container'>
            <p>Have an idea or want to hire us?<br></br> We’re just a call away!</p>
            </div>
            <div className='container-fluid justify-content-center'>
            <button type="button" className="btn btn-primary btn-sm talk_btn ml-6">Let’s Talk</button>
            </div>
        </div>
        </div>
    </Fragment>
  )
}

export default Talk