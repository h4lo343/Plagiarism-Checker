import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { RootState, ReduxDispatch } from "../redux/store"

export const useJwt = () => {
  const selector: TypedUseSelectorHook<RootState> = useSelector
  const jwtToken = selector((state) => {return state.authentication.jwtToken})
  return jwtToken
}