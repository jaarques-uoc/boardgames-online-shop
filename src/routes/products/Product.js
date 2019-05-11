import React from 'react';
import {getProduct} from "./productsDAO";

class Product extends React.Component {
    constructor(props) {
        super(props);

        this.loadProduct();
    }

    state = {
        product: undefined
    };

    loadProduct = () => getProduct(this.props.match.params.id)
        .then(product => this.setState({product}));

    render() {
        const {product} = this.state;

        return (
            <div className="container content-padding">
                {product &&
                <div className="row justify-content-center">
                    <div className="col-4 text-center">
                        <img src={product.imageUrl}/>
                    </div>
                    <div className="col-4 d-flex align-items-start flex-column">
                        <div className="mb-auto p-2">
                            <h1 className="product-info-padding">{product.name}</h1>
                            <h5 className="product-info-padding">{product.price} €</h5>
                            <div>{product.description}</div>
                        </div>
                        <div className="p-2">
                            <button type="button" className="btn btn-primary">Add to cart</button>
                        </div>
                    </div>
                </div>
                }
            </div>
        );
    }
}

export {Product};