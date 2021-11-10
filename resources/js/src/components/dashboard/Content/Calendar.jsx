export const Calendar = () => {
    return (
        <>
            {/* Calendar */}
            <div className="card bg-gradient-success">
                <div
                    className="card-header border-0 ui-sortable-handle"
                    style={{ cursor: "move" }}
                >
                    <h3 className="card-title">
                        <i className="far fa-calendar-alt" />
                        Calendar
                    </h3>
                    {/* tools card */}
                    <div className="card-tools">
                        {/* button with a dropdown */}
                        <div className="btn-group">
                            <button
                                type="button"
                                className="btn btn-success btn-sm dropdown-toggle"
                                data-toggle="dropdown"
                                data-offset={-52}
                            >
                                <i className="fas fa-bars" />
                            </button>
                            <div className="dropdown-menu" role="menu">
                                <a href="#" className="dropdown-item">
                                    Add new event
                                </a>
                                <a href="#" className="dropdown-item">
                                    Clear events
                                </a>
                                <div className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                    View calendar
                                </a>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="btn btn-success btn-sm"
                            data-card-widget="collapse"
                        >
                            <i className="fas fa-minus" />
                        </button>
                        <button
                            type="button"
                            className="btn btn-success btn-sm"
                            data-card-widget="remove"
                        >
                            <i className="fas fa-times" />
                        </button>
                    </div>
                    {/* /. tools */}
                </div>
                {/* /.card-header */}
                <div className="card-body pt-0">
                    {/*The calendar */}
                    <div id="calendar" style={{ width: "100%" }}>
                        <div className="bootstrap-datetimepicker-widget usetwentyfour">
                            <ul className="list-unstyled">
                                <li className="show">
                                    <div className="datepicker">
                                        <div
                                            className="datepicker-days"
                                            // style={{}}
                                        >
                                            <table className="table table-sm">
                                                <thead>
                                                    <tr>
                                                        <th
                                                            className="prev"
                                                            data-action="previous"
                                                        >
                                                            <span
                                                                className="fa fa-chevron-left"
                                                                title="Previous Month"
                                                            />
                                                        </th>
                                                        <th
                                                            className="picker-switch"
                                                            data-action="pickerSwitch"
                                                            colSpan={5}
                                                            title="Select Month"
                                                        >
                                                            October 2021
                                                        </th>
                                                        <th
                                                            className="next"
                                                            data-action="next"
                                                        >
                                                            <span
                                                                className="fa fa-chevron-right"
                                                                title="Next Month"
                                                            />
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <th className="dow">
                                                            Su
                                                        </th>
                                                        <th className="dow">
                                                            Mo
                                                        </th>
                                                        <th className="dow">
                                                            Tu
                                                        </th>
                                                        <th className="dow">
                                                            We
                                                        </th>
                                                        <th className="dow">
                                                            Th
                                                        </th>
                                                        <th className="dow">
                                                            Fr
                                                        </th>
                                                        <th className="dow">
                                                            Sa
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td
                                                            data-action="selectDay"
                                                            data-day="09/26/2021"
                                                            className="day old weekend"
                                                        >
                                                            26
                                                        </td>
                                                        <td
                                                            data-action="selectDay"
                                                            data-day="09/27/2021"
                                                            className="day old"
                                                        >
                                                            27
                                                        </td>
                                                        <td
                                                            data-action="selectDay"
                                                            data-day="09/28/2021"
                                                            className="day old"
                                                        >
                                                            28
                                                        </td>
                                                        <td
                                                            data-action="selectDay"
                                                            data-day="09/29/2021"
                                                            className="day old"
                                                        >
                                                            29
                                                        </td>
                                                        <td
                                                            data-action="selectDay"
                                                            data-day="09/30/2021"
                                                            className="day old"
                                                        >
                                                            30
                                                        </td>
                                                        <td
                                                            data-action="selectDay"
                                                            data-day="10/01/2021"
                                                            className="day"
                                                        >
                                                            1
                                                        </td>
                                                        <td
                                                            data-action="selectDay"
                                                            data-day="10/02/2021"
                                                            className="day weekend"
                                                        >
                                                            2
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            data-action="selectDay"
                                                            data-day="10/03/2021"
                                                            className="day weekend"
                                                        >
                                                            3
                                                        </td>
                                                        <td
                                                            data-action="selectDay"
                                                            data-day="10/04/2021"
                                                            className="day"
                                                        >
                                                            4
                                                        </td>
                                                        <td
                                                            data-action="selectDay"
                                                            data-day="10/05/2021"
                                                            className="day"
                                                        >
                                                            5
                                                        </td>
                                                        <td
                                                            data-action="selectDay"
                                                            data-day="10/06/2021"
                                                            className="day"
                                                        >
                                                            6
                                                        </td>
                                                        <td
                                                            data-action="selectDay"
                                                            data-day="10/07/2021"
                                                            className="day"
                                                        >
                                                            7
                                                        </td>
                                                        <td
                                                            data-action="selectDay"
                                                            data-day="10/08/2021"
                                                            className="day"
                                                        >
                                                            8
                                                        </td>
                                                        <td
                                                            data-action="selectDay"
                                                            data-day="10/09/2021"
                                                            className="day weekend"
                                                        >
                                                            9
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            data-action="selectDay"
                                                            data-day="10/10/2021"
                                                            className="day weekend"
                                                        >
                                                            10
                                                        </td>
                                                        <td
                                                            data-action="selectDay"
                                                            data-day="10/11/2021"
                                                            className="day"
                                                        >
                                                            11
                                                        </td>
                                                        <td
                                                            data-action="selectDay"
                                                            data-day="10/12/2021"
                                                            className="day"
                                                        >
                                                            12
                                                        </td>
                                                        <td
                                                            data-action="selectDay"
                                                            data-day="10/13/2021"
                                                            className="day"
                                                        >
                                                            13
                                                        </td>
                                                        <td
                                                            data-action="selectDay"
                                                            data-day="10/14/2021"
                                                            className="day"
                                                        >
                                                            14
                                                        </td>
                                                        <td
                                                            data-action="selectDay"
                                                            data-day="10/15/2021"
                                                            className="day"
                                                        >
                                                            15
                                                        </td>
                                                        <td
                                                            data-action="selectDay"
                                                            data-day="10/16/2021"
                                                            className="day weekend"
                                                        >
                                                            16
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            data-action="selectDay"
                                                            data-day="10/17/2021"
                                                            className="day weekend"
                                                        >
                                                            17
                                                        </td>
                                                        <td
                                                            data-action="selectDay"
                                                            data-day="10/18/2021"
                                                            className="day"
                                                        >
                                                            18
                                                        </td>
                                                        <td
                                                            data-action="selectDay"
                                                            data-day="10/19/2021"
                                                            className="day"
                                                        >
                                                            19
                                                        </td>
                                                        <td
                                                            data-action="selectDay"
                                                            data-day="10/20/2021"
                                                            className="day"
                                                        >
                                                            20
                                                        </td>
                                                        <td
                                                            data-action="selectDay"
                                                            data-day="10/21/2021"
                                                            className="day"
                                                        >
                                                            21
                                                        </td>
                                                        <td
                                                            data-action="selectDay"
                                                            data-day="10/22/2021"
                                                            className="day"
                                                        >
                                                            22
                                                        </td>
                                                        <td
                                                            data-action="selectDay"
                                                            data-day="10/23/2021"
                                                            className="day weekend"
                                                        >
                                                            23
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            data-action="selectDay"
                                                            data-day="10/24/2021"
                                                            className="day weekend"
                                                        >
                                                            24
                                                        </td>
                                                        <td
                                                            data-action="selectDay"
                                                            data-day="10/25/2021"
                                                            className="day"
                                                        >
                                                            25
                                                        </td>
                                                        <td
                                                            data-action="selectDay"
                                                            data-day="10/26/2021"
                                                            className="day"
                                                        >
                                                            26
                                                        </td>
                                                        <td
                                                            data-action="selectDay"
                                                            data-day="10/27/2021"
                                                            className="day"
                                                        >
                                                            27
                                                        </td>
                                                        <td
                                                            data-action="selectDay"
                                                            data-day="10/28/2021"
                                                            className="day active today"
                                                        >
                                                            28
                                                        </td>
                                                        <td
                                                            data-action="selectDay"
                                                            data-day="10/29/2021"
                                                            className="day"
                                                        >
                                                            29
                                                        </td>
                                                        <td
                                                            data-action="selectDay"
                                                            data-day="10/30/2021"
                                                            className="day weekend"
                                                        >
                                                            30
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            data-action="selectDay"
                                                            data-day="10/31/2021"
                                                            className="day weekend"
                                                        >
                                                            31
                                                        </td>
                                                        <td
                                                            data-action="selectDay"
                                                            data-day="11/01/2021"
                                                            className="day new"
                                                        >
                                                            1
                                                        </td>
                                                        <td
                                                            data-action="selectDay"
                                                            data-day="11/02/2021"
                                                            className="day new"
                                                        >
                                                            2
                                                        </td>
                                                        <td
                                                            data-action="selectDay"
                                                            data-day="11/03/2021"
                                                            className="day new"
                                                        >
                                                            3
                                                        </td>
                                                        <td
                                                            data-action="selectDay"
                                                            data-day="11/04/2021"
                                                            className="day new"
                                                        >
                                                            4
                                                        </td>
                                                        <td
                                                            data-action="selectDay"
                                                            data-day="11/05/2021"
                                                            className="day new"
                                                        >
                                                            5
                                                        </td>
                                                        <td
                                                            data-action="selectDay"
                                                            data-day="11/06/2021"
                                                            className="day new weekend"
                                                        >
                                                            6
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div
                                            className="datepicker-months"
                                            style={{
                                                display: "none",
                                            }}
                                        >
                                            <table className="table-condensed">
                                                <thead>
                                                    <tr>
                                                        <th
                                                            className="prev"
                                                            data-action="previous"
                                                        >
                                                            <span
                                                                className="fa fa-chevron-left"
                                                                title="Previous Year"
                                                            />
                                                        </th>
                                                        <th
                                                            className="picker-switch"
                                                            data-action="pickerSwitch"
                                                            colSpan={5}
                                                            title="Select Year"
                                                        >
                                                            2021
                                                        </th>
                                                        <th
                                                            className="next"
                                                            data-action="next"
                                                        >
                                                            <span
                                                                className="fa fa-chevron-right"
                                                                title="Next Year"
                                                            />
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td colSpan={7}>
                                                            <span
                                                                data-action="selectMonth"
                                                                className="month"
                                                            >
                                                                Jan
                                                            </span>
                                                            <span
                                                                data-action="selectMonth"
                                                                className="month"
                                                            >
                                                                Feb
                                                            </span>
                                                            <span
                                                                data-action="selectMonth"
                                                                className="month"
                                                            >
                                                                Mar
                                                            </span>
                                                            <span
                                                                data-action="selectMonth"
                                                                className="month"
                                                            >
                                                                Apr
                                                            </span>
                                                            <span
                                                                data-action="selectMonth"
                                                                className="month"
                                                            >
                                                                May
                                                            </span>
                                                            <span
                                                                data-action="selectMonth"
                                                                className="month"
                                                            >
                                                                Jun
                                                            </span>
                                                            <span
                                                                data-action="selectMonth"
                                                                className="month"
                                                            >
                                                                Jul
                                                            </span>
                                                            <span
                                                                data-action="selectMonth"
                                                                className="month"
                                                            >
                                                                Aug
                                                            </span>
                                                            <span
                                                                data-action="selectMonth"
                                                                className="month"
                                                            >
                                                                Sep
                                                            </span>
                                                            <span
                                                                data-action="selectMonth"
                                                                className="month active"
                                                            >
                                                                Oct
                                                            </span>
                                                            <span
                                                                data-action="selectMonth"
                                                                className="month"
                                                            >
                                                                Nov
                                                            </span>
                                                            <span
                                                                data-action="selectMonth"
                                                                className="month"
                                                            >
                                                                Dec
                                                            </span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div
                                            className="datepicker-years"
                                            style={{
                                                display: "none",
                                            }}
                                        >
                                            <table className="table-condensed">
                                                <thead>
                                                    <tr>
                                                        <th
                                                            className="prev"
                                                            data-action="previous"
                                                        >
                                                            <span
                                                                className="fa fa-chevron-left"
                                                                title="Previous Decade"
                                                            />
                                                        </th>
                                                        <th
                                                            className="picker-switch"
                                                            data-action="pickerSwitch"
                                                            colSpan={5}
                                                            title="Select Decade"
                                                        >
                                                            2020-2029
                                                        </th>
                                                        <th
                                                            className="next"
                                                            data-action="next"
                                                        >
                                                            <span
                                                                className="fa fa-chevron-right"
                                                                title="Next Decade"
                                                            />
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td colSpan={7}>
                                                            <span
                                                                data-action="selectYear"
                                                                className="year old"
                                                            >
                                                                2019
                                                            </span>
                                                            <span
                                                                data-action="selectYear"
                                                                className="year"
                                                            >
                                                                2020
                                                            </span>
                                                            <span
                                                                data-action="selectYear"
                                                                className="year active"
                                                            >
                                                                2021
                                                            </span>
                                                            <span
                                                                data-action="selectYear"
                                                                className="year"
                                                            >
                                                                2022
                                                            </span>
                                                            <span
                                                                data-action="selectYear"
                                                                className="year"
                                                            >
                                                                2023
                                                            </span>
                                                            <span
                                                                data-action="selectYear"
                                                                className="year"
                                                            >
                                                                2024
                                                            </span>
                                                            <span
                                                                data-action="selectYear"
                                                                className="year"
                                                            >
                                                                2025
                                                            </span>
                                                            <span
                                                                data-action="selectYear"
                                                                className="year"
                                                            >
                                                                2026
                                                            </span>
                                                            <span
                                                                data-action="selectYear"
                                                                className="year"
                                                            >
                                                                2027
                                                            </span>
                                                            <span
                                                                data-action="selectYear"
                                                                className="year"
                                                            >
                                                                2028
                                                            </span>
                                                            <span
                                                                data-action="selectYear"
                                                                className="year"
                                                            >
                                                                2029
                                                            </span>
                                                            <span
                                                                data-action="selectYear"
                                                                className="year old"
                                                            >
                                                                2030
                                                            </span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div
                                            className="datepicker-decades"
                                            style={{
                                                display: "none",
                                            }}
                                        >
                                            <table className="table-condensed">
                                                <thead>
                                                    <tr>
                                                        <th
                                                            className="prev"
                                                            data-action="previous"
                                                        >
                                                            <span
                                                                className="fa fa-chevron-left"
                                                                title="Previous Century"
                                                            />
                                                        </th>
                                                        <th
                                                            className="picker-switch"
                                                            data-action="pickerSwitch"
                                                            colSpan={5}
                                                        >
                                                            2000-2090
                                                        </th>
                                                        <th
                                                            className="next"
                                                            data-action="next"
                                                        >
                                                            <span
                                                                className="fa fa-chevron-right"
                                                                title="Next Century"
                                                            />
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td colSpan={7}>
                                                            <span
                                                                data-action="selectDecade"
                                                                className="decade old"
                                                                data-selection={
                                                                    2006
                                                                }
                                                            >
                                                                1990
                                                            </span>
                                                            <span
                                                                data-action="selectDecade"
                                                                className="decade"
                                                                data-selection={
                                                                    2006
                                                                }
                                                            >
                                                                2000
                                                            </span>
                                                            <span
                                                                data-action="selectDecade"
                                                                className="decade active"
                                                                data-selection={
                                                                    2016
                                                                }
                                                            >
                                                                2010
                                                            </span>
                                                            <span
                                                                data-action="selectDecade"
                                                                className="decade active"
                                                                data-selection={
                                                                    2026
                                                                }
                                                            >
                                                                2020
                                                            </span>
                                                            <span
                                                                data-action="selectDecade"
                                                                className="decade"
                                                                data-selection={
                                                                    2036
                                                                }
                                                            >
                                                                2030
                                                            </span>
                                                            <span
                                                                data-action="selectDecade"
                                                                className="decade"
                                                                data-selection={
                                                                    2046
                                                                }
                                                            >
                                                                2040
                                                            </span>
                                                            <span
                                                                data-action="selectDecade"
                                                                className="decade"
                                                                data-selection={
                                                                    2056
                                                                }
                                                            >
                                                                2050
                                                            </span>
                                                            <span
                                                                data-action="selectDecade"
                                                                className="decade"
                                                                data-selection={
                                                                    2066
                                                                }
                                                            >
                                                                2060
                                                            </span>
                                                            <span
                                                                data-action="selectDecade"
                                                                className="decade"
                                                                data-selection={
                                                                    2076
                                                                }
                                                            >
                                                                2070
                                                            </span>
                                                            <span
                                                                data-action="selectDecade"
                                                                className="decade"
                                                                data-selection={
                                                                    2086
                                                                }
                                                            >
                                                                2080
                                                            </span>
                                                            <span
                                                                data-action="selectDecade"
                                                                className="decade"
                                                                data-selection={
                                                                    2096
                                                                }
                                                            >
                                                                2090
                                                            </span>
                                                            <span
                                                                data-action="selectDecade"
                                                                className="decade old"
                                                                data-selection={
                                                                    2106
                                                                }
                                                            >
                                                                2100
                                                            </span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </li>
                                <li className="picker-switch accordion-toggle" />
                            </ul>
                        </div>
                    </div>
                </div>
                {/* /.card-body */}
            </div>
            {/* /.card */}
        </>
    );
};
