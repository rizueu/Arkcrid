const Jumbotron = (props) => {
    return (
        <div className="jumbotron text-center mt-5">
            {props.children}
        </div>
    )
}

export default Jumbotron;