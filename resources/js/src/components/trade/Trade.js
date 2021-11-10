

import Cookie from 'js-cookie'
import React, { useState, useEffect, useContext, useRef } from 'react'
const axios = require('axios');
import Swal from 'sweetalert2'

import { axiosPost } from '../../utils/axios'

import '../../scss/components/team/enemy_teams.scss'
import '../../scss/components/trade/trade.scss'

import SwordSVG from '../../assets/images/svg/sword.svg'
import MinusSVG from '../../assets/images/svg/minus.svg'
import PlusSVG from '../../assets/images/svg/plus.svg'
import ScalesSVG from '../../assets/images/svg/scales.svg'
import CrossSVG from '../../assets/images/svg/cross.svg'

import GameMasterSVG from '../../assets/images/svg/gamemaster.svg'
import GroupSVG from  '../../assets/images/svg/group.svg'

import { TradeGameMaster } from './TradeGameMaster';
import { TradeEnemys } from './TradeEnemys';

export const Trade = ({balance, getBalance, teams}) => {

    const checkBox = useRef()
    const [trader, setTrader] = useState(0)
    const [tradeTxt, setTradeTxt] = useState('Game Master')

    const handleTrade = (mode) =>  {
        checkBox.current.checked = !checkBox.current.checked

        // if (checkBox.current.checked) {
        //     setTrader(1)
        //     setTradeTxt('Team')
        //     return;
        // }

        // setTrader(0)
        // setTradeTxt('Game Master')
    }

    const tradeDestinationRender = () => {
        switch (trader) {
            case 0: return (<TradeGameMaster getBalance={getBalance} maxBalance={balance}/>)
            case 1: return (<TradeEnemys getBalance={getBalance}  maxBalance={balance} teams={teams}/>)
            default: return (<>Nothing..</>)
        }
    }

    return (
        <>
            <div className="trade">
                <h2>Режим торговли:</h2>
                <div className="trade__row">
                    <button className={trader == 0 ? 'active active__gm' : ''} onClick={() => setTrader(0)}>
                        <img src={GameMasterSVG} /><span>Game Master</span>
                    </button>
                    <button className={trader == 1 ? 'active active__team' : ''} onClick={() => setTrader(1)}>
                        <img src={GroupSVG} /><span>Team</span>
                    </button>
                </div>
                {/* <div className="toggle">
                    <label className="switch" htmlFor="checkbox">
                        <input type="checkbox" id="checkbox" onChange={handleTrade} ref={checkBox}/>
                        <div className="toggle__icon"></div>
                        <div className="slider round">{tradeTxt}</div>
                    </label>
                </div> */}
            </div>
            {tradeDestinationRender()}
        </>
    )
}