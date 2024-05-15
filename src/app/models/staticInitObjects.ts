import { DeductionItem } from './deductionItems.interface';
import { DeductionStatus } from './deductionStatus.enum';
import { gameObject } from './gameObject.interface';

export const InitItems: gameObject = {
  Weapons: [
    {
      Name: 'Knife',
      Status: DeductionStatus.Unmarked,
    },
    {
      Name: 'Candlestick',
      Status: DeductionStatus.Unmarked,
    },
    {
      Name: 'Revolver',
      Status: DeductionStatus.Unmarked,
    },
    {
      Name: 'Rope',
      Status: DeductionStatus.Unmarked,
    },
    {
      Name: 'Lead',
      Status: DeductionStatus.Unmarked,
    },
    {
      Name: 'Pipe',
      Status: DeductionStatus.Unmarked,
    },
    {
      Name: 'Wrench',
      Status: DeductionStatus.Unmarked,
    },
    {
      Name: 'Horseshoe',
      Status: DeductionStatus.Unmarked,
    },
    {
      Name: 'Poison',
      Status: DeductionStatus.Unmarked,
    },
  ] as Array<DeductionItem>,
  Locations: [
    {
      Name: 'Gazebo',
      Status: DeductionStatus.Unmarked,
    },
    {
      Name: 'Courtyard',
      Status: DeductionStatus.Unmarked,
    },
    {
      Name: 'Fountain',
      Status: DeductionStatus.Unmarked,
    },
    {
      Name: 'Drawing Room',
      Status: DeductionStatus.Unmarked,
    },
    {
      Name: 'Library',
      Status: DeductionStatus.Unmarked,
    },
    {
      Name: 'Billiard Room',
      Status: DeductionStatus.Unmarked,
    },
    {
      Name: 'Dining Room',
      Status: DeductionStatus.Unmarked,
    },
    {
      Name: 'Kitchen',
      Status: DeductionStatus.Unmarked,
    },
    {
      Name: 'Studio',
      Status: DeductionStatus.Unmarked,
    },
    {
      Name: 'Conservatory',
      Status: DeductionStatus.Unmarked,
    },
    {
      Name: 'Trophy Room',
      Status: DeductionStatus.Unmarked,
    },
    {
      Name: 'Carriage House',
      Status: DeductionStatus.Unmarked,
    },
  ] as Array<DeductionItem>,
  Suspects: [
    {
      Name: 'Miss Scarlet',
      Status: DeductionStatus.Unmarked,
    },
    {
      Name: 'Colonel Mustard',
      Status: DeductionStatus.Unmarked,
    },
    {
      Name: 'Mrs. White',
      Status: DeductionStatus.Unmarked,
    },
    {
      Name: 'Mr. Green',
      Status: DeductionStatus.Unmarked,
    },
    {
      Name: 'Mrs. Peacock',
      Status: DeductionStatus.Unmarked,
    },
    {
      Name: 'Professor Plum',
      Status: DeductionStatus.Unmarked,
    },
    {
      Name: 'Madame Rose',
      Status: DeductionStatus.Unmarked,
    },
    {
      Name: 'Monsieur Brunette',
      Status: DeductionStatus.Unmarked,
    },
    {
      Name: 'Miss Peach',
      Status: DeductionStatus.Unmarked,
    },
    {
      Name: 'Sergeant Gray',
      Status: DeductionStatus.Unmarked,
    },
  ] as Array<DeductionItem>,
};
