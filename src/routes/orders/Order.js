import React from 'react';

const Order = ({match}) =>
    <div className="container content-padding">Order {match.params.id}</div>;

export {Order};