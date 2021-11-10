import React from 'react'
import { Header } from "../common/Header"
import { Footer } from "../common/Footer"

export const Container = ({children}) => {
    return (
        <>
            <div className="content" id="content">
                <Header />
                <div className="content__wrap">
                    <div className="contentWrap"></div>
                    <div className="contentWrap__container">
                        {children}
                    </div>
                </div>
                {/* <Footer /> */}
            </div>
        </>
    )
}
