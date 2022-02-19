import { queryFramework } from "../../services/framework";
import { useEffect, useState } from "react";

export default function useFramework() {
  const [framework, setFramework] = useState<TianGong.FrameworkModel>();
  useEffect(() => {
    queryFramework().then((res) => {
      if (res) {
        setFramework(res);
      }
    });
  }, []);
  return framework;
}
