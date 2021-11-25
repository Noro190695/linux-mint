
import { Types } from "../types/menutypes"


export const openMenuAction = () =>{
   
    return {
        type: Types.MENU_OPEN
    }
}
export const closeMenuAction = ()=>{
    
    
    return {
        type: Types.MENU_CLOSE
    }
}