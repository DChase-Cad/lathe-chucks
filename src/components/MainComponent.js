import React from 'react';
import HomeComponent from './HomeComponent';
import Header from './Header'
import Footer from './Footer'
import { Switch, Route, Redirect } from 'react-router-dom';
import BisonMain from './Bison/BisonMainComponent';


export default function MainComponent() {
    return (

        <div className="mx-auto main-bg">

            <Header />

            <div className="container home-width">
                <Switch>
                    <Route path='/home' component={HomeComponent} />
                    <Route path='/bison' component={BisonMain} />
                    <Redirect to='/home' />
                </Switch>
            </div>

            <Footer />
       

        </div>
    )

}
