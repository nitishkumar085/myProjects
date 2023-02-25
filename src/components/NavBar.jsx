function NavBar()
{
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{position:"sticky"}}>
            <div className="container-fluid">
                    <span className="navbar-brand">MovInfo</span>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
      
            </div>
        </nav>
    )
}

export default NavBar