import React from 'react';

export default function Login() {
  return (
    <div className="container mt-4 d-flex justify-content-center">
      <div className="card p-4">
        <h2 className="text-center mb-4">Login</h2>
        <form className="row g-3">
          <div className="col-12">
            <label htmlFor="validationCustomUsername" className="form-label">Username</label>
            <div className="input-group">
              <span className="input-group-text" id="inputGroupPrepend">@</span>
              <input type="text" className="form-control" id="validationCustomUsername" placeholder="Choose a username" aria-describedby="inputGroupPrepend" required />
            </div>
          </div>
          <div className="col-12">
            <label htmlFor="validationCustomPassword" className="form-label">Password</label>
            <input type="password" className="form-control" id="validationCustomPassword" placeholder="Enter your password" required />
          </div>
          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
              <label className="form-check-label" htmlFor="invalidCheck">
                Agree to terms and conditions
              </label>
            </div>
          </div>
          <div className="col-12">
            <button className="btn btn-primary w-100" type="submit">Login</button>
          </div>
        </form>
        <div className="mt-3 text-center">
          <p>Don't have an account? <a href="/sign">Sign Up</a></p>
        </div>
      </div>
    </div>
  );
}
