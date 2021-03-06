import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Menu from "./Menu";
import { getCart } from './cartHelpers';
import Card from './Card';
import Checkout from './Checkout';

const Cart = () => {
    const [items, setItems] = useState([]);
    const [run, setRun] = useState(false);

    useEffect(() => {
        setItems(getCart());
    }, [run]);

    const showItems = items => {
        return (
            <div>
                <h5>Your cart has {`${items.length}`} items</h5>
                <hr />
                {items.map((product, i) => (
                    <Card
                        key={i}
                        product={product}
                        showAddToCartButton={false}
                        cartUpdate={true}
                        showRemoveProductButton={true}
                        setRun={setRun}
                        run={run}
                    />
                ))}
            </div>
        );
    };

    const noItemsMessage = () => (
        <h5 >
            Your cart is empty. <br /> <Link to="/shop">Continue shopping</Link>
        </h5>
    );

    return (
        <div>
            <Menu/>
            <br/> <br/> <br/>
            <div className="container">
            <div className="row">
               
                <div className="col-6">{items.length > 0 ? showItems(items) : noItemsMessage()}</div>

                <div className="col-6">
                    <h4 className="mb-4">Your cart summary</h4>
                    <hr />
                    <Checkout products={items} setRun={setRun} run={run} />
                </div>
            </div>
        </div>
     </div>
    );
};

export default Cart;
