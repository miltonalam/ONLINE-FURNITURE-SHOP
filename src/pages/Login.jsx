import Footer from "../component/Footer/Footer";

const Login = () => {
    return (
        <>
            <div className="login-signup-wrapper">
                <div className="login-signup-card">
                    <h2>Log in</h2>
                    <form>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" required placeholder="Enter your email" />
                        
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" required placeholder="Enter your password" />
                        
                        <button type="submit">Sign In</button>
                        
                        <div className="form-alt">
                            Don't have an account? <a href="/signup">Sign Up</a>
                        </div>
                    </form>
                </div>  
            </div>
            <Footer />
        </>
    );
};

export default Login;
