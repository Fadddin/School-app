// GridContainer.js
import React from 'react';
import './GridContainer.css';

const GridContainer = () => {
    return (
        <div className="grid-container">
            <div className="items-center justify-center bg-yellow-400 px-4 py-20 text-slate-50 text-3xl">
                <div className=' flex items-center justify-center my-0'>600+</div> <br />
                <div className=' flex items-center justify-center my-0'>Students</div>
            </div>
            <div className="flex items-center justify-center bg-cyan-400 px-4 py-20 text-slate-50 text-3xl">
                <div className=' flex items-center justify-center my-0'>600+</div> <br />
                <div className=' flex items-center justify-center my-0'>Students</div>
            </div>
            <div className="flex items-center justify-center bg-pink-500 px-4 py-20 text-slate-50 text-3xl">
                <div className=' flex items-center justify-center my-0'>600+</div> <br />
                <div className=' flex items-center justify-center my-0'>Students</div>
            </div>
            <div className="flex items-center justify-center bg-green-400 px-4 py-20 text-slate-50 text-3xl">
                <div className=' flex items-center justify-center my-0'>600+</div> <br />
                <div className=' flex items-center justify-center my-0'>Students</div>
            </div>
        </div>
    );
};

export default GridContainer;
