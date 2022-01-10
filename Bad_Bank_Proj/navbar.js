function NavBar(){
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">BadBank</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
            <a className="nav-link" href="#withdraw">Withdraw</a>
            <a className="nav-link" href="#deposit">Deposit</a>
            <a className="nav-link" href="#alldata">All Data</a>
            <a className="nav-link" href="#createaccount">Create Account</a>
            <a className="nav-link" href="#login">Login</a>
          </div>
          <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-light" type="submit">Search</button>
      </form>
        </div>
      </div>
    </nav>
    );
}


/* Original Code
 <ul className="nav nav-tabs">
<li className="nav-item">
  <Link className="nav-link" to="/">Home</Link>
</li>
<li className="nav-item">
  <Link className="nav-link" to="/about/">About</Link>
</li>
<li className="nav-item">
  <Link className="nav-link" to="/products">Products</Link>
</li>
</ul> */

/* Edited
 <ul class="nav navbar-dark bg-dark">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#/">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#balance">Balance</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#withdraw">Withdraw</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#deposit">Deposit</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#alldata">All Data</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#createaccount">Create Account</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#login">Login</a>
  </li>
  
</ul> */