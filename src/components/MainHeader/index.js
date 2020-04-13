import React from "react";
import {
  Header,
  Button,
  Left,
  Right,
  Body,
  Icon,
  StyleProvider,
  Thumbnail,
} from "native-base";

import getTheme from "../../../native-base-theme/components";
import material from "../../../native-base-theme/variables/material";

const MainHeader = () => {
  return (
    <StyleProvider style={getTheme(material)}>
      <Header>
        <Left>
          <Button transparent>
            <Icon name="menu" style={{ color: "#04BFBF" }} />
          </Button>
        </Left>
        <Body style={{ flex: 1, alignItems: "center", marginLeft: 75 }}>
          <Thumbnail
            style={{}}
            small
            source={require("../../../assets/logo.png")}
          />
        </Body>
        <Right>
          <Icon
            ios="ios-settings"
            android="md-settings"
            style={{ color: "#04BFBF" }}
          />
        </Right>
      </Header>
    </StyleProvider>
  );
};

export default MainHeader;
