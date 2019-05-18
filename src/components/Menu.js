import React from 'react';
// Має повертати список із того що попало в пропси
class Menu extends React.Component {
    render() {
        return (
            <nav id="menu">
                <ul>
                    <li>Головна</li>
                    <li>Профіль</li>
                    <li>Тести</li>
                    <li>Статистика</li>
                    <li>Про нас</li>
                    <li>Налаштування</li>
                    <li>Зв'язатися з нами</li>
                </ul>
            </nav>
        );
    }
}

export default Menu;