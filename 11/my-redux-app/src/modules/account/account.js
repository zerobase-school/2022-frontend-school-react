import { fetchUser } from "./api";

// 액션
const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

// 액션 생성 함수
export const fetchUserRequest = () => ({
  type: FETCH_USER_REQUEST,
});

export const fetchUserSuccess = ({ name, email }) => ({
  type: FETCH_USER_SUCCESS,
  payload: { name, email },
});

export const fetchUserFailure = () => ({
  type: FETCH_USER_FAILURE,
});

// TODO: thunk 함수 만들기
export const fetchUserThunk = () => {};

const initialState = {
  loading: false,
  name: "",
  email: "",
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        loading: false,
        name: action.payload.name,
        email: action.payload.email,
      };
    case FETCH_USER_SUCCESS:
      return initialState;
    default:
      return state;
  }
}
