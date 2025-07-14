import React from 'react';

function Home({ navigateTo }) {
    return (
        <div id="home" className="page">
            <div className="h-full flex flex-col">
                <div className="p-6">
                    <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl p-4 shadow-md mb-6">
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="text-white font-semibold">Today's Weather</h2>
                            <span className="text-white text-sm">July 20, 2024</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <i className="fas fa-sun text-yellow-300 text-4xl mr-3"></i>
                                <div>
                                    <p className="text-white text-3xl font-bold">28°C</p>
                                    <p className="text-white text-sm">Sunny</p>
                                </div>
                            </div>
                            <div className="text-white text-right">
                                <p className="text-sm">Humidity: 65%</p>
                                <p className="text-sm">Wind: 12 km/h</p>
                                <p className="text-sm">Good for drone ops</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <button onClick={() => navigateTo('book-service')} className="bg-white hover:bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm flex flex-col items-center transition duration-300">
                            <div className="bg-green-100 p-3 rounded-full mb-3">
                                <i className="fas fa-drone-alt text-green-600 text-xl"></i>
                            </div>
                            <span className="font-medium text-gray-800">Book Drone Service</span>
                        </button>

                        <button onClick={() => navigateTo('my-bookings')} className="bg-white hover:bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm flex flex-col items-center transition duration-300">
                            <div className="bg-blue-100 p-3 rounded-full mb-3">
                                <i className="fas fa-calendar-check text-blue-600 text-xl"></i>
                            </div>
                            <span className="font-medium text-gray-800">My Bookings</span>
                        </button>

                        <button onClick={() => navigateTo('drone-status')} className="bg-white hover:bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm flex flex-col items-center transition duration-300">
                            <div className="bg-purple-100 p-3 rounded-full mb-3">
                                <i className="fas fa-map-marked-alt text-purple-600 text-xl"></i>
                            </div>
                            <span className="font-medium text-gray-800">Drone Status</span>
                        </button>

                        <button onClick={() => navigateTo('crop-reports')} className="bg-white hover:bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm flex flex-col items-center transition duration-300">
                            <div className="bg-yellow-100 p-3 rounded-full mb-3">
                                <i className="fas fa-seedling text-yellow-600 text-xl"></i>
                            </div>
                            <span className="font-medium text-gray-800">Crop Reports</span>
                        </button>
                    </div>

                    <div className="mb-4">
                        <h3 className="font-semibold text-gray-800 mb-2">Recent Activities</h3>
                        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                            <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-100">
                                <div className="flex items-center">
                                    <div className="bg-green-100 p-2 rounded-full mr-3">
                                        <i className="fas fa-check-circle text-green-600"></i>
                                    </div>
                                    <div>
                                        <p className="font-medium text-sm">Drone Spraying</p>
                                        <p className="text-xs text-gray-500">Completed on July 18</p>
                                    </div>
                                </div>
                                <span className="text-green-600 font-medium text-sm">₹1,200</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                                        <i className="fas fa-clock text-blue-600"></i>
                                    </div>
                                    <div>
                                        <p className="font-medium text-sm">Field Mapping</p>
                                        <p className="text-xs text-gray-500">Scheduled for July 22</p>
                                    </div>
                                </div>
                                <span className="text-blue-600 font-medium text-sm">₹800</span>
                            </div>
                        </div>
                    </div>

                    <div className="mb-4">
                        <h3 className="font-semibold text-gray-800 mb-2">Recommended for you</h3>
                        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="bg-green-100 p-2 rounded-full mr-3">
                                        <i className="fas fa-seedling text-green-600"></i>
                                    </div>
                                    <div>
                                        <p className="font-medium text-sm">Crop Monitoring</p>
                                        <p className="text-xs text-gray-500">Based on your recent activity</p>
                                    </div>
                                </div>
                                <button onClick={() => navigateTo('book-service')} className="btn btn-primary btn-sm">Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Navigation */}
                <div className="bottom-nav mt-auto bg-white border-t border-gray-200 p-3">
                    <div className="flex justify-around">
                        <button onClick={() => navigateTo('home')} className="text-green-600 flex flex-col items-center">
                            <i className="fas fa-home text-xl"></i>
                            <span className="text-xs mt-1">Home</span>
                        </button>
                        <button onClick={() => navigateTo('my-bookings')} className="text-gray-500 flex flex-col items-center">
                            <i className="fas fa-calendar-alt text-xl"></i>
                            <span className="text-xs mt-1">Bookings</span>
                        </button>
                        <button onClick={() => navigateTo('profile')} className="text-gray-500 flex flex-col items-center">
                            <i className="fas fa-user text-xl"></i>
                            <span className="text-xs mt-1">Profile</span>
                        </button>
                        <button onClick={() => navigateTo('help')} className="text-gray-500 flex flex-col items-center">
                            <i className="fas fa-question-circle text-xl"></i>
                            <span className="text-xs mt-1">Help</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
