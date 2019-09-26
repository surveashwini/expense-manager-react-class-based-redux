import { DELETE_EXPENSE } from '../Constants/action-types';

export function deleteExpense(payload) {
    return {type: DELETE_EXPENSE, payload};
}