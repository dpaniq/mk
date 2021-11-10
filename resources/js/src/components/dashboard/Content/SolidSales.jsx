export const SolidSales = () => {
    return (
        <>
            {/* solid sales graph */}
            <div className="card bg-gradient-info">
                <div
                    className="card-header border-0 ui-sortable-handle"
                    style={{ cursor: "move" }}
                >
                    <h3 className="card-title">
                        <i className="fas fa-th mr-1" />
                        Sales Graph
                    </h3>
                    <div className="card-tools">
                        <button
                            type="button"
                            className="btn bg-info btn-sm"
                            data-card-widget="collapse"
                        >
                            <i className="fas fa-minus" />
                        </button>
                        <button
                            type="button"
                            className="btn bg-info btn-sm"
                            data-card-widget="remove"
                        >
                            <i className="fas fa-times" />
                        </button>
                    </div>
                </div>
                <div className="card-body">
                    <div className="chartjs-size-monitor">
                        <div className="chartjs-size-monitor-expand">
                            <div className />
                        </div>
                        <div className="chartjs-size-monitor-shrink">
                            <div className />
                        </div>
                    </div>
                    <canvas
                        className="chart chartjs-render-monitor"
                        id="line-chart"
                        style={{
                            minHeight: 250,
                            height: 250,
                            maxHeight: 250,
                            maxWidth: "100%",
                            display: "block",
                            width: 276,
                        }}
                        width={276}
                        height={250}
                    />
                </div>
                {/* /.card-body */}
                <div className="card-footer bg-transparent">
                    <div className="row">
                        <div className="col-4 text-center">
                            <div
                                style={{
                                    display: "inline",
                                    width: 60,
                                    height: 60,
                                }}
                            >
                                <canvas width={60} height={60} />
                                <input
                                    type="text"
                                    className="knob"
                                    data-readonly="true"
                                    defaultValue={20}
                                    data-width={60}
                                    data-height={60}
                                    data-fgcolor="#39CCCC"
                                    readOnly="readonly"
                                    style={{
                                        width: 34,
                                        height: 20,
                                        position: "absolute",
                                        verticalAlign: "middle",
                                        marginTop: 20,
                                        marginLeft: "-47px",
                                        border: "0px none",
                                        background:
                                            "rgba(0, 0, 0, 0) none repeat scroll 0% 0%",
                                        font: "bold 12px Arial",
                                        textAlign: "center",
                                        color: "rgb(57, 204, 204)",
                                        padding: 0,
                                        appearance: "none",
                                    }}
                                />
                            </div>
                            <div className="text-white">Mail-Orders</div>
                        </div>
                        {/* ./col */}
                        <div className="col-4 text-center">
                            <div
                                style={{
                                    display: "inline",
                                    width: 60,
                                    height: 60,
                                }}
                            >
                                <canvas width={60} height={60} />
                                <input
                                    type="text"
                                    className="knob"
                                    data-readonly="true"
                                    defaultValue={50}
                                    data-width={60}
                                    data-height={60}
                                    data-fgcolor="#39CCCC"
                                    readOnly="readonly"
                                    style={{
                                        width: 34,
                                        height: 20,
                                        position: "absolute",
                                        verticalAlign: "middle",
                                        marginTop: 20,
                                        marginLeft: "-47px",
                                        border: "0px none",
                                        background:
                                            "rgba(0, 0, 0, 0) none repeat scroll 0% 0%",
                                        font: "bold 12px Arial",
                                        textAlign: "center",
                                        color: "rgb(57, 204, 204)",
                                        padding: 0,
                                        appearance: "none",
                                    }}
                                />
                            </div>
                            <div className="text-white">Online</div>
                        </div>
                        {/* ./col */}
                        <div className="col-4 text-center">
                            <div
                                style={{
                                    display: "inline",
                                    width: 60,
                                    height: 60,
                                }}
                            >
                                <canvas width={60} height={60} />
                                <input
                                    type="text"
                                    className="knob"
                                    data-readonly="true"
                                    defaultValue={30}
                                    data-width={60}
                                    data-height={60}
                                    data-fgcolor="#39CCCC"
                                    readOnly="readonly"
                                    style={{
                                        width: 34,
                                        height: 20,
                                        position: "absolute",
                                        verticalAlign: "middle",
                                        marginTop: 20,
                                        marginLeft: "-47px",
                                        border: "0px none",
                                        background:
                                            "rgba(0, 0, 0, 0) none repeat scroll 0% 0%",
                                        font: "bold 12px Arial",
                                        textAlign: "center",
                                        color: "rgb(57, 204, 204)",
                                        padding: 0,
                                        appearance: "none",
                                    }}
                                />
                            </div>
                            <div className="text-white">In-Store</div>
                        </div>
                        {/* ./col */}
                    </div>
                    {/* /.row */}
                </div>
                {/* /.card-footer */}
            </div>
        </>
    );
};
