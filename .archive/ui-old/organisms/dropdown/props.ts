export interface DropdownProps {
  options: { label: string; value: string }[];
  selected: string;
  onChange: (val: string) => void;
}
