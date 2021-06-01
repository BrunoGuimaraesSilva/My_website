import { Layout } from "antd";
import { AntHeader } from "../header";
import { AntFooter } from "../footer";
import { CustonSpin } from "../spin";
const { Content } = Layout;

type Props = {
  children?: JSX.Element;
};

export function MobileBody({ children }: Props) {
  return (
    <CustonSpin>
      <Layout className="layout">
        <AntHeader />
        <Content className="container">{children}</Content>
        <AntFooter />
      </Layout>
    </CustonSpin>
  );
}
