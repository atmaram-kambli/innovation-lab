import React from 'react';
import './PageBanner.css';

const PageBanner = ({bannerIMG, salutation="", bannerName="Innovation Lab", desc}) => {
    return (
        <div className='pagebanner d-flex justify-content-start offset-md-1' style={{ background: `linear-gradient(to right, rgb(233, 240, 241), rgba(225, 235, 238, 0.95), rgba(184, 200, 200, 0.8), rgba(60, 119, 126, 0.7), rgba(13, 26, 27, 0.6), rgba(17, 22, 22, 0.6)), url(${bannerIMG}) no-repeat center center/cover` }}>
            <div className="d-flex align-items-center px-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="banner-text">
                                <h1 className='mb-3'>
                                    <span className="">{salutation?salutation:""}</span> <span className="bold text-primary">{bannerName}</span>
                                </h1>
                                <p>
                                    {desc?desc:""}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageBanner;
