

import React, { useState, useEffect, useContext, useRef } from 'react'


export const Operation = ({operation}) => {

    const [detail, setDetail] = useState(false)

    const toggleDetail = () => setDetail(!detail)
    

    return (
        <>
            <table className="table">
                
                <tbody>
                    <tr className="operations-tr">
                        {/* <td>{operation.info.OID}</td> */}
                    
                        {console.log(typeof operation.info.INCOME)}
                        {operation.info.INCOME > 0 
                            ?
                            <td>
                                <span className="operation_income">
                                    +{Number(operation.info?.INCOME).toFixed(2)}
                                </span> 
                            </td>
                            :
                            <td>
                                <span className="operation_expence">
                                    -{Number(operation.info?.EXPENCE).toFixed(2)}
                                </span>
                            </td>
                        }
                        <td>{operation.info.DZ}</td>
                        <td>
                            <button className={`small ${detail ? 'active ' : ''}`} onClick={toggleDetail}>Details</button>
                        </td>
                    </tr>
                </tbody>
            </table>

            {detail && <>        
                <br />
                <table style={{border: '1px solid rgba(23, 56, 118, 0.502)', background: '#ccc0'}}>
                    <thead>
                        <tr>
                            <th>От</th>
                            <th>Кому</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr>
                            <td>{operation.sides.by}</td>
                            <td>{operation.sides.to}</td>
                        </tr>
                    </tbody>
                </table>
     
                <br />
                <table style={{border: '1px solid rgba(23, 56, 118, 0.502)', background: '#ccc0'}}>
                    <thead>
                        <tr>
                            <th>Детали</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr>
                            <td>{operation.info.DETAIL}</td>
                        </tr>
                    </tbody>
                </table>

            </>}

            <hr className="operation_separator"/>
        </>
    )
}