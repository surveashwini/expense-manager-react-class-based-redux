import { ADD_EXPENSE } from '../Constants/action-types';

export function addExpense(payload) {
    return {type: ADD_EXPENSE, payload};
}