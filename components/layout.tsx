import { Layout } from "antd";
import { AntHeader } from "./header";
import { AntFooter } from "./footer";
import { CustonSpin } from "./spin";
const { Content } = Layout;

type Props = {
  children?: JSX.Element;
};

export function Body({ children }: Props) {
  return (
    <CustonSpin>
      <Layout className="layout">
        <AntHeader />
        <Content style={{ padding: "0 50px" }}>{children}</Content>
        <AntFooter />
      </Layout>
    </CustonSpin>
  );
}
