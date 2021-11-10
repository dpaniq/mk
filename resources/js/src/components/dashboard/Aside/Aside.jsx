import React from "react";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

import { BrandLogo } from "./BrandLogo";
import { User } from "./User";
import { Search } from "./Search";
import { Navigation } from "./Navigation";
// import { DashboardNav } from "@menu/DashboardNav";
import { DashboardNav } from "../../../menu/DashboardNav";
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

export const Aside = () => {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <BrandLogo />
            <div className="sidebar">
                {/* <User /> */}
                {/* <Search /> */}
                {/* <Navigation /> */}
                <DashboardNav />
            </div>
        </aside>
    );
};
