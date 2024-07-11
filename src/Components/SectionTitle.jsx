import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='text-center max-w-md mx-auto mb-3'>
            <p className='text-yellow-600 mb-2'>---{subHeading}---</p>
            <h3 className='text-3xl border-y-4 py-2 uppercase'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;