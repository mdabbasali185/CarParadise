import React from 'react';
import { Link } from 'react-router-dom';
import Mercedes from "../image/Mercedes.png";
import './Home.css'
const Home = () => {
    return (
        <main>
            <div className='row container mt-3 align-items-center'>
                <div className='car col-lg-6 col-md-5'>
                  <img className='img-fluid' src={Mercedes} alt="Mercedes" />  
                </div>
                <div className='col-lg-6 col-md-7'>
                    <h1 className='text-secondary fw-bold'><span className='text-success fst-italic'>Mercedes</span>-AMG-GT-Roadster</h1>
                    <h2 className='text-secondary fw-bold'>Your best Car</h2>
                    <p className=''>The Mercedes-Benz V-Class combines comfort and luxury on a large scale. GUARD: Special protection version of the new S-Class. Unique integrated concept meets highest protection level for civilian vehicles. The new S 680 GUARD 4MATIC.</p>
                    <Link to='/' className='buy-btn'>Buy Now</Link>
                </div>
            </div>
            <div>
                <h1 className='text-center text-secondary fw-bold mt-5'>Customer Review</h1>
            </div>
        </main>
    );
};

export default Home;