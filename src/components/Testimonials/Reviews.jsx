import React, { Fragment } from 'react'
import ReviewsImg from '../../assets/images/Reviews.png'
import './Reviews.css'
import ChatIcon from '../../assets/images/chat-1.png'
import ChatIcon2 from '../../assets/images/chat-2.png'
import VectorIcon from '../../assets/images/review-img.png'

function Reviews() {
  return (
    <Fragment>
          <div className="container-fluid d-flex mb-3 Reviews_container">
        <div className="container Reviews_container_left ">
            <img src={ReviewsImg}/>
        </div>
        <div className="container Reviews_container_right ">
            <h1 className='Reviews-container-heading'>what our client say</h1>
            <p className='Reviews-container-para'>Sifi Solutions has over 20+ years of experience combined in the industry making the clieints happy all over the globe.</p>
            <div className='container Testimonial_card'>
                <img src={ChatIcon}/>
                <p className='testimonial_card-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas at turpis diam euismod. 
                  Pellentesque diam adipiscing amet aenean scelerisque. Nec gravida dolor lectus eget non arcu odio eget. At sit feugiat sed scelerisque habitant.</p>
            <div className='container d-flex justify-content-end'>
                
                <img src={ChatIcon2} width='60px' height='60px'/>

            </div>
            <div className='container d-flex'>
                
                <img src={VectorIcon} />
                <p style={{fontStyle: 'normal',
                        fontWeight: '500px',
                        fontSize: '30px',
                        lineHeight: '35px',
                        color: '#000000'}}>Mark Lee</p>

            </div>
            </div>

        </div>
      
      </div>
    </Fragment>
  )
}

export default Reviews