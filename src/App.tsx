import FontFaceObserver from "fontfaceobserver";
import { useState } from "react";
import * as Styled from "./App.style";
import { Body2 } from "./constants/Typography";
import { useAsyncEffect } from "./hooks";
import Router from "./router";

const font = new FontFaceObserver("NotoSansKR");

const App = () => {
  const [fontLoaded, setFontLoaded] = useState<boolean>(false);

  useAsyncEffect(async () => {
    await font.load(null, 1000 * 60);
    setFontLoaded(true);
  }, []);

  // TODO: 선언적으로 바꾸기
  if (!fontLoaded)
    return (
      <Styled.LoadingContainer fullWidth>
        <Body2>오늘 하루는 행복하셨나요?</Body2>
      </Styled.LoadingContainer>
    );

  return (
    <Styled.AppContainer fontLoaded={fontLoaded}>
      <Router />
    </Styled.AppContainer>
  );
};

export default App;
