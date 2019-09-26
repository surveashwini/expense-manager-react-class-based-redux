import { EDIT_EXPENSE } from '../Constants/action-types';

export function editExpense(payload) {
    return {type: EDIT_EXPENSE, payload};
}