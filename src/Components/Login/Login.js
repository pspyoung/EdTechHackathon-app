import React from "react";

function Login() {
  return (
    <div>
      <form action="http://localhost:3000/login" method="POST">
        <div className="d-flex align-items-center mb-3 pb-1">
          <span className="h1 fw-bold mb-0">SOAR Register</span>
        </div>

        <div className="form-outline mb-2">
          <input
            type="email"
            name="email"
            className="form-control form-control-lg"
            required
          />
          <label className="form-label" for="form2Example17">
            Email address
          </label>
        </div>

        <div className="form-outline mb-2">
          <input
            name="password"
            type="password"
            className="form-control form-control-lg"
            required
          />
          <label className="form-label" for="form2Example27">
            Password
          </label>
        </div>


        <div className="pt-1 mb-4">
          <button className="btn btn-dark btn-lg btn-block" type="submit">
            Login
          </button>
        </div>

        <a className="small text-muted" href="#!">
          Forgot password?
        </a>
        <p className="mb-2 pb-lg-2">
          Need an account? <a href="/signup">Sign Up here</a>
        </p>
        <div className="mb-2 pb-lg-2">
          <a href="/" className="text-decoration-none ">
            <i className="bi bi-arrow-left-circle-fill">
              {" "}
              <i className="bi bi-house-fill">Go Back Home</i>
            </i>
          </a>
        </div>
        {/* <a href="#!" className="small text-muted">Terms of use.</a>
                    <a href="#!" class="small text-muted">Privacy policy</a> */}
      </form>
    </div>
  );
}

export default Login;
