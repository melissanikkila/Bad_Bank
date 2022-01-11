function NavBar(){
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">BadBank</a>
        <div className="navbar-expand" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" title="Click To Return Home" aria-current="page" href="#">Home</a>
            <a className="nav-link"  title="Click To Withdraw" href="#withdraw">Withdraw</a>
            <a className="nav-link" title="Click To Deposit" href="#deposit">Deposit</a>
            <a className="nav-link" title="Click For Account Summary" href="#alldata">All Data</a>
            <a className="nav-link" title="Click To Create Account" href="#createaccount">Create Account</a>
            <a className="nav-link" title="Click To Log In" href="#login">Login</a>
          </div>
        </div>
      </div>
    </nav>
    );
}
