import React, { useContext } from "react";
import { BookContext } from "../App";

function Cart() {
  const data = useContext(BookContext);
  console.log(data);
  
  const bookDetails = data.state.bookList;

  return (
    <div className="container">
      <div className="row">
        {bookDetails.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div className="card">
              <img
                src={item.img}
                alt={item.title}
                className="img-fluid ratio"
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">Price: ${item.price.toFixed(2)}</p>
                <button className="btn btn-outline-primary" onClick={() => data.AddtoCart(item)}>Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
