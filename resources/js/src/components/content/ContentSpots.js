import React from 'react'
import ProgressBar from 'react-customizable-progressbar' // https://www.npmjs.com/package/react-customizable-progressbar

const randomString = () => {
    let r = Math.random().toString(36).substring(7);
    return r
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export const ContentSpots = () => {
    return (
        <>
            <div className="spotHeader">
                <div className="spotHeader__title">
                    Точки
                </div>
            </div>
            <div className="spotContent">
                {[1,1,1,1,1,1,1,1].map((_, idx) => 
                    <div className="spotContent__row" key={idx}>
                        <ProgressBar
                            progress={getRandomInt(100)}
                            radius={100}
                            strokeColor='gold'
                        />
                        <br />
                        <span className="spotContentRow__name">
                            {`${idx + 1 } шахта`}
                        </span>
                    </div>
                
                )}
            </div>
        </>
    )
}