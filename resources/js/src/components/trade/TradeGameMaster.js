

import React, { useState, useEffect, useContext, useRef } from 'react'
import Swal from 'sweetalert2'

import { axiosPost } from '../../utils/axios'
import Contexts from '../../contexts/_contexts'

import '../../scss/components/team/enemy_teams.scss'

export const TradeGameMaster = ({getBalance, maxBalance}) => {

    const { sessionId } = useContext(Contexts.Global)

    const [balance, setBalance] = useState(0)
    const [detail, setDetail] = useState('')

    const errorBalance = () => {
        Swal.fire({
            icon: 'error',
            title: 'Произошла ошибка',
            text: 'Количество золото должно быть больше нуля',
            showConfirmButton: true,
        })
    }

    const errorDetail = () => {
        Swal.fire({
            icon: 'error',
            title: 'Произошла ошибка',
            text: 'Укажите детали для геймастера',
            showConfirmButton: true,
        })
    }

    async function send() {
        if (balance <= 0) { errorBalance(); return; }
        if (detail.trim() == '') { errorDetail(); return; }

        if (balance && detail) {
            const response = await axiosPost('send_balance_to_gm', { sessionId, balance, detail })
            if (response.success && !response?.error) {
                
                Swal.fire({
                    icon: 'success',
                    title: 'Золото отправлено',
                    text: 'Геймастер обрабатывает запрос',
                    showConfirmButton: true,
                }).then((result) => {
                    if (result.isConfirmed) {
                        getBalance()
                    }
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Произошла ошибка',
                    showConfirmButton: true,
                }).then((result) => {
                    if (result.isConfirmed) {
                        getBalance()
                    }
                })
            }
        }
        setBalance(0)
        setDetail('')
    }

    const balanceChange = (event) => setBalance(Number(event.target.value))
    const balanceIncrementX1 = () => setBalance(balance + 1)
    const balanceDecrementX1 = () => (balance - 1 < 0) ? setBalance(0) : setBalance(balance - 1)

    return (
        <>
            {/* <p style={{textAlign: 'center'}}>(Отправить гейммастеру)</p> */}
            <br />
            <div className="enemy-teams">
                <h4>Укажите количество золотых:</h4>
                <div className="enemy__input">
                    <button className="countBttn" onClick={balanceDecrementX1}>
                        <span>&#8722;</span>
                    </button>
                    <input type="number"
                        min="0"
                        max={maxBalance}
                        pattern="[1-9]"
                        title="Balance"
                        placeholder={0} 
                        value={balance > 0 ? balance : ''}
                        onChange={balanceChange} 
                        required
                    />
                    <button className="countBttn" onClick={balanceIncrementX1}>
                        <span>&#x2b;</span>
                    </button>
                </div>
                <br />
                <div className="enemy__textarea">
                    <textarea name="" id="" placeholder="Детали" onChange={(event) => setDetail(event.target.value)} value={detail}></textarea>
                </div>
                <div className="enemy__input">
                    <button className="countSubmit countSubmit__gm" onClick={send} disabled={balance == 0 ? true : false}>Отправить</button>
                </div>
            </div>
        </>
    )
}