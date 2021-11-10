import React from 'react'

export const Charts = () => {
    return (
        <>
            {/* Custom tabs (Charts with tabs)*/}
            <div className="card">
                <div
                    className="card-header ui-sortable-handle"
                    style={{ cursor: "move" }}
                >
                    <h3 className="card-title">
                        <i className="fas fa-chart-pie mr-1" />
                        Sales
                    </h3>
                    <div className="card-tools">
                        <ul className="nav nav-pills ml-auto">
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    href="#revenue-chart"
                                    data-toggle="tab"
                                >
                                    Area
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="#sales-chart"
                                    data-toggle="tab"
                                >
                                    Donut
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* /.card-header */}
                <div className="card-body">
                    <div className="tab-content p-0">
                        {/* Morris chart - Sales */}
                        <div
                            className="chart tab-pane active"
                            id="revenue-chart"
                            style={{
                                position: "relative",
                                height: 300,
                            }}
                        >
                            <div className="chartjs-size-monitor">
                                <div className="chartjs-size-monitor-expand">
                                    <div className />
                                </div>
                                <div className="chartjs-size-monitor-shrink">
                                    <div className />
                                </div>
                            </div>
                            <canvas
                                id="revenue-chart-canvas"
                                style={{
                                    height: 300,
                                    display: "block",
                                    width: 409,
                                }}
                                className="chartjs-render-monitor"
                                width={409}
                                height={300}
                            />
                        </div>
                        <div
                            className="chart tab-pane"
                            id="sales-chart"
                            style={{
                                position: "relative",
                                height: 300,
                            }}
                        >
                            <canvas
                                id="sales-chart-canvas"
                                style={{
                                    height: 0,
                                    display: "block",
                                    width: 0,
                                }}
                                className="chartjs-render-monitor"
                                width={10}
                                height={10}
                            />
                        </div>
                    </div>
                </div>
                {/* /.card-body */}
            </div>
            {/* /.card */}
        </>
    )
}