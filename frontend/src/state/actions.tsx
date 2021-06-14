import { IAction, EActionType, IActionUpdatePersistence } from './types';

export function updatePersistentData(
	key: string,
	value: unknown
): IActionUpdatePersistence {
	return {
		type: EActionType.UPDATE_PERSISTENT_DATA,
		data: {
			key: key,
			value: value
		}
	};
}

export function clearPersistence(): IAction {
	return {
		type: EActionType.CLEAR_PERSISTENT_DATA
	};
}
