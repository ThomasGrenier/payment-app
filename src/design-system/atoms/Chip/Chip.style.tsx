import styled from "styled-components";

export const ChipStyled = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "active" && prop !== "color",
})<{ active: boolean; color: string }>`
  font-size: ${({ theme }) => theme.typography.size.xs};
  border-radius: ${({ theme }) => theme.radius.md};
  width: 5rem;
  height: fit-content;
  text-align: center;
  color: ${({ theme, active }) =>
    active ? theme.colors.text.white : theme.colors.text.black};
  padding: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme, color, active }) => {
    if (!active) return theme.colors.text.white;
    switch (color) {
      case "warning":
        return theme.colors.info.warning;
      case "error":
        return theme.colors.info.error;
      case "success":
        return theme.colors.info.success;
      case "default":
        return theme.colors.backgroundColor.gray;
    }
  }};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
`;
