import React from "react";
// import { Route, Link, useLocation } from "react-router-dom";

// import svg1 from '../../assets/images/svg/icon-1.svg'
// import svg2 from '../../assets/images/svg/icon-2.svg'
// import svg3 from '../../assets/images/svg/icon-3.svg'
// import svg4 from '../../assets/images/svg/icon-4.svg'
// import svg5 from '../../assets/images/svg/icon-5.svg'

// const menu = [];

export const DashboardNav = () => {

    // const x: number = 2

    // const location = useLocation();

    // const handleActiveMenuIem = (path) => {
    //     const active =
    //         location.pathname == path ? "footerMenu__link-active" : "";
    //     return `footerMenu__link ${active}`;
    // };


    return ('asdasdas')

    return (
        <>
            <nav className="mt-2">
                <ul
                    className="nav nav-pills nav-sidebar flex-column"
                    data-widget="treeview"
                    role="menu"
                    data-accordion="false"
                >
                    {/* Add icons to the links using the .nav-icon class
        with font-awesome or any other icon font library */}
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="nav-icon fas fa-tachometer-alt" />
                            <p>
                                Dashboard
                                <i className="right fas fa-angle-left" />
                            </p>
                        </a>
                        <ul className="nav nav-treeview">
                            <li className="Articles">
                                <a href="../../index.html" className="nav-link">
                                    <i class="fas fa-typewriter" />
                                    <p>Articles</p>
                                </a>
                            </li>
                            <li className="Photos">
                                <a href="../../index.html" className="nav-link">
                                    <i class="fas fa-camera" />
                                    <p>Photos</p>
                                </a>
                            </li>
                            <li className="Videos">
                                <a href="../../index.html" className="nav-link">
                                    <i class="fas fa-circle fa-video" />
                                    <p>Videos</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </>
    );
};
