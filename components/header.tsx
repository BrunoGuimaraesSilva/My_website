import { Layout, Menu } from "antd";
import {
  MailOutlined,
  UserOutlined,
  HighlightOutlined,
} from "@ant-design/icons";
const { Header } = Layout;
import Link from "next/link";

export function AntHeader() {
  return (
    <Header>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item icon={<UserOutlined />} key="1">
          <Link href="/">
            <a>Sobre mim </a>
          </Link>
        </Menu.Item>
        <Menu.Item icon={<HighlightOutlined />} key="2">
          <Link href="/projects">
            <a>Projetos</a>
          </Link>
        </Menu.Item>
        <Menu.Item icon={<MailOutlined />} key="3">
          <Link href="/contact">
            <a>Contatos</a>
          </Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
}
