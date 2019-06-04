import React from 'react';
import { Redirect } from 'react-router-dom';

export default function countdown (whatLeft) {
    let mins = new Date(whatLeft).getMinutes();
    let secs = new Date(whatLeft).getSeconds();
    
    if(mins <= 0 && secs <=0) {
        localStorage.setItem('timeOver', true);
        return (
            <Redirect to="/test-result"/>
        )
    }
    if (mins < 10) {
        mins = '0' + mins;
    }
    if (secs < 10) {
        secs = '0' + secs;
    }
    return `${mins}:${secs}`;
}

