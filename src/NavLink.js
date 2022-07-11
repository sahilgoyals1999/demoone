const NavLink = (props) => {
    return (
        <li class="nav-item">
          <button className="btn"><a class="nav-link" href="#">{props.name}</a></button>
        </li>
    )
}

export default NavLink;