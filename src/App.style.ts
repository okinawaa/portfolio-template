import styled from "styled-components";
import Colors from "./constants/Colors";
import { FlexCenter } from "./constants/Common.style";

export const AppContainer = styled.div<{ fontLoaded: boolean }>`
  @keyframes smoothAppear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  will-change: opacity;
  animation: smoothAppear 1s;
  background-color: ${Colors.black22};
`;

export const LoadingContainer = styled(FlexCenter)`
  height: 100vh;
`;
