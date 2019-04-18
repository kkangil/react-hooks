import { useEffect, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true, error: false };
    case "CLEAR_LOADING":
      return { ...state, loading: false, error: false };
    case "ERROR":
      return { ...state, loading: false, error: true };
    case "SUCCESS":
      return { ...state, data: action.data, error: false };
    default:
      throw new Error();
  }
};

const usePromise = ({ promise, initialData, arr }) => {
  const [state, dispatch] = useReducer(reducer, {
    data: initialData,
    loading: false,
    error: false
  });

  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    try {
      const data = await promise();
      dispatch({ type: "SUCCESS", data });
    } catch (err) {
      dispatch({ type: "ERROR" });
    }
    dispatch({ type: "CLEAR_LOADING" });
  };

  useEffect(() => {
    fetchData();
  }, arr || []);

  return state;
};

export default usePromise;
