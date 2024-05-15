import { DeductionItem } from './deductionItems.interface';

export interface gameObject {
  Suspects: [DeductionItem];
  Weapons: [DeductionItem];
  Locations: [DeductionItem];
}
