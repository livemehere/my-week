import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../../global-style";
import { Container } from "./style";

const Home = React.lazy(() => import("../../pages/Home"));
const Detail = React.lazy(() => import("../../pages/Detail"));

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Suspense>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </Container>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
