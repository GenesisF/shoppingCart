import React from 'react';

class CartItemComponent extends React.Component {
    render() {
        return (
            <div class="list-group-item">
                <div class="row">
                    <div class="col-md-8">{this.props.product}</div>
                    <div class="col-md-2">{this.props.price}</div>
                    <div class="col-md-2">{this.props.quantity}</div>
                </div>
            </div>
        )
    }
}

export default CartItemComponent;

