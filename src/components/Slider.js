import React, { Component } from 'react';
import arrowLeft from '../images/slider/arrowLeft.png';
import arrowRight from '../images/slider/arrowRight.png';


export default class Slider extends Component {
    scrollSlideLeft = () => {
        let slider = document.getElementsByClassName('outerContainer')[0];
        slider.scrollLeft -= 400;
        console.dir(slider);
        console.log('left');
    }

    scrollSlideRight = () => {
        let slider = document.getElementsByClassName('outerContainer')[0];
        slider.scrollLeft += 400;
        console.log('right');
    }
    
    render() {
        return (
            <div className="sliderContainer">
                <div className="arrow" onClick={this.scrollSlideLeft}>
                    <img src={arrowLeft} alt="arrow left"/>
                </div>
                <div className="outerContainer">
                    <div className="middleContainer">
                        <div className="innerContainer">
                            
                        </div>
                    </div>
                </div>
                <div className="arrow" onClick={this.scrollSlideRight}>
                <img src={arrowRight} alt="arrow right" />
                </div>
            </div>
        )
    }
}