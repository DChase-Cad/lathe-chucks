import React from 'react';
import TopNavbar from './TopNavbar';
import { Link } from 'react-router-dom';





export default function header(){
   
        return (
            <React.Fragment>
                <header className="jumbotron pt-4 rounded-0 header">
                    <div className="container container-fluid">
                        <div className="row justify-content-center">
                            <div className="mx-auto">
                                <Link to='/home' className="text-decoration-none"><h1 className="font-weight-bold text-center">Lathe-Chucks.net</h1></Link>
                                <h2 className="d-none d-md-block text-center">One stop resource for all your lathe chuck needs!</h2>
                            </div>
                        </div>
                    </div>
                </header>
                <TopNavbar />

            </React.Fragment>
        );
    
}

