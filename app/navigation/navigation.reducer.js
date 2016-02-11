import {Actions} from 'react-native-router-flux';

export default function navigation(state = {}, action) {
    switch (action.type) {
        case Actions.AFTER_ROUTE:
        case Actions.AFTER_POP:
        case Actions.AFTER_DISMISS:
            return action.route;
        default:
            return state;
    }
}