import React, { forwardRef } from "react";
import { Tree } from "antd";
import { DownOutlined } from "@ant-design/icons";
import styles from "./index.less";

export type CategoryProps = {
  data: any;
};

const Category = forwardRef((props: CategoryProps, ref) => {
  const { data = [] } = props;
  console.log("data", data);

  const onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };

  return (
    <div className={styles.category} ref={ref}>
      <Tree
        showLine
        switcherIcon={<DownOutlined />}
        defaultExpandedKeys={["0-0-0"]}
        onSelect={onSelect}
        treeData={data}
      />
    </div>
  );
});

export default Category;
