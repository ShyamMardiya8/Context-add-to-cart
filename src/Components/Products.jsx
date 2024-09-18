import React, { useContext } from "react";
import { BookContext } from "../App";

function Products() {
  const context = useContext(BookContext);

  const totalAmount = context.state.Cart.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

  return (
    <>
      <div className="total-amount">
        <h4>Total Amount: ${totalAmount}</h4>
      </div>

      {context.state.Cart.map((item) => (
        <div className="col-md-4 mb-4" key={item.id}>
          <div className="card">
            <img src={item.img} alt={item.title} className="img-fluid ratio" />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">Price: ${item.price * item.count}</p>
              <div className="d-flex align-items-center">
                <span
                  className="btn btn-outline-primary"
                  onClick={() => context.Increment(item.id)} 
                >
                  +
                </span>
                <p className="text-danger mx-2">{item.count}</p>
                <span
                  className="btn btn-outline-primary"
                  onClick={() => context.Decrement(item.id)}  
                >
                  -
                </span>
              </div>
              <span className="card-text">Quantity: {item.count}</span>
              <br />
              <button
                className="btn btn-outline-primary"
                onClick={() => context.RemoveCart(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Products;
