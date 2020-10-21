import React from 'react';

class ToppingCombo extends React.Component{
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
      event.preventDefault();
      console.log('The button was clicked.');
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