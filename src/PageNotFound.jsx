import React from 'react';
import './PageNotFound.css';
import NotFoundImg from "./assets/pageNotFound.png";
import { Link } from 'react-router-dom';

function PageNotFound() {
    return (  
        <div className='pageNotFound-container'>
            <div>
                <img src={NotFoundImg} alt="" />
                <h1>Page Not Found</h1>
                <div className='go-back'>
                    <Link class="btn btn-outline-primary" to={"/"}>return Home</Link>
                </div>
            </div>
        </div>
    );
}

export default PageNotFound;