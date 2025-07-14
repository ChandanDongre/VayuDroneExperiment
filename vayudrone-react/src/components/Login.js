import React, { useState } from 'react';

function Login({ navigateTo }) {
    const [otp, setOtp] = useState('');

    return (
        <div id="login" className="page flex flex-col items-center justify-center">
            <div className="card w-full max-w-sm">
                <div className="flex items-center mb-6">
                    <button onClick={() => navigateTo('welcome')} className="text-gray-500 hover:text-gray-700 mr-4">
                        <i className="fas fa-arrow-left"></i>
                    </button>
                    <h1>Login</h1>
                </div>

                <div className="mb-4">
                    <label htmlFor="mobile">Mobile Number</label>
                    <div className="flex">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                            +91
                        </span>
                        <input type="tel" id="mobile" placeholder="Enter mobile number" />
                    </div>
                </div>

                <div className="mb-6">
                    <label htmlFor="otp">Enter OTP</label>
                    <div className="flex">
                        <input type="text" id="otp" placeholder="6-digit OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
                        <button id="send-otp" className="btn btn-secondary">
                            Send OTP
                        </button>
                    </div>
                </div>

                <button id="login-btn" className="btn btn-primary w-full" disabled={otp.length !== 6} onClick={() => navigateTo('home')}>
                    Login
                </button>

                <div className="text-center mt-4">
                    <a href="#" onClick={() => navigateTo('register')} className="text-sm text-gray-600 hover:text-gray-800">New user? Sign Up Here</a>
                </div>

                <div className="text-center mt-2">
                    <a href="#" onClick={() => navigateTo('help')} className="text-sm text-gray-500 hover:text-gray-700">Need Help? FAQ/Support</a>
                </div>
            </div>
        </div>
    );
}

export default Login;
