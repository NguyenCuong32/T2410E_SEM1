function Item() {
  return (
    <div className="col-4">
      <div className="card border-opacity-50 m-3 border-0">
        <div className="card-header bg-light border-0">
          <h5>Player Information</h5>
        </div>
        <div className="card-body d-flex justify-content-center">
        {/* <img src="images/hanoi03.jpg"></img> */}
          <p className="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum fuga
            qui, mollitia error neque ipsa blanditiis, ea beatae, harum
            asperiores autem! Consequatur quasi doloribus odio numquam iusto
            veritatis, quo atque.
          </p>
        </div>
        <div className="card-footer border-0 d-flex justify-content-end">
          <div className="btn btn-success m-2">Add</div>
          <div className="btn btn-danger m-2">Cancel</div>
        </div>
      </div>
    </div>
  );
}
export default Item;
