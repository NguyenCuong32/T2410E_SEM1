function Product(props) {
  return (
    <div className="card widhtcard mt-0">
      <img className="card-img-top p-2" src={props.image} alt=""></img>
      <div className="card-body">
        <h4 className="card-title">{props.name}</h4>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <b>
              <span className="fs-2">$</span>{" "}
              <span className="text-primary fs-2">{props.price}</span>
            </b>
          </div>
          <div className=" m-sm-2">
            <b>
              <span className="fs-2">Sell</span>{" "}
              <span className="text-danger fs-2 text-decoration-line-through">{props.price}</span>
            </b>
          </div>
        </div>
        <p>{props.desription}</p>
      </div>
      <div className="d-flex justify-content-end m-1">
        <button className="btn btn-primary btn-sm p-3 py-2 m-2">
          {" "}
          <strong>BUY</strong>
        </button>
        <button className="btn btn-danger btn-sm p-3 py-2 m-2">
          {" "}
          <strong>Cancle</strong>
        </button>
      </div>
    </div>
  );
}
export default Product;
