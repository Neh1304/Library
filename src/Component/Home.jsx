import React from 'react';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="row g-3">
                            <div className="col-12">
                                <div style={{color: 'white'}} className="col-12">
                                    <h1>WELCOME</h1>
                                </div>
                                <div style={{backgroundColor: 'gray'}} className="card">
                                    <div className="card-body">
                                        Welcome to The Book Nokk – your whimsical gateway to literary adventures in the heart of Quirkville! Nestled between the enchanting Tea Time Café and the vibrant Artisan Alley, The Book Nokk is not just a library; it’s a haven for book lovers, dreamers, and curious minds.
                                    </div>
                                </div>
                                <div style={{color: 'white'}} className="col-12">
                                    <h1>OUR VISION</h1>
                                </div>
                                <div style={{backgroundColor: 'gray'}} className="card">
                                    <div className="card-body">
                                        The purpose of The Book Nokk app is to create a vibrant, user-friendly platform that brings the magic of Quirkville’s literary world directly to your fingertips. It aims to inspire and connect readers by offering seamless access to a diverse collection of books, audiobooks, and digital resources, all customized to individual reading preferences. The app fosters a sense of community through interactive features like book clubs, discussion forums, and virtual events with authors and literary experts. By making reading more accessible and enjoyable, The Book Nokk seeks to enrich lives with the joy of stories and the inspiration of new ideas, transforming everyday moments into delightful literary adventures.
                                    </div>
                                </div>
                                <div style={{color: 'white'}} className="col-12">
                                    <h1>OUR FEATURES</h1>
                                </div>
                                <div style={{backgroundColor: 'gray'}} className="card">
                                    <div className="card-body">
                                        <div className="card mb-2" style={{backgroundColor: 'gray'}}>
                                            <div className="card-body">
                                                Seamless Browsing: Explore our extensive catalog, from classic literature to the latest bestsellers, all organized with a sprinkle of Quirkville charm.
                                            </div>
                                        </div>
                                        <div className="card mb-2" style={{backgroundColor: 'gray'}}>
                                            <div className="card-body">
                                                Personalized Recommendations: Let us curate your next read based on your unique tastes and reading habits.
                                            </div>
                                        </div>
                                        <div className="card mb-2" style={{backgroundColor: 'gray'}}>
                                            <div className="card-body">
                                                Community Connections: Join book clubs, participate in lively discussions, and connect with fellow Quirkville bibliophiles.
                                            </div>
                                        </div>
                                        <div className="card mb-2" style={{backgroundColor: 'gray'}}>
                                            <div className="card-body">
                                                Virtual Events: Attend author talks, poetry readings, and workshops, all from the comfort of your quirky nook.
                                            </div>
                                        </div>
                                        <div className="card" style={{backgroundColor: 'gray'}}>
                                            <div className="card-body">
                                                Easy Borrowing: Reserve and renew books with ease, and get notified when your next great read is ready for pickup.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;