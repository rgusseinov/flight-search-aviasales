export interface IChecked {
  [key: string]: any
}

export interface sortFilterProps {
  onFilterTypeChange(e: React.SyntheticEvent<EventTarget>): void
  filterType: any 
}