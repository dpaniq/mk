import React from 'react'

import ReloadSVG from '../../assets/images/svg/reloader.svg'
import '../../scss/components/reloader.scss'

function handleRefreshPage() {
    console.log('reloading...')
    window.location.reload();
}

export const Reloader = () => {
    return (
        <>
            <div id="reloader" className="reloader">
                <button onClick={handleRefreshPage}>
                    <img className="reloader__img" src={ReloadSVG}/>
                </button>
            </div>
        </>
    )
}
