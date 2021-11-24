import { Types } from './../types/menutypes';

interface IMenu {
	open: boolean;
}

export interface IMenuAction {
	type: string;
	payload?: any;
}

const initialState: IMenu = {
	open: false
};

export const menuReducer = (state = initialState, actions: IMenuAction) => {
	switch (actions.type) {
		case Types.MENU_OPEN:
            return {...state, open: true}
		case Types.MENU_CLOSE:
            return {...state, open: false}
		default:
			return state;
	}
};
