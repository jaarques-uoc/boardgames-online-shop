import React from 'react';
import {GridItem} from "./GridItem";

const GridRow = ({}) =>
    <React.Fragment>
        <div className="row">
            <div className="col-6 col-md-4 text-center"><GridItem/></div>
            <div className="col-6 col-md-4 text-center"><GridItem/></div>
            <div className="col-6 col-md-4 text-center"><GridItem/></div>
        </div>
    </React.Fragment>;

export {GridRow};