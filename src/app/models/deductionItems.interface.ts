import { DeductionStatus } from './deductionStatus.enum';

export interface DeductionItem {
  Name: string;
  Status: DeductionStatus;
}

export const ItemCategories = {
  Suspects: 'Suspects',
  Weapons: 'Weapons',
  Locations: 'Locations',
};
