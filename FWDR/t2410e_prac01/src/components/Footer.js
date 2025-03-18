function Footer() {
  return (
    <div>
      <footer className="bg-black py-sm-2 text-white">
        <div className="d-flex justify-content-end p-4">
          <a
            className="btn btn-outline-primary m-2 py-1"
            href="./login.html"
            role="button"
          >
           <span className="text-light">Login</span>
          </a>
          <button type="button" className="btn btn-danger m-2">
            SignUp
          </button>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
