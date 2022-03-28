import React from "react";
import { Link } from "umi";
import useFramework from "./useFramework";

// export type HomeProps = { title: string; subtitle: string };

export default function Home() {
  const framework: ReturnType<typeof useFramework> = useFramework();
  return (
    <div>
      <h3>框架首页</h3>
      <ul>
        {framework?.features?.map((feature) => {
          return (
            <li key={feature.id}>
              <Link to={feature.key}>{feature.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
