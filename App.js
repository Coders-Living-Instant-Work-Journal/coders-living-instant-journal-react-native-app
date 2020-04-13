import React from "react";
import { Container } from "native-base";

import {
  Header,
  Button,
  Text,
  Left,
  Right,
  Body,
  Icon,
  StyleProvider,
  Thumbnail,
} from "native-base";

import MainHeader from "./src/components/MainHeader";
import MainFooter from "./src/components/MainFooter";

import Login from "./src/components/Login"

import If from './src/components/Auth/If'

let isLoggedIn = false

const App = () => {
  return (
    <>
      <Container>
          <If condition={isLoggedIn}>
            <MainHeader />
            <MainFooter />
          </If>

          <If condition={!isLoggedIn}>
            <Button onPress={() => isLoggedIn = true}><Text>Login</Text></Button>
          </If>
      </Container>
    </>
  );
};

export default App;
