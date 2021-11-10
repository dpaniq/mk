

import React, { useState, useEffect, useContext, useRef } from 'react'

import { Operation } from './Operation'
import '../../scss/components/operations/operations.scss'

export const Operations = ({operations}) => {
    return (
        <>
            {operations.map((operation, index) => (
                <Operation operation={operation} key={index}/>
            ))}
        </>
    )
}