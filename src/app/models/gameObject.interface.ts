import { DeductionItem } from './deductionItems.interface';

export interface gameObject {
  Weapons: Array<DeductionItem>;
  Locations: Array<DeductionItem>;
  Suspects: Array<DeductionItem>;
}
