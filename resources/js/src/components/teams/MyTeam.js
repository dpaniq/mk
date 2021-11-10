import Cookie from 'js-cookie'
import React, { useState, useEffect, useContext, useRef} from 'react'

import Swal from 'sweetalert2'

import { axiosPost } from '../../utils/axios'
import { Reloader } from '../reloader/Reloader'
import '../../scss/components/team/my_team.scss'
import GoldBarSVG from '../../assets/images/svg/goldbar.svg'
import ReloadSVG from '../../assets/images/svg/reloader.svg'
import '../../scss/components/reloader.scss'

export const MyTeam = ({balance, myTeam, getBalance, shakeClass}) => {

    const reloadBtn = useRef()

    async function updateBalance() {
        reloadBtn.current.className = "active"
        await new Promise(r => setTimeout(r, 1000));
        reloadBtn.current.className = ""
        getBalance()
    }
    
    return (
        <>
            <ul className="cards">
                <li>
                    <div className="card">
                        <div className="card__overlay">
                            <div className="card__header">
 
                                <img className="card__thumb" src={myTeam.IMAGE} alt="" />
                                <div className="card__header-text">
                                    <h3 className="card__title">{myTeam.TITLE}</h3>
                                    <span className={`card__status ${shakeClass ? 'shake' : ''}`}>
                                        {balance} <img src={GoldBarSVG} width="25px" height="25px"></img>
                                    </span>
                                </div>
                                <div className="card__title">
                                    <div id="reloader" className="reloader">
                                        <button className="" onClick={updateBalance} ref={reloadBtn}>
                                            <img className="reloader__img" src={ReloadSVG} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    )
}
