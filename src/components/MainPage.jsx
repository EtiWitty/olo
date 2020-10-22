import React from 'react';
import ToppingCombo from '../components/ToppingCombo';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="back-image">
                <ToppingCombo />
            </div>
        )
    }
}

export default MainPage;