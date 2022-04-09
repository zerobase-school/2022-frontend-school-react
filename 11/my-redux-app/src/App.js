import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../src/modules/account/api";
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
} from "./modules/account/account";

function App() {
  const account = useSelector((state) => state.account);
  const { loading, name, email } = account;
  const dispatch = useDispatch();

  const handleClick = async () => {
    dispatch(fetchUserRequest());
    try {
      const res = await fetchUser();
      dispatch(fetchUserSuccess({ name: res.name, email: res.email }));
    } catch {
      dispatch(fetchUserFailure());
    }
  };

  return (
    <div className="App">
      <button onClick={handleClick}>User 정보 가져오기</button>
      {loading ? (
        <p>loading...</p>
      ) : name && email ? (
        <>
          <p>이름 : {name}</p>
          <p>이메일 : {email}</p>
        </>
      ) : null}
    </div>
  );
}

export default App;
