import React from 'react';
import ReactDOM from 'react-dom';

import ProgressBar from './progressbar.jsx';
import TimedComponent from './timed_component.jsx';

class Memory extends TimedComponent {
    render() {

     return (<div><h3>Memory</h3>
            <ProgressBar used={ this.state.data.used } total={ this.state.data.total } free={ this.state.data.free } percent={ this.state.data.percent } />
    </div>
     );

    }
  };

export default Memory;