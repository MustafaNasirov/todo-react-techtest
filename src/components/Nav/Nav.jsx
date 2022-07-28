import "./Nav.scss"

const Nav = ({reset}) => {
    return(
        <div className="nav__container">
            <h1 className="nav__title">To Dos</h1>
            <button className="nav__resetBtn" onClick={reset}>Reset</button>
        </div>
    )
}

export default Nav;