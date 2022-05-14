import React from 'react';
import { Link } from 'react-router-dom';
const Register = () => {
    return (
        <div className='login-register-container'>
            <form className="form-signin">
                <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
                <h1 className="h3 mb-3 font-weight-normal">Register</h1>

                <div className="form-group">
                    <input type="text" id="inputName" className="form-control" placeholder="Name and Surname" required="" autoFocus="" />
                </div>

                <div className="form-group mt-2">
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus="" />
                </div>
                <div className="form-group mt-2">
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
                </div>
                <div className="form-group mt-2">
                    <input type="password" id="inputAgainPassword" className="form-control" placeholder="Again Password" required="" />
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
                <Link to='/Login' className='mt-2' style={{display:"block",textDecoration:'none',color:'grey'}}>Login ?</Link>
                <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
            </form>
        </div>
    )
};
export default Register;