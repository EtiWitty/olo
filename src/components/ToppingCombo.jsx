import React from 'react';
import axios from 'axios';
import { getTopCombos } from "../lib/combos";
import { OLO_JSON_URL } from '../lib/config';
import { PROXY_URL } from '../lib/config';

class ToppingCombo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            topCombos: [], // Array of { rank, toppings (string[]), frequency }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    handleSubmit(event) {
        event.preventDefault();
        
        axios.get(`${PROXY_URL}${OLO_JSON_URL}`)
            .then((res) => {
                console.log(res);
                const topCombos = getTopCombos(res.data);
                this.setState({ topCombos: topCombos });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return(
            <div>
                <form>
                    <input 
                        className="submit-btn"
                        type="submit" 
                        value="Search Toppings" 
                        onClick={this.handleSubmit}/>
                </form>

                <table className="pizza-results">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Toppings</th>
                            <th>Frequency</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.topCombos.map((combo, i) => (
                            <tr key={i}>
                                <td>{combo.rank}</td>
                                <td>
                                    <ul>
                                    { combo.toppings.map((topping, j) => (
                                        <li key={j}>{topping}</li>
                                    ))}
                                    </ul>
                                </td>
                                <td>{combo.frequency}</td>
                            </tr>
                            ))
                        } 
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ToppingCombo;