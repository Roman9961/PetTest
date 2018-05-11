import React from 'react';

const Preloader = ({isShow}) => {

const loaderContainer = ['spn_hol'];
if (!isShow) { loaderContainer.push('hidden'); }

    return (
        <div className={loaderContainer.join(' ')}>
            <div className="spinner">
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
            </div>
        </div>
    );
}

export default Preloader;