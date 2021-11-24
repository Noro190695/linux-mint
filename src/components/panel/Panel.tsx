import React, { useState, useEffect } from "react";
import panelStyle from './panel.module.scss';
import { Icons } from "../../images/imports-exports/images";
import moment from "moment";
import { useAppDispatch } from "../hooks/ReduxHooks";
import { openMenuAction } from "../../store/actions/menuAction";
const Panel: React.FC = ({ children }) => {
    const dispatch =  useAppDispatch();
    const [date, setDate] = useState(moment().format('HH:mm:ss'));
    const openMenu = () => {
        dispatch(openMenuAction())  
    }
    
    useEffect(() => {
        const interval = setInterval(() => {
            setDate(moment().format('HH:mm:ss'))
        })
        return () => {
            clearInterval(interval);
        }
    }, [date])
    return (
        <div className={panelStyle.panel}>
            <div className={panelStyle.panel__logo} onClick={openMenu}>
                <img src={Icons.LinuxMint} alt="Icon" />
            </div>
            <div className={panelStyle.panel__content}>

            </div>
            <div className={panelStyle.panel__applets}>
                <div className=""></div>
                <div className={panelStyle.date}>
                    <span>{date}</span>
                </div>
            </div>
        </div>
    )
}

export default Panel;