import {router} from 'actions';
import { REHYDRATE } from 'redux-persist/constants'

export default function navigation(state = {}, action) {
    switch (action.type) {
        case router.AFTER_ROUTE:
        case router.AFTER_POP:
        case router.AFTER_DISMISS:
            return {
                ...state,
                routeName: action.route.name
            };
        case REHYDRATE:
            return {
                ...state,
                storageLoaded: true
            };
        default:
            return state;
    }
}