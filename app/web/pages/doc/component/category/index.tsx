import React from "react";
import styles from "./index.less";

export type CategoryProps = {
  data: any;
};

const Category = (props: CategoryProps) => {
  const { data } = props;
  console.log("data", data);
  return <div className={styles.category}>Category</div>;
};

export default Category;
