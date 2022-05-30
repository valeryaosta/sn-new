import React from 'react';
import preloader from "../../../assets/preloader.svg";

const Preloader = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', margin: 0, padding: 0}}>
            <img src={preloader} alt='preloader' width={100} style={{objectFit: 'cover'}}/>
        </div>
    );
};

export default Preloader;