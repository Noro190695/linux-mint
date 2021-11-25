import React from "react";
import menuStyle from './menu.module.scss';
import { Icons } from "../../images/imports-exports/images";
import { useAppDispatch } from "../hooks/ReduxHooks";
import { closeMenuAction } from "../../store/actions/menuAction";
const Menu: React.FC = () => {
    const dispatch = useAppDispatch();
    const closeMenu = () => {
        dispatch(closeMenuAction())
    }
    const closeWindow = () =>{
        window.close();
    }
    return (
        <>
            <div className={menuStyle.overlay} onClick={closeMenu}></div>
            <section className={menuStyle.menu}>
                <div className={menuStyle.menu__content}>
                    <div className={menuStyle.menu__left}>
                        <div>
                            <img src={Icons.About} alt="about" />
                            <img src={Icons.Skills} alt="skils" />
                            <img src={Icons.Settings} alt="settings" />
                        </div>
                        <div>
                            <img src={Icons.ShutDown} alt="shoudown" onClick={closeWindow} />
                        </div>
                    </div>
                    <div className={menuStyle.menu__right}>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Menu;