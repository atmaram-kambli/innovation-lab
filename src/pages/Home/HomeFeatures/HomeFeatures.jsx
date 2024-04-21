import React from 'react';
import './HomeFeatures.css';
import feature1 from '../../../assets/home-feature1.png'
import feature2 from '../../../assets/home-feature2.png'
import feature3 from '../../../assets/home-feature3.png'

const HomeFeatures = () => {
    const feature_data = [
        {
            id: 1,
            heading: "Hands-On Experience",
            image: feature1,
            desc: "At our Innovation Lab, we prioritize hands-on experience where students can actively engage in real-world projects, gain practical skills, and apply theoretical knowledge in a supportive and collaborative environment."
        },
        {
            id: 2,
            heading: "Diverse Opportunities",
            image: feature3,
            desc: "Students are provided with a wide range of opportunities to explore their interests and passions. From software development to design thinking and engineering, students with different disciplines and background can find a project that resonates with their interests and goals."
        },
        {
            id: 3,
            heading: "Community and Support",
            image: feature2,
            desc: "At our Innovation Lab, you'll collaborate with like-minded peers and receive guidance from seniors. Whether you're seeking mentorship, looking for collaborators, or simply want to bounce ideas off fellow innovators, our community is here to support you every step of the way."
        },
    ]
  return (
    <div className='homefeatures'>
    <div>
        <h1 className='head'>Why to Choose Us</h1>
        <p>Choose us to embark on a journey of innovation, collaboration, and limitless possibilities.</p>

    </div>
        <div className="features">
            {
                feature_data.map((feature) => {
                    return (
                        <div className="feature bg-white position-relative" key={feature.id}>
                            <img src={feature.image} alt="" width={100} />
                            <h2>{feature.heading}</h2>
                            <p>{feature.desc}</p>
                            {/* <hr className='h-3 position-absolute' /> */}
                        </div>
                    );
                })
            }
        </div>
    </div>

  )
}

export default HomeFeatures