import { FC } from "react";
import { Button, Layout } from "antd";

import styles from "./index.less";
import Category from "./component/category";

const { Content, Sider, Header, Footer } = Layout;

const Doc: FC = () => {
  return (
    <div className={styles.doc}>
      <Button>dianji</Button>
      <Layout>
        <Header>header</Header>
        <Layout>
          <Sider>
            <Category data={[]}></Category>
          </Sider>
          <Content>main content</Content>
          <Sider>right sidebar</Sider>
        </Layout>
        <Footer>footer</Footer>
      </Layout>
    </div>
  );
};

export default Doc;
