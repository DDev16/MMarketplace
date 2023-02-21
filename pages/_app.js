import { createTheme, NextUIProvider } from "@nextui-org/react";
import "sf-font";
import Link from "next/link";
import { Button, Col, Row, Container } from "@nextui-org/react";
import Footer from "./footer";
import ConnectChain from "../engine/connectchain";
import { SSRProvider } from "react-bootstrap";
import React from 'react'
import Widget from './widget.js'
import '../styles/globals.css'
import { useState } from 'react';
import { Dropdown, Menu } from 'antd';








const theme = createTheme({
  type: "dark",
  theme: {
    fontFamily: "SF Pro Display",
    colors: {
      primaryLight: "$blue200",
      primaryLightHover: "$blue300",
      primaryLightActive: "$blue400",
      primaryLightContrast: "$blue600",
      primary: "$purple500",
      primaryBorder: "$blue500",
      primaryBorderHover: "$blue600",
      primarySolidHover: "$blue700",
      primarySolidContrast: "$white",
      primaryShadow: "$white500",
      transparent: "#00000000",

      gradient:
        "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple300 90%)",
      link: "#5E1DAD",

      myColor: "#00000030",
    },
    space: {},
    fonts: {},
  },
});






function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <SSRProvider>
      <div style={{ background: "black" }}>
        <Container lg css={{ marginTop: "$5" }}>
          <Row css={{ justifyContent: "center", flexWrap: "wrap " }}>
            <Col css={{ marginTop: "$8", width: "auto" }}>
              <img style={{ width: "220px" }} src="n2DMarket.png" />
            </Col>
          </Row>
          <Row
            css={{
              justifyContent: "space-evenly",
              flexWrap: "wrap ",
              alignItems: "center",
              mb: "20px",
              "& > *": { width: "auto !important" },
            }}>
            <Col css={{ marginTop: "$8" }}>
              <Dropdown 
                overlay={
                  <Menu style={{ backgroundColor: '#484b50', size: "15px" }}>
                    <Menu.Item key="1">
                      <Link href="/">
                        <a
                          style={{
                            fontFamily: "SF Pro Display",
                            fontWeight: "500",
                            color: "white",
                            fontSize: "17px",
                          }}
                        >
                          🏠 MarketPlace
                        </a>
                      </Link>
                    </Menu.Item>
    
    
                    <Menu.Item key="2">
                      <Link href="/collection">
                        <a
                          style={{
                            fontFamily: "SF Pro Display",
                            fontWeight: "500",
                            color: "white",
                            fontSize: "17px",
                            transition: "0.5s",
                            '&:hover': {
                              color: "purple"
                            }
                          }}
                        >
                          👾 Collection
                        </a>
                      </Link>
                    </Menu.Item>

                    <Menu.Item key="4">
                      <Link href="/Verify">
                        <a
                          style={{
                            fontFamily: "SF Pro Display",
                            fontWeight: "500",
                            color: "white",
                            fontSize: "17px",
                          }}>
                          🌌 Creator Portal Verify
                        </a>
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="5">
                      <Link href="/portal">
                        <a
                          style={{
                            fontFamily:

                              "SF Pro Display",
                            fontWeight: "500",
                            color: "white",
                            fontSize: "17px",
                          }}>
                         👨 My NFT Portal
                        </a>

                      </Link>
                    </Menu.Item>

                    <Menu.Item key="6">
                      <Link href="https://www.monstersnftinc.co/">
                        <a
                          style={{
                            fontFamily:

                              "SF Pro Display",
                            fontWeight: "500",
                            color: "white",
                            fontSize: "17px",
                          }}>
                        💻 Website
                        </a>

                      </Link>
                    </Menu.Item>

                    <Menu.Item key="3" onClick={() => setIsOpen(!isOpen)}>
                      
                      <Dropdown
                        overlay={
                          <Menu style={{ backgroundColor: '#484b50', size: "15px" }}>
                            <Menu.Item key="1">
                              <Link href="https://monstersnftinc.co/monsters">
                                <a
                                  style={{
                                    fontFamily: "SF Pro Display",
                                    fontWeight: "500",
                                    color: "white",
                                    fontSize: "17px",
                                  }}
                                >
                                 👹 FLR Monsters Mint
                                </a>
                              </Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                              <Link href="https://monstersnftinc.co/mintdapps/dapp2">
                                <a
                                  style={{
                                    fontFamily: "SF Pro Display",
                                    fontWeight: "500",
                                    color: "white",
                                    fontSize: "17px",
                                  }}
                                >
                                 👽 SGB Astro Aliens Mint
                                </a>
                              </Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                              <Link href="https://monster-crossover.vercel.app/">
                                <a
                                  style={{
                                    fontFamily: "SF Pro Display",
                                    fontWeight: "500",
                                    color: "white",
                                    fontSize: "17px",
                                  }}
                                >
                                🌉 NFT Bridge
                                </a>
                              </Link>
                            </Menu.Item>
                            <Menu.Item key="4">
                              <Link href="https://monster-crossover.vercel.app/">
                                <a
                                  style={{
                                    fontFamily: "SF Pro Display",
                                    fontWeight: "500",
                                    color: "white",
                                    fontSize: "17px",
                                  }}
                                >
                                🤠 SGB MonsterDudes
                                </a>
                              </Link>
                            </Menu.Item>
                          </Menu>
                        }
                        trigger={['click']}
                      >
                        <Button
                          size="sm"
                          style={{
                            background: "#00000070",
                            boxShadow: "0px 0px 4px #ffffff",
                          }}
                        >
                          <a
                            style={{
                              fontFamily: "SF Pro Display",
                              fontWeight: "500",
                              color: "white",
                              fontSize: "17px",
                            }}
                          >
                            👩‍💻 Web3 Dapps
                          </a>
                        </Button>
                      </Dropdown>
                    </Menu.Item>

                  </Menu>

                  
                }
                trigger={['click']}
              >
                <Button
                  size="sm"
                  style={{
                    background: "#00000070",
                    boxShadow: "0px 0px 4px #ffffff",
                  }}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <a
                    style={{
                      fontFamily: "SF Pro Display",
                      fontWeight: "500",
                      color: "white",
                      fontSize: "17px",
                    }}
                  >
                    Menu
                  </a>
                </Button>
              </Dropdown>
            </Col>
            <ConnectChain />
          </Row>
        </Container>
        <NextUIProvider theme={theme}>
          <Component {...pageProps} />
        </NextUIProvider>
        <Footer>
          <Footer />
        </Footer>
        <Widget />
      </div>
    </SSRProvider>
  );
}
export default MyApp;