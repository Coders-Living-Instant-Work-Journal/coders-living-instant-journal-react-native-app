import React from "react";
import { Container } from "native-base";

import MainHeader from "./src/components/MainHeader";
import MainFooter from "./src/components/MainFooter";

const App = () => {
  return (
    <>
      <Container>
        <MainHeader />
        <MainFooter />
      </Container>
    </>
  );
};

export default App;
