import React from 'react'
import '../css/WidgetOptions.css'

function WidgetOptions() {
  return (
    <div className="widget__contents">
      <div className="widget__content">
        <img
          src='http://kinlane-productions2.s3.amazonaws.com/api-evangelist/hackathons/Hackathon-Tag-Cloud-2.png'
          alt=""
        />
        <div className="widget__contentTitle">
          <h4>Hackathons</h4>
          <p>Hackathons are where your crazy idea becomes reality</p>
        </div>
      </div>
      <div className="widget__content">
        <img
          src='https://res.cloudinary.com/practicaldev/image/fetch/s--gG5LzL6k--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5a1k6e5e0k307iocpfvh.jpeg'
          alt=""
        />
        <div className="widget__contentTitle">
          <h4>Competitive Programming</h4>
          <p>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</p>
        </div>
      </div>
      <div className="widget__content">
        <img
          src='https://www.rikon.ie/wp-content/uploads/2019/01/Nominal-Group-Technique.png'
          alt=""
        />
        <div className="widget__contentTitle">
          <h4>Intercollegiate events</h4>
          <p>I shall participate, I shall contribute and by doing so I will be the gainer</p>
        </div>
      </div>
      <div className="widget__content">
        <img
          src='https://millardwestcatalyst.com/wp-content/uploads/2019/02/extra_curricular_image_for_website-900x636.jpg'
          alt=""
        />
        <div className="widget__contentTitle">
          <h4>Extra-curricular Activities</h4>
          <p>Such activities helps to provide a productive break from from your study/work</p>
        </div>
      </div>
    </div>
  );
}

export default WidgetOptions
