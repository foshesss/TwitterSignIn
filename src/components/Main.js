import React from "react";

const Main = () => (
    <div className='main-background'>
        <section className='main-container'>
            <div className='bumper exit-bar'>
                <img
                    alt=""
                    src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/twitter-icon-18-256.png"
                />
            </div>
            <div className='login-prompt'>
                <h2>Sign in to Twitter</h2>
                <button className="login-button">Sign in with Google</button>
                <button className="login-button">Sign in with Apple</button>
                <p className="login-or">or</p>
                <input className='login-textbox' type="text" placeholder="Phone, email, or username" />
                <button className="login-button">Next</button>
                <button className="login-button" id="forgot-password">Forgot password?</button>
                <span className='sign-up-prompt'>
                    <p>Don't have an account?</p>
                    <a href="https://twitter.com/i/flow/signup">
                        Sign up.
                    </a>
                </span>
            </div>
        </section>
    </div>
);

export default Main;

