import { Breadcrumb } from "./Breadcrumb"
import { InfoBlocks } from "./InfoBlocks"
import { Calendar } from "./Calendar"
import { Charts } from "./Charts"
import { DirectChat } from "./DirectChat"
import { TodoList } from "./TodoList"

import { Map } from "./Map"
import { SolidSales } from './SolidSales'

export const Content = () => {
    
    return (
        <>
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper" style={{ minHeight: 791 }}>
                {/* <Breadcrumb /> */}

                {/* Main content */}
                <section className="content">
                    <div className="container-fluid">

                        {/* <InfoBlocks /> */}
                        {/* Main row */}
                        <div className="row">
                            {/* Left col */}
                            <section className="col-lg-7 connectedSortable ui-sortable">
                                
                                {/* <Charts /> */}
                                {/* <SolidSales /> */}
                                {/* <DirectChat /> */}
                                {/* <TodoList /> */}
                            </section>
                            
                            {/* /.Left col */}
                            {/* right col (We are only adding the ID to make the widgets sortable)*/}
                            <section className="col-lg-5 connectedSortable ui-sortable">
                                
                                {/* <Map /> //  */} {/* TODO ERROR VMAP (Countries from) */}
                                {/* <Calendar /> */}
                            </section>
                            {/* right col */}
                        </div>
                        {/* /.row (main row) */}
                    </div>
                    {/* /.container-fluid */}
                </section>
                {/* /.content */}
            </div>
        </>
    );
};
