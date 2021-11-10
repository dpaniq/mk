import React from "react";

export const Search = () => {
    return (
        <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
                <input
                    className="form-control form-control-sidebar"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                />
                <div className="input-group-append">
                    <button className="btn btn-sidebar">
                        <i className="fas fa-search fa-fw" />
                    </button>
                </div>
            </div>
            <div className="sidebar-search-results">
                <div className="list-group">
                    <a href="#" className="list-group-item">
                        <div className="search-title">
                            <strong className="text-light" />N
                            <strong className="text-light" />o
                            <strong className="text-light" />{" "}
                            <strong className="text-light" />e
                            <strong className="text-light" />l
                            <strong className="text-light" />e
                            <strong className="text-light" />m
                            <strong className="text-light" />e
                            <strong className="text-light" />n
                            <strong className="text-light" />t
                            <strong className="text-light" />{" "}
                            <strong className="text-light" />f
                            <strong className="text-light" />o
                            <strong className="text-light" />u
                            <strong className="text-light" />n
                            <strong className="text-light" />d
                            <strong className="text-light" />!
                            <strong className="text-light" />
                        </div>
                        <div className="search-path" />
                    </a>
                </div>
            </div>
        </div>
    );
};
