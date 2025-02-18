function Product(props) {
  return (
    <div>
      <img src={props.image} alt=""></img>
      <span>{props.price}</span>
      <p>{props.desription}</p>
      <button className="btn btn-primary">BUY</button>
    </div>
  );
}
export default Product;
