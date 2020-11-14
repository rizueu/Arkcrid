const Header = (props) => {
    return (
        <div className="container text-center">
            <h2>{props.title}</h2>
            <hr style={{ borderBottom: '2px solid black', width: '40px' }} className="mb-4"/>
        </div>
    )
}

export default Header;