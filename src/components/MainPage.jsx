import React from 'react';
import ToppingCombo from '../components/ToppingCombo';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        // console.log(111);
    }

    render() {
        return (
            // <h2>Hello World!</h2>
            <div>
                <ToppingCombo />
            </div>
        )
    }
}

export default MainPage;