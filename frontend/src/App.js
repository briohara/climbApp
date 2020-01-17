import React from 'react';
import * as api from './utilities/help.js';

import AddRoute from './components/AddRoute';
import RoutesList from './components/RoutesList';
import TotalPoints from './components/TotalPoints';

class App extends React.Component {
   
    render() {
        return (
            <>
            <div className="container">
                <RoutesList />
                <div className="row justify-content-between">
                    <AddRoute />
                    <TotalPoints />
                </div>
            </div>
            </>            
        )
    }
}

export default App;