import { Route, Navigate } from "react-router-dom";

export default function PrivateRoute() {
  const isAuth = JSON.parse(localStorage.getItem("isAuth"));
}
