import React, { PropsWithChildren } from "react";

const LoginLayout: React.FC = (props: PropsWithChildren) => {
  return <div className="w-screen h-screen grid bg-slate-400 overflow-hidden">{props.children}</div>;
};

export default LoginLayout;
