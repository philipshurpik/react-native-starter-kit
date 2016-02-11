import {router} from 'actions';

export default function navigation(state = {}, action) {
    switch (action.type) {
        case router.AFTER_ROUTE:
        case router.AFTER_POP:
        case router.AFTER_DISMISS:
            return action.route;
        default:
            return state;
    }
}