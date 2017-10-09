import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const clients = [{"id":1,"name":"Павел Сергеевич Плешаков","birthdate":623462400000,"averageBill":40,"lastVisit":1506783600000,"hasCard":true,"discount":10},{"id":2,"name":"Артем Андреевич Ушаков","birthdate":591926400000,"averageBill":120,"lastVisit":1506524400000,"hasCard":true,"discount":10},{"id":3,"name":"Роман Антонович Уваров","birthdate":591926400000,"averageBill":240,"lastVisit":1506092400000,"hasCard":true,"discount":10},{"id":4,"name":"Александр Сергеевич Пушкин","birthdate":528768000000,"averageBill":500,"lastVisit":1505919600000,"hasCard":true,"discount":20},{"id":5,"name":"Антон Павлович Чехов","birthdate":497232000000,"averageBill":148,"lastVisit":1505919600000,"hasCard":true,"discount":10},{"id":6,"name":"Агния Ивановна Барто","birthdate":465696000000,"averageBill":70,"lastVisit":1505487600000,"hasCard":false,"discount":0},{"id":7,"name":"Владимир Владимирович Путин","birthdate":434073600000,"averageBill":35,"lastVisit":1505487600000,"hasCard":false,"discount":0},{"id":8,"name":"Андрей Юрьевич Малахов","birthdate":402537600000,"averageBill":500,"lastVisit":1505055600000,"hasCard":false,"discount":20},{"id":9,"name":"Николай Николаевич Бром","birthdate":371001600000,"averageBill":90,"lastVisit":1505055600000,"hasCard":false,"discount":5},{"id":10,"name":"Александр Сергеевич Пушкин","birthdate":528768000000,"averageBill":500,"lastVisit":1505919600000,"hasCard":true,"discount":20},{"id":11,"name":"Павел Сергеевич Плешаков","birthdate":623462400000,"averageBill":40,"lastVisit":1506783600000,"hasCard":true,"discount":0},{"id":12,"name":"Артем Андреевич Ушаков","birthdate":591926400000,"averageBill":120,"lastVisit":1506524400000,"hasCard":true,"discount":0},{"id":13,"name":"Роман Антонович Уваров","birthdate":591926400000,"averageBill":240,"lastVisit":1506092400000,"hasCard":true,"discount":10},{"id":14,"name":"Александр Сергеевич Пушкин","birthdate":528768000000,"averageBill":500,"lastVisit":1505919600000,"hasCard":true,"discount":20},{"id":15,"name":"Антон Павлович Чехов","birthdate":497232000000,"averageBill":148,"lastVisit":1505919600000,"hasCard":true,"discount":10},{"id":16,"name":"Агния Ивановна Барто","birthdate":465696000000,"averageBill":70,"lastVisit":1505487600000,"hasCard":false,"discount":0},{"id":17,"name":"Владимир Владимирович Путин","birthdate":434073600000,"averageBill":35,"lastVisit":1505487600000,"hasCard":false,"discount":0},{"id":18,"name":"Андрей Юрьевич Малахов","birthdate":402537600000,"averageBill":500,"lastVisit":1505055600000,"hasCard":false,"discount":20},{"id":19,"name":"Николай Николаевич Бром","birthdate":371001600000,"averageBill":90,"lastVisit":1505055600000,"hasCard":false,"discount":5},{"id":20,"name":"Александр Сергеевич Пушкин","birthdate":528768000000,"averageBill":500,"lastVisit":1505919600000,"hasCard":true,"discount":20},{"id":21,"name":"Павел Сергеевич Плешаков","birthdate":623462400000,"averageBill":40,"lastVisit":1506783600000,"hasCard":true,"discount":0},{"id":22,"name":"Артем Андреевич Ушаков","birthdate":591926400000,"averageBill":120,"lastVisit":1506524400000,"hasCard":true,"discount":0},{"id":23,"name":"Роман Антонович Уваров","birthdate":591926400000,"averageBill":240,"lastVisit":1506092400000,"hasCard":true,"discount":10},{"id":24,"name":"Александр Сергеевич Пушкин","birthdate":528768000000,"averageBill":500,"lastVisit":1505919600000,"hasCard":true,"discount":20},{"id":25,"name":"Антон Павлович Чехов","birthdate":497232000000,"averageBill":148,"lastVisit":1505919600000,"hasCard":true,"discount":10},{"id":26,"name":"Агния Ивановна Барто","birthdate":465696000000,"averageBill":70,"lastVisit":1505487600000,"hasCard":false,"discount":0},{"id":27,"name":"Владимир Владимирович Путин","birthdate":434073600000,"averageBill":35,"lastVisit":1505487600000,"hasCard":false,"discount":0},{"id":28,"name":"Андрей Юрьевич Малахов","birthdate":402537600000,"averageBill":500,"lastVisit":1505055600000,"hasCard":false,"discount":20},{"id":29,"name":"Николай Николаевич Бром","birthdate":371001600000,"averageBill":90,"lastVisit":1505055600000,"hasCard":false,"discount":5},{"id":30,"name":"Николай Николаевич Бром","birthdate":371001600000,"averageBill":90,"lastVisit":1505055600000,"hasCard":false,"discount":5}];
    return {clients};
  }
}
