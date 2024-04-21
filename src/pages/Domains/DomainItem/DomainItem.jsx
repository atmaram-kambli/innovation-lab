import React from 'react'
import PropTypes from 'prop-types'

function DomainItem(props) {
    return (
        <>
            <div className="container">
                <div className="card" style={{ width: "18rem" }} >
                    <img src={props.img} className="card-img-top" style={{height:"150px"}} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.domainName}</h5>
                        <p className="card-text">{props.content}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

DomainItem.defaultProps = {
    img: 'null',
    domainName: "Innovation Lab",
    content: "The Innovation Lab is the GCOEARE club founded in 2019 with the aim of giving the student the platform to express their idea and implement them in real life"
};

DomainItem.propTypes = {
    img: PropTypes.string.isRequired,
    domainName: PropTypes.string.isRequired,
    content: PropTypes.string
};


export default DomainItem