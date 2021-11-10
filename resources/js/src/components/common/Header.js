import React, {useContext} from 'react'
import ReactDOM from 'react-dom';
import Swal from 'sweetalert2'
import {axiosPost} from '../../utils/axios'

import Contexts from '../../contexts/_contexts'

import moneySVG from '../../assets/images/svg/money.svg'

import {Operations} from '../operations/Operations'

export const Header = () => {

    const { sessionId } = useContext(Contexts.Global)

    const handleTeamTransactions = async () => {
        const response = await axiosPost(`get_team_transactions`, {sessionId})
        if (response.success && !response?.error) {
            Swal.fire({
                title: '<strong>Операции</strong>',
                html: '<div id="operations"></div>',
                showCloseButton: true,
                focusConfirm: false,
                showConfirmButton: false
            })
            ReactDOM.render(<Operations operations={response.data} />, document.getElementById('operations'));
        }
    }

    return (
        <div className="header">
            <div className="header__title">
                Witcher
                <div className="transactions">
                    <button onClick={handleTeamTransactions}>
                        <img src={moneySVG} alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}

