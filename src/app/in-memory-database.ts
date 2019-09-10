import {InMemoryDbService} from 'angular-in-memory-web-api';



export class inMemoryDataBase implements InMemoryDbService {
  createDb() {
    const categories = [
      {id: 1, name: 'Moradia', description: 'pagamento de aluguel'},
      {id: 1, name: 'Moradia', description: 'pagamento de aluguel'},
      {id: 1, name: 'Moradia', description: 'pagamento de aluguel'}
    ];
    return {categories};
  }
}


