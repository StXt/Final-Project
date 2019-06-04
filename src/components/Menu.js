import React from 'react';
import {history} from './react-history';
import { Redirect } from 'react-router-dom';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.menuIcon = (
            <article className="menu-icon closed" onClick={this.toggleMenu}>
                <div className="menu-line"></div>
                <div className="menu-line"></div>
                <div className="menu-line"></div>
            </article>
        )

        this.wideMenu = (
            <nav id="menu" className="menuContainer">
                <article className="menu-icon" onClick={this.toggleMenu}>
                    <div className="menu-line"></div>
                    <div className="menu-line"></div>
                    <div className="menu-line"></div>
                </article>
                <ul onClick={this.changePage}>
                    <li className="liItem">Головна</li>
                    <li className="liItem">Профіль</li>
                    <li className="liItem">Тести</li>
                    <li className="liItem">Статистика</li>
                    <li className="liItem">Про нас</li>
                </ul>
            </nav>
        );

        this.state = {
            isOpened: true,
            moveTo: null
        }
    }

    toggleMenu = () => {
        this.setState({
            isOpened: !this.state.isOpened
        })
    }

    changePage = (e) => {
        let target = e.target;
        console.dir(target);
        while (target.className !== 'menuContainer') {
            if (target.className === 'liItem') {
                
                
                if(target.parentNode.children[0] === target) {
                    if (document.location.href.substr(21) === "/") {
                        return
                    }
                    history.push(document.location.href.substr(21));
                    this.setState({moveTo: 'home'});
                }

                if(target.parentNode.children[1] === target) {
                    if (document.location.href.substr(21) === "/profile") {
                        return
                    }
                    history.push(document.location.href.substr(21));
                    this.setState({moveTo: 'profile'});
                }

                if(target.parentNode.children[2] === target) {
                    if (document.location.href.substr(21) === "/test-set") {
                        return
                    }
                    history.push(document.location.href.substr(21));
                    this.setState({moveTo: 'test-set'});
                }
                if(target.parentNode.children[3] === target) {
                    if (document.location.href.substr(21) === "/stats") {
                        return
                    }
                    history.push(document.location.href.substr(21));
                    this.setState({moveTo: 'stats'});
                }
                if(target.parentNode.children[4] === target) {
                    if (document.location.href.substr(21) === "/about-us") {
                        return
                    }
                    history.push(document.location.href.substr(21));
                    this.setState({moveTo: 'about-us'});
                }
            }
            target = target.parentNode;
        }
    }

    render() {      
        if (this.state.isOpened === false) {
            return this.menuIcon;
        }

        if (this.state.moveTo === 'home') {
            
            return (
                <Redirect to="/" />
            )
        }

        if (this.state.moveTo === 'profile') {
            return (
                <Redirect to="/profile" />
            )
        }
        if (this.state.moveTo === 'test-set') {
            return (
                <Redirect to="/test-set" />
            )
        }
        if (this.state.moveTo === 'stats') {
            return (
                <Redirect to="/stats" />
            )
        }
        if (this.state.moveTo === 'about-us') {
            return (
                <Redirect to="/about-us" />
            )
        }


        return this.wideMenu;
    }
}