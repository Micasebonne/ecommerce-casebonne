function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">der Zauberladen</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pociones</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Varitas</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Escobas</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Golosinas</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Mascotas</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default NavBar;