import React from 'react';
import {GridItem} from "./GridItem";

const GridRow = ({}) =>
    <div className="row grid-row">
        <div className="col-6 col-md-2 text-center"><GridItem/></div>
        <div className="col-6 col-md-2 text-center"><GridItem/></div>
        <div className="col-6 col-md-2 text-center"><GridItem/></div>
        <div className="col-6 col-md-2 text-center"><GridItem/></div>
        <div className="col-6 col-md-2 text-center"><GridItem/></div>
        <div className="col-6 col-md-2 text-center"><GridItem/></div>
    </div>;

export {GridRow};