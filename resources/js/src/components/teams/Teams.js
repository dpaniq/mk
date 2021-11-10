import Cookie from 'js-cookie'
import { axiosPost } from '../../utils/axios'
import React, { useState, useEffect, useContext, useRef} from 'react'

import {MyTeam} from './MyTeam'
import {Trade} from '../trade/Trade'

import Contexts from '../../contexts/_contexts'


export const Teams = () => {
    const { sessionId } = useContext(Contexts.Global)

    const [balance, setBalance] = useState(0)

    const [myTeam, setMyTeam] = useState({ 'TITLE': '' })
    const [teams, setTeams] = useState([])
    const [toTeamId, setToTeamId] = useState(null)
    const [shakeClass, setShakeClass] = useState(false)

    async function getBalance() {
        const response = await axiosPost('get_balance', { sessionId })
        if (response.success) {
            setBalance(response.data.balance)
        }
        shakeClassName()
    }

    async function getTeams() {
        const response = await axiosPost('get_teams', { sessionId })

        if (response.success) {
            setMyTeam(response.data.my)
            setTeams(response.data.other)
        }
    }

    function shakeClassName() {
        setShakeClass(true)
        setTimeout(() => {
            setShakeClass(false)
        }, 2000);
    }

    useEffect(async () => {
        getBalance()
        getTeams()
    }, [])

    return (
        <>
            <MyTeam myTeam={myTeam} balance={balance} getBalance={getBalance} shakeClass={shakeClass}/>
            <Trade balance={balance} getBalance={getBalance} teams={teams}/>
        </>
    )
}