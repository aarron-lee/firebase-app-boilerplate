import { useCallback, useReducer } from 'react';

const SET = 'SET';
const CLEAR = 'CLEAR';

const formReducer = (state, action) => {
  if (action.type === SET) {
    return { ...state, [action.field]: action.payload };
  }
  if (action.type === CLEAR) {
    return {};
  }
};

function useForm(initialState = {}) {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const updateField = useCallback(
    ({ target }) =>
      dispatch({
        type: SET,
        field: target.name,
        payload: target.value,
      }),
    []
  );
  const clearForm = useCallback(
    () =>
      dispatch({
        type: CLEAR,
      }),
    []
  );
  return { formState: state, updateField, clearForm };
}

export default useForm;
