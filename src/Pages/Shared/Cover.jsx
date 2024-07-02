import React from 'react';

const Cover = ({img, title}) => {
    return (
        <div
            className="hero h-[720px] mb-8"
            style={{backgroundImage: `url("${img}")`}}>
            {/* <div className="hero-overlay bg-black bg-opacity-60"></div> */}
            <div className="hero-content text-neutral-content text-center bg-black bg-opacity-70">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold uppercase">{title}
                    </h1>
                    <p className="mb-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    
                </div>
            </div>
        </div>
    );
};

export default Cover;