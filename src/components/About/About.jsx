import React, { Fragment } from 'react'
import AboutUs from '../../assets/images/About-us-left-image.png'
import './About.css';
function About() {
  return (
    <Fragment>
        <div className="container-fluid d-flex mb-3 About_container">
        <div className="container About_container_left ">
            <img src={AboutUs}/>
        </div>
        <div className="container About_container_right ">
            <h1 className='right-container-heading'>ABOUT US!</h1>
            <p className='right-container-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas at turpis diam euismod. Pellentesque diam adipiscing amet aenean scelerisque. Nec gravida dolor lectus eget non arcu odio eget. At sit feugiat sed scelerisque habitant. Ultrices ipsum vel volutpat nulla morbi tortor tortor. Quis aliquet cum imperdiet quis sit et. Felis laoreet mattis mauris massa sem gravida.</p>
        </div>
      
      </div>
    </Fragment>
  )
}

export default About