import React from 'react';
import * as api from '../utilities/help.js';

import NewRoute from './NewRoute';

class RoutesList extends React.Component {

    render() {
        return (
            <>
                <div>
                    <table class="table table-hover table-sm">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Rating</th>
                                <th scope="col">Attempts</th>
                                <th scope="col">Potential Points</th>
                                <th scope="col">Points Earned</th>                                                          
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Test</td>
                                <td>5.10</td>
                                <td>2</td>
                                <td>25</td>
                                <td>20</td>
                                <td className="text-right">
                                    <button className="btn btn-light">Edit</button>
                                    <button className="btn btn-light">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Test2</td>
                                <td>5.10</td>
                                <td>2</td>
                                <td>25</td>
                                <td>20</td>
                                <td className="text-right">
                                    <button className="btn btn-light">Edit</button>
                                    <button className="btn btn-light">Delete</button>
                                </td>
                            </tr>
                            <NewRoute />
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}

export default RoutesList;