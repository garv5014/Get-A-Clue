import { DeductionItem } from './deductionItems.interface';
import { DeductionStatus } from './deductionStatus.enum';
import { gameObject } from './gameObject.interface';

export const InitItems: gameObject = {
  Weapons: [
    {
      Name: 'Knife',
      Status: DeductionStatus.NotSeen,
    },
    {
      Name: 'Candlestick',
      Status: DeductionStatus.NotSeen,
    },
    {
      Name: 'Revolver',
      Status: DeductionStatus.NotSeen,
    },
    {
      Name: 'Rope',
      Status: DeductionStatus.NotSeen,
    },
    {
      Name: 'Lead',
      Status: DeductionStatus.NotSeen,
    },
    {
      Name: 'Pipe',
      Status: DeductionStatus.NotSeen,
    },
    {
      Name: 'Wrench',
      Status: DeductionStatus.NotSeen,
    },
    {
      Name: 'Horseshoe',
      Status: DeductionStatus.NotSeen,
    },
    {
      Name: 'Poison',
      Status: DeductionStatus.NotSeen,
    },
  ] as Array<DeductionItem>,
  Locations: [
    {
      Name: 'Gazebo',
      Status: DeductionStatus.NotSeen,
    },
    {
      Name: 'Courtyard',
      Status: DeductionStatus.NotSeen,
    },
    {
      Name: 'Fountain',
      Status: DeductionStatus.NotSeen,
    },
    {
      Name: 'Drawing Room',
      Status: DeductionStatus.NotSeen,
    },
    {
      Name: 'Library',
      Status: DeductionStatus.NotSeen,
    },
    {
      Name: 'Billiard Room',
      Status: DeductionStatus.NotSeen,
    },
    {
      Name: 'Dining Room',
      Status: DeductionStatus.NotSeen,
    },
    {
      Name: 'Kitchen',
      Status: DeductionStatus.NotSeen,
    },
    {
      Name: 'Studio',
      Status: DeductionStatus.NotSeen,
    },
    {
      Name: 'Conservatory',
      Status: DeductionStatus.NotSeen,
    },
    {
      Name: 'Trophy Room',
      Status: DeductionStatus.NotSeen,
    },
    {
      Name: 'Carriage House',
      Status: DeductionStatus.NotSeen,
    },
  ] as Array<DeductionItem>,
  Suspects: [
    {
      Name: 'Miss Scarlet',
      Status: DeductionStatus.NotSeen,
    },
    {
      Name: 'Colonel Mustard',
      Status: DeductionStatus.NotSeen,
    },
    {
      Name: 'Mrs. White',
      Status: DeductionStatus.NotSeen,
    },
    {
      Name: 'Mr. Green',
      Status: DeductionStatus.NotSeen,
    },
    {
      Name: 'Mrs. Peacock',
      Status: DeductionStatus.NotSeen,
    },
    {
      Name: 'Professor Plum',
      Status: DeductionStatus.NotSeen,
    },
    {
      Name: 'Madame Rose',
      Status: DeductionStatus.NotSeen,
    },
    {
      Name: 'Monsieur Brunette',
      Status: DeductionStatus.NotSeen,
    },
    {
      Name: 'Miss Peach',
      Status: DeductionStatus.NotSeen,
    },
    {
      Name: 'Sergeant Gray',
      Status: DeductionStatus.NotSeen,
    },
  ] as Array<DeductionItem>,
};
