// import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// import Spinner from './components/Spinner';
// import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
    state = {
        progress: 0
    }
    setProgress = (progress) => {
        this.setState({ progress: progress })
    }

    render() {
        return (
            <div>
                <Router>
                    <LoadingBar
                        color='#f11946'
                        progress={this.state.progress}

                    />
                    <Navbar />


                    <Routes>
                        <Route exact path="/" element={<News setProgress={this.setProgress} pageSize={this.pageSize} country="us" category="general" />}>

                        </Route>

                        <Route exact path='/business' element={<News setProgress={this.setProgress} pageSize={this.pageSize} country="us" category="business" />}>
                        </Route>
                        <Route exact path='/entertainment' element={<News setProgress={this.setProgress} pageSize={this.pageSize} country="us" category="entertainment" />}>
                        </Route>
                        <Route exact path='/general' element={<News setProgress={this.setProgress} pageSize={this.pageSize} country="us" category="general" />}>
                        </Route>
                        <Route exact path='/health' element={<News setProgress={this.setProgress} pageSize={this.pageSize} country="us" category="health" />}>
                        </Route>
                        <Route exact path='/science' element={<News setProgress={this.setProgress} pageSize={this.pageSize} country="us" category="science" />}>
                        </Route>
                        <Route exact path='/sports' element={<News setProgress={this.setProgress} pageSize={this.pageSize} country="us" category="sports" />}>
                        </Route>
                        <Route exact path='/technology' element={<News setProgress={this.setProgress} pageSize={this.pageSize} country="us" category="technology" />}>
                        </Route>

                    </Routes>

                </Router>
            </div>
        )
    }
}






