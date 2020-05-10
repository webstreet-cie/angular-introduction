export class TrainingsService {
    getTrainings() {
        let trainings = [
            {
              name: 'Angular - Create web applications',
              category: 'client',
              price: 950
            },
            {
              name: 'Html & Css - Create responsive websites',
              category: 'client',
              price: 850
            },
            {
              name: 'Symfony & Api Platform - Create rest APIs',
              category: 'server',
              price: 1250
            },
            {
              name: 'MySQL - Databases',
              category: 'server',
              price: 1550
            }
            ];
        return trainings;
          
    }
}