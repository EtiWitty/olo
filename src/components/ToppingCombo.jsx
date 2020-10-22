import React from 'react';
import axios from 'axios';


class ToppingCombo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            results: []
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    handleSubmit(event) {
        event.preventDefault();
    //   console.log('The button was clicked.');
        const proxyurl = "https://cors-anywhere.herokuapp.com/"; // by https://stackoverflow.com/a/43881141
        const url = "https://www.olo.com/pizzas.json";
        
        axios.get(`${proxyurl}${url}`)
            .then((res) => {
                console.log(res);
                this.setState({ results: res.data});
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return(
            <div>
                <form>
					<input type="submit" value="Search Toppings" onClick={this.handleSubmit}/>
                </form>
            </div>
        )
    }
}

export default ToppingCombo;