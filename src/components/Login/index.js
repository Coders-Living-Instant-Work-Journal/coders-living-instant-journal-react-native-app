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

const Login = () => {
  return (
      <StyleProvider style={getTheme(material)}>

      </StyleProvider>
  );
};

export default Login;