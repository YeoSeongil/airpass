import React from 'react';

interface UpBtnProps {
    width?: number | string;
    height?: number | string;
    circleColor?: string;
    pathColor?: string;
    onClickHandler?: ()=>void;
}

const UpBtn = ({width, height, circleColor,pathColor, onClickHandler}:UpBtnProps) => {
    return (
        <div className="upBtn" onClick={onClickHandler}>
            <svg version="1.1" 
                id="Capa_1" 
                xmlns="http://www.w3.org/2000/svg"  
                viewBox="0 0 512 512" 
                width={width}
                height={height}>
                <circle fill={circleColor} cx="256" cy="256" r="236.17"/>
                <path fill={circleColor} 
                    d="M256,512C114.853,512,0,397.167,0,256C0,114.853,114.853,0,256,0c141.167,0,256,114.853,256,256
                    C512,397.167,397.167,512,256,512z M256,39.659C136.705,39.659,39.659,136.705,39.659,256S136.705,472.341,256,472.341
                    S472.341,375.275,472.341,256C472.341,136.705,375.295,39.659,256,39.659z"/>
                <path fill={pathColor}
                    d="M369.227,311.126c-7.734,7.694-20.226,7.694-27.96,0l-85.069-85.069l-85.069,85.069
                    c-8.309,7.119-20.841,6.147-27.96-2.161c-6.365-7.416-6.365-18.382,0-25.798l99.148-99.148c7.734-7.694,20.226-7.694,27.96,0
                    l99.148,99.148C377.06,290.96,376.98,303.452,369.227,311.126z"/>
            </svg>
        </div>
    )
}

export default UpBtn