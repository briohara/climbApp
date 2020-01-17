import React from 'react';
import * as api from '../utilities/help.js';

class NewRoute extends React.Component {
    render() {
        return (
            <>
                <tr>
                    <td><input type="text" placeholder="Name" className="form-control"></input></td>
                    <td>
                        <select className="custom-select custom-select-sm">
                            <option>5.6</option>
                            <option>5.7</option>
                            <option>5.8</option>
                            <option>5.9</option>
                            <option>5.10</option>
                            <option>5.11</option>
                            <option>5.12</option>
                            <option>5.13</option>
                            <option>5.14</option>
                        </select>
                    </td>
                    <td><input type="number" placeholder="Attempts" className="form-control"></input></td>
                    <td><input type="number" placeholder="Potential Points" className="form-control" /></td>
                    <td><input type="number" placeholder="Points Earned" className="form-control"/></td>
                    <td className="text-right">
                        <button className="btn btn-light">Save</button>
                        <button className="btn btn-light">Cancel</button>
                    </td>
                </tr>
            </>
        )
    }
}

export default NewRoute;