import { bscChain, polyChain, ethChain, hardChain, bscTest, ethTest, polyTest, flrChain } from "../engine/chainchange";
import "sf-font";
import { Col, Dropdown } from "@nextui-org/react";
import React from "react";
import { useEffect } from "react";
import detectEthereumProvider from "@metamask/detect-provider";

export default function ConnectChain() {
  const [selected, setSelected] = React.useState(new Set(["Set Network"]));
  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replace("_", " "),
    [selected]
  );

  // const selectedValue = "Mumbai";

  // const detectChain = async () => {
  //   const provider = await detectEthereumProvider();

  //   const chainId = await provider.request({ method: "eth_chainId" });

  //   return chainId;
  // };

  // useEffect(() => {
  //   var goe = "0x5";
  //   var mm = "0x13881";
  //   var bsct = "0x61";
  //   const chain = detectChain().then((res) => {
  //     console.log("res", res);
  //   });
  //   // setSelected("Mumbai");
  // }, []);

  const blockImage = React.useMemo(() => {
    var eth = "Ethereum";
    var bsc = "Binance Smart Chain";
    var pol = "Polygon";
    var mum = "Mumbai";
    var bsct = "Bsctest";
    var goe = "Goerli";
    var flr = "Flare"
    var hard = "Hardhat";
    var init = "Set Network";
    if (selectedValue == eth) {
      return <img src="./ethereumlogo.png" width={"160px"} />;
    } else if (selectedValue == bsc) {
      return <img src="./bsc.png" width={"160px"} />;
    } else if (selectedValue == pol) {
      return <img src="./polygonwhite.png" width={"160px"} />;
    } else if (selectedValue == mum) {
      return <h3>Mumbai Testnet</h3>;
    } else if (selectedValue == bsct) {
      return <h3>BSC Testnet</h3>;
    } else if (selectedValue == goe) {
      return <h3>Goerli Testnet</h3>;
    } else if (selectedValue == flr) {
      return <img src="./flarelogo.png" width={"160px"} />;
    } else if (selectedValue == hard) {
      return <img src="./songbirdlogo.png" width={"160px"} />;
    } else if (selectedValue == init) {
      return (
        <div className="mt-4">
          <h3>Select Network</h3>
        </div>
      );
    }
  });

  async function enableChain() {
    var bsc = "Binance Smart Chain";
    var poly = "Polygon";
    var eth = "Ethereum";
    var mum = "Mumbai";
    var bsct = "Bsctest";
    var goe = "Goerli";
    var flr = "Flare";
    var hard = "Hardhat";
    if (bsc == selectedValue) {
      bscChain();
    } else if (poly == selectedValue) {
      polyChain();
    } else if (eth == selectedValue) {
      ethChain();
    } else if (hard == selectedValue) {
      hardChain();
    } else if (bsct == selectedValue) {
      bscTest();
    } else if (goe == selectedValue) {
      ethTest();
    } else if (mum == selectedValue) {
      polyTest();
    } else if (flr == selectedValue) {
      flrChain();
    }
  }
  useEffect(() => {
    enableChain();
  }, [selected]);

  return (
    <Col css={{ marginTop: "$6" }}>
      <Dropdown>
        <Dropdown.Button
          aria-label="Connect Wallet"
          flat
          style={{
            background: "#00000070",
            boxShadow: "0px 0px 4px #ffffff",
            fontFamily: "SF Pro Display",
            fontWeight: "500",
            color: "white",
            fontSize: "20px",
          }}
          css={{ tt: "capitalize" }}
        >
          {blockImage}
        </Dropdown.Button>
        <Dropdown.Menu
          css={{
            backgroundColor: "#ffffff30",
          }}
          aria-label="Single selection actions"
          color="secondary"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selected}
          onSelectionChange={setSelected}
          textValue={selected}
        >
          <Dropdown.Item textValue="Ethereum" key="Ethereum">
            <img src="ethereumlogo.png" width={"110px"} />
          </Dropdown.Item>
          <Dropdown.Item
            textValue="Binance Smart Chain"
            key="Binance Smart Chain"
          >
            <img src="bsc.png" width={"110px"} />
          </Dropdown.Item>
          <Dropdown.Item textValue="Polygon" key="Polygon">
            <img src="polygonwhite.png" width={"110px"} />
          </Dropdown.Item>
          <Dropdown.Item textValue="Hardhat" key="Hardhat">
            <img src="songbirdlogo.png" width={"110px"} />
          </Dropdown.Item>
          <Dropdown.Item textValue="Flare" key="Flare">
          <img src="./flarelogo.png" width={"110px"} />
          </Dropdown.Item>
          <Dropdown.Item textValue="Goerli" key="Goerli">
            Goerli TestNet
          </Dropdown.Item>
          <Dropdown.Item textValue="Bsctest" key="Bsctest">
            BSC TestNet
          </Dropdown.Item>
          <Dropdown.Item textValue="Mumbai" key="Mumbai">
            Mumbai TestNet
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Col>
  );
}
