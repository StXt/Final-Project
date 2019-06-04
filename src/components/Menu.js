import React from 'react';
// Має повертати список із того що попало в пропси
export default class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.menuIcon = (
            <article class="menu-icon closed" onClick={this.toggleMenu}>
                <div class="menu-line"></div>
                <div class="menu-line"></div>
                <div class="menu-line"></div>
            </article>
        )

        this.wideMenu = (
            <nav id="menu">
                <article class="menu-icon" onClick={this.toggleMenu}>
                    <div class="menu-line"></div>
                    <div class="menu-line"></div>
                    <div class="menu-line"></div>
                </article>
                <ul>
                    <li>Головна</li>
                    <li>Тести</li>
                    <li>Результат</li>
                    <li>Статистика</li>

                    <li>Зв'язатися з нами</li>
                </ul>
            </nav>
        );

        this.state = {
            isOpened: true
        }
    }

    toggleMenu = () => {
        this.setState({
            isOpened: !this.state.isOpened
        })
    }

    render() {
        if (this.state.isOpened === false) {
            return this.menuIcon;
        }

        return this.wideMenu;
    }
}