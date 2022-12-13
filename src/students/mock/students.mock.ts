export const studentsMock = [
  {
    name: 'Jorge',
    code: '1-19-0981',
    phone: '809-000-0000',
    career: 'Ing. en Sistemas Computacionales',
    email: 'test@test.com',
    subject: [
      {
        name: 'Computación Gráfica',
        professor: 'Joan',
        proffesorCode: 'ISC000',
        days: [
          {
            startHour: '07:30 PM',
            endHour: '09:30 PM',
            day: 'Lunes',
            classroom: 'B425',
          },
          {
            startHour: '05:30 PM',
            endHour: '07:30 PM',
            day: 'Jueves',
            classroom: 'B424',
          },
        ],
      },
      {
        name: 'Proyecto Integrador',
        professor: 'Ivan',
        proffesorCode: 'ISC001',
        days: [
          {
            startHour: '07:30 PM',
            endHour: '09:30 PM',
            day: 'Martes',
            classroom: 'C411',
          },
          {
            startHour: '05:30 PM',
            endHour: '09:30 PM',
            day: 'Sabados',
            classroom: 'C405',
          },
        ],
      },
    ],
  },
  {
    name: 'Ivan',
    code: '2-13-0624',
    phone: '809-000-0000',
    career: 'Ing. en Informática',
    email: 'utesa@utesa.com',
    subject: [
      {
        name: 'Simulación Digital',
        professor: 'Luis Santana',
        proffesorCode: 'INF01',
        days: [
          {
            startHour: '07:45 PM',
            endHour: '10:00 PM',
            day: 'Lunes',
            classroom: 'B401',
          },
        ],
      },
      {
        name: 'Redes y Comunicaciones',
        professor: 'Gioberty Tineo',
        proffesorCode: 'INF069',
        days: [
          {
            startHour: '07:45 PM',
            endHour: '09:30 PM',
            day: 'Viernes',
            classroom: 'B402',
          },
        ],
      },
      {
        name: 'Lab. Redes y Comunicaciones',
        professor: 'Gioberty Tineo',
        proffesorCode: 'INF069',
        days: [
          {
            startHour: '07:00 PM',
            endHour: '08:30 PM',
            day: 'Martes',
          },
        ],
      },
    ],
  },
];
