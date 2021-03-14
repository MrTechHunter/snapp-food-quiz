import React from 'react';
// Styles
import './Vendor.styles.scss';

const Vendor = ({ vendor, logo }) => {
    return (
        <div className='wrapper'>
        <div
        className='background-image'
        style={{
            backgroundImage: `url(${logo})` // eslint-disable-next-line
        }}
        />
        <p className='title'>{vendor.data.title}</p>
        <p className='description'>{vendor.data.description}</p>
        </div>
    );
}

export default Vendor;
