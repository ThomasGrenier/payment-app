import { ChipStyled } from "./Chip.style";

interface ChipProps {
  label: string;
  active: boolean;
  color: string;
}

export function Chip({ label, active = false, color }: ChipProps) {
  return (
    <ChipStyled active={active} color={color}>
      <span>{label}</span>
    </ChipStyled>
  );
}
