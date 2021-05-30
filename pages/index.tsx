import { Body } from "../components";
import { Card, Col, Row, Typography } from "antd";
import Lottie from "react-lottie";
import animation from "../animations/rocket.json";
import { useEffect } from "react";
import Typewriter from "typewriter-effect/dist/core";
import { InfoContainer } from "../styles/pages/home";
const { Title } = Typography;

export default function Home() {
  useEffect(() => {
    const typing = document.getElementById("typing");

    const typewriter = new Typewriter(typing, {
      loop: true,
    });

    typewriter
      .typeString("Web.")
      .pauseFor(1000)
      .deleteAll()
      .typeString("Next JS.")
      .pauseFor(1000)
      .deleteAll()
      .typeString("React JS.")
      .pauseFor(1000)
      .deleteAll()
      .typeString("PHP.")
      .pauseFor(1000)
      .deleteAll()
      .start();
  }, []);

  return (
    <Body>
      <div style={{ height: "100%", padding: "10vh", margin: 10 }}>
        <Row>
          <Col span={12}>
            <InfoContainer>
              <h2>Olá,</h2>
              <h1>
                Eu sou <span>&lt;Bruno/&gt;</span>
              </h1>
              <h2>
                Desenvolvedor <span id="typing"></span>
              </h2>
            </InfoContainer>
          </Col>
          <Col span={12}>
            <Lottie
              options={{
                animationData: animation,
                autoplay: true,
                loop: true,
              }}
            />
          </Col>
        </Row>
      </div>
    </Body>
  );
}
