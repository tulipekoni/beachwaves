import styled from "styled-components/native";
import colors from "./colors";

export const Heading = styled.Text`
  font-family: "Poppins_600SemiBold";
  font-size: 24px;
  line-height: 36px;
`;
export const SubHeading = styled.Text`
  font-family: "Poppins_500Medium";
  font-size: 16px;
  line-height: 24px;
`;
export const Title = styled.Text`
  font-family: "Poppins_500Medium";
  font-size: 16px;
  line-height: 21px;
  color: ${(props) => props.color};
`;

Title.defaultProps = {
  color: colors.white00,
};

export const Subtitle = styled.Text`
  font-family: "Poppins_400Regular";
  font-size: 12px;
  line-height: 21px;
  color: ${colors.black};
  opacity: 0.5;
`;
