import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class NewRoute extends React.Component {

    render() {
        return (
            <form onSubmit={this.props.handleSubmit} onReset={this.props.handleReset}>
                <div className="form">
                <label className="input-labels">
                    Route Name: 
                    <input name="name" className="input-fields" type="text" required/>
                </label>
                <label id="input-labels">
                    Route Rating: 
                    <select name="rating" className="input-fields" required>
                        <option value=""></option>
                        <option value="5.6">5.6</option>
                        <option value="5.7">5.7</option>
                        <option value="5.8">5.8</option>
                        <option value="5.9">5.9</option>
                        <option value="5.10">5.10</option>
                        <option value="5.11">5.11</option>
                        <option value="5.12">5.12</option>
                        <option value="5.13">5.13</option>
                        <option value="5.14">5.14</option>
                    </select>
                </label>
                <label id="input-labels">
                    Attempts: 
                    <input name="attempts" className="input-fields" type="number" min="0" required/>
                </label>
                <label id="input-labels">
                    Points Earned: 
                    <input name="earned" className="input-fields" type="number" min="0" required/>
                </label>
                <label id="input-labels">
                    Total Points: 
                    <input name="totalPoints" className="input-fields" type="number" min="0" required/>
                </label>
                </div>
                <div className="buttons">
                    <input type="submit" className="greenButtons" value="Save" />
                    <input type="reset" className="redButtons" value="Cancel" />
                </div>
            </form>
        );
    };
};

class League extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            routes: [],
            isShowing: false
        };
    };

    addRoute() {
        this.setState({isShowing: !this.state.isShowing});
    };

    removeRoute() {
        if(this.state.routes.length > 0) {
            const routes = this.state.routes.slice();
            routes.pop();
            const newRoutes = routes;
            this.setState({routes: newRoutes});
        };
    };

    handleSubmit (event) {
        event.preventDefault();

        const routes = this.state.routes.slice();
        const newRoute = {name: event.target.name.value,
        rating: event.target.rating.value,
        attempts: event.target.attempts.value,
        pointsEarned: event.target.earned.value,
        totalPoints: event.target.totalPoints.value};

        const newRoutes = routes.concat(newRoute);
        this.setState({routes: newRoutes});
        this.setState({isShowing: !this.state.isShowing});
        
    };

    handleReset (event) {
        event.preventDefault();

        event.target.name.value = "";
        event.target.rating.value = "";
        event.target.attempts.value = "";
        event.target.earned.value = "";
        event.target.totalPoints.value = "";

        this.setState({isShowing: !this.state.isShowing});
    };

    formatTable() {
        let formatedHeader = (
            <tr>
                <th>Route Name</th>
                <th>Route Rating</th>
                <th>Number of Attempts</th>
                <th>Points</th>
            </tr>
        );
        
        const formatedRoutes = this.state.routes.length > 0 ? this.state.routes.map((route) => {
            const { name, rating, attempts, pointsEarned, totalPoints } = route;
            return (
                <tr key={name}>
                    <td>{name}</td>
                    <td>{rating}</td>
                    <td>{attempts}</td>
                    <td>{pointsEarned}/{totalPoints}</td>
                </tr>
            );
        }) : '';

        return (
        <tbody>
            {formatedHeader}
            {formatedRoutes}
        </tbody>);
    };

    render() {
        const newRoute = this.state.isShowing ? <NewRoute handleSubmit = {this.handleSubmit.bind(this)} handleReset = {this.handleReset.bind(this)}/> : '';
        const addButton = this.state.isShowing ? '' : <button className="greenButtons" onClick={this.addRoute.bind(this)}>Add Route</button>;
        const removeButton = this.state.isShowing ? '' : <button className="redButtons" onClick={this.removeRoute.bind(this)}>Remove Route</button>;

        return (
            <div className="league">
                <table id="league-routes">
                    {this.formatTable()}
                </table>
                {newRoute}
                <div className="buttons">
                    {addButton}
                    {removeButton}
                </div>
            </div>
        );
    };
};

ReactDOM.render(<League />, document.getElementById('root'));