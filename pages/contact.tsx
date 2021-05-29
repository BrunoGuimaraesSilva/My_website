import { Breadcrumb, Layout, Menu } from "antd";
import {Body} from '../components'
const { Content} = Layout;

function Contact() {
  return (
    <Body>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Contact</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-Body-content">Content</div>
      </Content>
    </Body>
  );
}

export default Contact;
