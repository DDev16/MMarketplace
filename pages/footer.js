/* eslint-disable @next/next/no-img-element */
import "sf-font";
import { Text, Row, Spacer, Container, Col, Grid } from "@nextui-org/react";
import Link from "next/link";

export default function Footer() {
  const footer1 = [
    {
      id: 1,
      img: "discord.png",
      url: "https://discord.gg/rZXkrpqrQH",
    },
    {
      id: 2,
      img: "insta.png",
      url: "https://www.instagram.com/monstersnftinc/",
    },
    {
      id: 3,
      img: "twitter.png",
      url: "https://twitter.com/MonstersNFT_Inc",
    },
  ];

  const footer2 = [
    {
      id: 1,
      img: "bsc.png",
      url: "https://www.binance.us/?utm_source=binanceglobal&utm_medium=popup&utm_campaign=com_redirect",
    },
    {
      id: 2,
      img: "polygonwhite.png",
      url: "https://polygon.technology/",
    },
    {
      id: 3,
      img: "ethereumlogo.png",
      url: "https://ethereum.org/en/",
    },
    {
      id: 4,
      img: "flarelogo.png",
      url: "https://flare.network/",
    },
    {
      id: 5,
      img: "songbirdlogo.png",
      url: "https://flare.network/songbird/",
    },
  ];

  return (
    <div>
      <Spacer></Spacer>
      <Container css={{ borderTop: "1px solid #B22222" }}>
        <Container gap={3}>
          <Grid.Container gap={2} justify="center">
            <Grid xs={12}>
              <Col>
                <Link href={"/"}>
                  <Text
                    h2
                    css={{
                      textAlign: "center",
                      color: "#fff",
                      fontSmooth: "always",
                      textShadow: "-0px 0px 3px #ffffff",
                      fontFamily: "SF Pro Display",
                      fontWeight: "700",
                    }}>
                    Monsters NFT Inc: Connect Everything
                  </Text>
                </Link>
                <Text
                  css={{
                    textAlign: "center",
                    color: "#fff",
                    fontSmooth: "always",
                    fontFamily: "SF Pro Display",
                  }}>
                  The marketplace that defies the boundaries of blockchain technology. 
                   A token with limitless potential. 
                   NFTs are not just a medium for art, they are revolutionizing the concept of ownership and breaking free from traditional paper-based systems.
                </Text>
              </Col>
            </Grid>
          </Grid.Container>
          <Grid.Container gap={2} justify="center">
            <Grid md={4}>
              <Col>
                <Text css={{ marginTop: "3px", textAlign: "center" }} h4>
                  Follow Us!
                </Text>
                <Text span css={{ textAlign: "center", display: "block" }}>
                  {footer1.map((item, idx) => {
                    return (
                      <a href={item.url} key={item.id}>
                        <img
                          src={item.img}
                          style={{ marginRight: "1px" }}
                          width="135px"
                          height="70px"></img>
                      </a>
                    );
                  })}
                </Text>
              </Col>
            </Grid>
            <Grid md={4}>
              <Col>
                <Text css={{ marginTop: "3px", textAlign: "center" }} h4>
                  Integrations
                </Text>
                <Text span css={{ textAlign: "center", display: "block" }}>
                {footer2.map((item, idx) => {
                    return (
                      <a href={item.url} key={item.id}>
                        <img
                          src={item.img}
                          style={{ marginRight: "5px" }}
                          width="50px"
                          height="50px"></img>
                      </a>
                    );
                  })}
                </Text>
              </Col>
            </Grid>
            <Grid md={4}>
              <Col style={{ marginLeft: "5px" }}>
                <Text span css={{ textAlign: "center" }}>
                  <a href="">
                    <img
                      src="discordlogo.png"
                      style={{
                        width: "200px",
                      }}
                    />
                  </a>
                </Text>
              </Col>
            </Grid>
          </Grid.Container>
          <Grid.Container gap={2} justify="center">
            <Grid xs={12}>
              <Col>
                <Text p css={{ textAlign: "center" }}>
                  ©2022 Monsters NFT Inc. - All Rights Reserved.
                </Text>
              </Col>
            </Grid>
          </Grid.Container>
        </Container>
      </Container>
    </div>
  );
}
