import React from 'react';
import { Helmet } from 'react-helmet';
import './Tracker.scss';

function Tracker() {
    return (
        <React.Fragment>
            <Helmet>
                <title>Reading Goals - Tracker</title>
            </Helmet>
            <div>
                <h1>Tracker</h1>
            </div>
        </React.Fragment>
    );
}

export default Tracker;