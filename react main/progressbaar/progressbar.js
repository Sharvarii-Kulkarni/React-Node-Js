import React from "react";
import './progressBar.css';

const ProgressBar = ({ progress }) => {
    let progressValue = progress;

    if (progressValue < 0) {
      progressValue = 0;
    } else if (progressValue > 100) {
      progressValue = 100;
    }

    return (
        <div className="progress-bar">
            <div 
                className="progress"
                style={{ width: `${progressValue}%` }}
            >
            </div>
        </div>
    );
};

export default ProgressBar;
