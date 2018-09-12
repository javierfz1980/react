import React from 'react';

const ValidationComponent = (props) => {
    const message = props.valid ? 'text long enough' : 'text no long enough';
    return <span>{message}</span>

    // optional jsx -> ? :  way...
    //return <span>{props.valid ? 'text long enough' : }</span>;
};

export default ValidationComponent;