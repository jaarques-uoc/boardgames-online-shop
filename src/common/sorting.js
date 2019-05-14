
const sortOrderItems = orderItems =>
    orderItems && orderItems.sort((oi1, oi2) => oi1.productDto.id.localeCompare(oi2.productDto.id));

export {sortOrderItems}