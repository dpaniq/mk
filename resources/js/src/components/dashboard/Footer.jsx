import React from "react";

export const Footer = () => {
    return (
        <>
            <footer className="main-footer">
                <strong>
                    Copyright © 2021{" "}
                    <a href="https://adminlte.io">Mk records.io</a>.
                </strong>
                All rights reserved.
                <div className="float-right d-none d-sm-inline-block">
                    <b>Version</b> 3.2.0-rc
                </div>
            </footer>
        </>
    )
}