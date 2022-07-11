import { Link } from "react-router-dom"

export const Login = () => {
    return (
        <div className="container">
            <h1>Login Page</h1>
            <Link to="/register"><button className="btn btn-primary">Register</button></Link>
            <Link to="/"><button className="btn btn-danger">Home</button></Link>
        </div>
    )
}