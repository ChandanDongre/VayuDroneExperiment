import React from 'react';

function Welcome({ navigateTo }) {
    return (
        <div id="welcome" className="page flex flex-col items-center justify-center text-center">
            <img src="https://cdn-icons-png.flaticon.com/512/1531/1531344.png" alt="Drone" className="w-32 h-32 mb-6" />
            <h1>Index Page</h1>
            <h2>Welcome to VayuDrone</h2>
            <p>Helping farmers use drone power for better, smarter agriculture</p>
            <button onClick={() => navigateTo('login')} className="btn btn-primary btn-animated">
                Get Started
            </button>
        </div>
    );
}

export default Welcome;
