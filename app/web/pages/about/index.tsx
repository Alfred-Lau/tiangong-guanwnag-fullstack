import React from "react";

export type AboutProps = { title: string; subtitle: string };

export default function About(
  props: React.PropsWithChildren<Partial<AboutProps>>
) {
  const { title, subtitle } = props;
  return (
    <div>
      <h3>关于本站{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
}
