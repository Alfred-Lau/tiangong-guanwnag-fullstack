import React from "react";
import useFramework from "./useFramework";

// export type HomeProps = { title: string; subtitle: string };

export default function Home() {
  const framework: ReturnType<typeof useFramework> = useFramework();
  return (
    <div>
      <h3>框架首页</h3>
      <ul>
        {framework?.features.map((feature) => {
          return <li>{feature}</li>;
        })}
      </ul>
    </div>
  );
}
