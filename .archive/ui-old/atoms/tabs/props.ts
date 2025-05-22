export interface TabsProps {
  tabs: string[];
  activeTab: number;
  onChange: (index: number) => void;
}
