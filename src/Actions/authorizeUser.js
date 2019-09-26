import { AUTHORIZE_USER } from '../Constants/action-types';

export function authorizeUser(payload) {
    return {type: AUTHORIZE_USER, payload};
}