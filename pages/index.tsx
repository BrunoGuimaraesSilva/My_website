import { DesktopBody, MobileBody } from "../components";
import { Card, Col, Row, Typography } from "antd";
import Lottie from "react-lottie";
import animation from "../animations/rocket.json";
import React, { useEffect } from "react";
import Typewriter from "typewriter-effect/dist/core";
import { InfoContainer } from "../styles/pages/home";
import { ResponseWindow } from "../utils/useWindows";

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

   const Desktop = () => (
      <DesktopBody>
         <div className={"indexInformations"}>
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
               <Col style={{ maxHeight: 500 }} span={12}>
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
      </DesktopBody>
   );

   const Mobile = () => (
      <MobileBody>
         <Row>
            <Col span={12} offset={6}>
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
            <Col style={{ maxHeight: 500 }} span={12} offset={6}>
               <Lottie
                  options={{
                     animationData: animation,
                     autoplay: true,
                     loop: true,
                  }}
               />
            </Col>
         </Row>
      </MobileBody>
   );
   console.log(ResponseWindow())
   return ResponseWindow() ? <Desktop /> : <Mobile/>;
}
