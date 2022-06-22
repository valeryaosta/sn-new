import React from 'react';
import plugImage from '../../../assets/constr.png'
import s from './UnderConstruction.module.css'

const UnderConstruction = () => {
    return (
        <div className={s.image}>
            <img src={plugImage} alt='plug image'/>
        </div>
    );
};

export default UnderConstruction;