const Signup = () => {
    return (
        <>
            <div className="login-signup-wrapper">
                <div className="login-signup-card">
                    <h2>Create Account</h2>
                    <form>
                        <label htmlFor="fullname">Full Name</label>
                        <input type="text" id="fullname" required placeholder="Enter your full name" />

                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" required placeholder="Enter your email" />

                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" required placeholder="Enter your phone number" />

                        <label htmlFor="address">Delivery Address</label>
                        <input type="text" id="address" required placeholder="Enter your address" />

                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" required placeholder="Enter your password" />

                        <label htmlFor="confirmpassword">Confirm Password</label>
                        <input type="password" id="confirmpassword" required placeholder="Confirm your password" />

                        <button type="submit">Create Account</button>

                        <div className="form-alt">
                            Already have an account? <a href="/login">Sign In</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Signup;
