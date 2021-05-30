import { Spin } from "antd";
import * as React from "react";
import Router from "next/router";
import { Dispatch } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { startSpin, stopSpin } from "../store/action";

type Props = {
  children?: JSX.Element;
};

export const CustonSpin: React.FC<Props> = ({ children }) => {
  const dispatch: Dispatch<any> = useDispatch();

  const spin: boolean = useSelector((state: SpinState) => state.spin);

  Router.events.on("routeChangeStart", () => dispatch(startSpin()));

  Router.events.on("routeChangeComplete", () => dispatch(stopSpin()));

  Router.events.on("routeChangeError", () => dispatch(stopSpin()));

  return (
    <Spin style={{ height: "100vh" }} spinning={spin}>
      {children}
    </Spin>
  );
};
