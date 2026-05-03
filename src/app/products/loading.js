import React from 'react';
import { CircleLoader } from 'react-spinners';

const loading = () => {
    return (
        <div className='h-[90vh] flex justify-center items-center-safe'>
            <CircleLoader size={50} color="#FDB813" />
        </div>
    );
};

export default loading;