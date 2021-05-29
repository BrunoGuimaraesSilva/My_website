import { Layout } from "antd";
import { Body } from "../components";
const { Content } = Layout;

function Project() {
  return (
    <Body>
      <Content style={{ padding: "0 50px" }}>
        <div className="site-Body-content">Content</div>
      </Content>
    </Body>
  );
}

export default Project;
