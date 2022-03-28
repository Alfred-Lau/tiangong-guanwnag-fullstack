import { FC } from "react";
import { Layout } from "antd";

import styles from "./index.less";
import Category from "./component/category";

const { Content, Sider } = Layout;

const Doc: FC = () => {
  return (
    <div className={styles.doc}>
      sss
      <Layout className={styles["doc-container"]}>
        <Sider theme={"light"}>
          <Category data={[{}]}></Category>
        </Sider>
        <Content>main content</Content>
      </Layout>
    </div>
  );
};

export default Doc;
