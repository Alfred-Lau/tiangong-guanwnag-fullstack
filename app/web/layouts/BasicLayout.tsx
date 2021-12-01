import React from "react";

export default function BasicLayout(props: React.PropsWithChildren<void>) {
  return <div className="layout">{props.children}</div>;
}
