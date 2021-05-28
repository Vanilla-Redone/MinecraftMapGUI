import * as React from 'react';
import * as ReactDOM from 'react-dom';

const Index = () => {
    let [counter, setCounter] = React.useState(0);
    
    const updateCounter = () => {
        setCounter(counter + 1);
    }

    return <><p>${counter}</p><button onClick={updateCounter}>increment</button></>
};

/*
    List of maps
    List of servers
        1.16 vanilla
        1.16 paper
*/

ReactDOM.render(<Index />, document.getElementById('app'));