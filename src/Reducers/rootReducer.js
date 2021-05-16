import {
  ADD_EXPENSE,
  DELETE_EXPENSE,
  EDIT_EXPENSE,
  AUTHORIZE_USER,
} from "../Constants/action-types";

const initialState = {
  data: [
    {
      expenseId: 0,
      expenseName: "Groceries",
      expenseAmt: "500",
      expenseDate: "2019-12-12",
    },
  ],
  auth: { isAuthenticated: false },
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case AUTHORIZE_USER:
      const authorizedState = { ...state };
      authorizedState["auth"] = {};
      authorizedState["auth"]["isAuthenticated"] = action.payload;
      return authorizedState;
    case ADD_EXPENSE:
      const addState = { ...state };
      addState.data[addState.data.length] = {
        expenseId: addState.data.length,
        expenseName: action.payload.expenseName,
        expenseAmt: action.payload.expenseAmt,
        expenseDate: action.payload.expenseDate,
      };
      return addState;
    case DELETE_EXPENSE:
      const deleteState = { ...state };
      deleteState.data = deleteState.data.filter(
        (item) => item.expenseId !== action.payload.expenseId
      );
      return deleteState;
    case EDIT_EXPENSE:
      const updatedData = action.payload;
      const editState = { ...state };
      const index = state.data.findIndex(
        (expense) => expense.expenseId === action.payload.expenseId
      );
      editState.data[index] = updatedData;
      return editState;
    default:
      return state;
  }
}

export default rootReducer;
