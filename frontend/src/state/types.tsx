export interface IState {
	// Enter your typing here.
	persistence: {};
}

/**
 * Action Types
 */

export enum EActionType {
	UPDATE_PERSISTENT_DATA,
	CLEAR_PERSISTENT_DATA
}
export interface IAction {
	type: EActionType;
}

export interface IActionUpdatePersistence extends IAction {
	data: {
		key: string;
		value: unknown;
	};
}
