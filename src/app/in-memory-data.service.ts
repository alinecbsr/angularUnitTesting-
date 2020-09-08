import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Superman', powers: 7 },
      { id: 2, name: 'Wolverine', powers: 4 },
      { id: 3, name: 'Thor', powers: 3 },
      { id: 4, name: 'Mystique', powers: 3 },
      { id: 5, name: 'The Flash', powers: 3 },
      { id: 6, name: 'Black Bolt', powers: 2 },
      { id: 7, name: 'Silver Surf', powers: 2 },
      { id: 8, name: 'Spiderman', powers: 2 },
      { id: 9, name: 'Iron Man', powers: 1 },
      { id: 10, name: 'The Lizard', powers: 1 },
      { id: 11, name: 'Iceman', powers: 1 },
      { id: 12, name: 'Batman', powers: 0 }
    ];
    return {heroes};
  }
}
