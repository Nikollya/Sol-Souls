import "./Header.scss"
import {useState} from "react";
import {Link} from "react-router-dom";

export default function Header() {
    const [isActive, setActive] = useState<boolean>(false);

    const handleToggle = () => {
        setActive(!isActive);
    }
    return (
            <header className="header">
                <div className="container header__container">
                    <button className="menu__button">Marketplace</button>
                    <div className="header__menu menu">
                        <div className={isActive ? "menu__icon menu _active" : "menu__icon menu"} onClick={handleToggle}>
                            <span></span>
                        </div>
                        <nav className={isActive ? "menu__body _active" : "menu__body"}>
                            <ul className="menu__list">
                                <li><a href="#" className="menu__link">Home</a></li>
                                <li><a href="#" className="menu__link">Fusion Preview</a></li>
                                <li><a href="#" className="menu__link">Roadmap</a></li>
                                <li><a href="#" className="menu__link">Rarity Ranking</a></li>
                                <li><a href="#" className="menu__link">Attributes</a></li>
                                <li><a href="#" className="menu__link">Mint Stats</a></li>
                                <li><a href="#" className="menu__link">FAQ</a></li>
                            </ul>

                        </nav>

                    </div>

                </div>
            </header>
    )
}
