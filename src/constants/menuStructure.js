export const menuStructure = [
  {
    title: "Главная",
    link: "/"
  },
  {
    title: "Отчёты",
    link: "/reports",
    dropdown: [
      {
        title: "Показатели оценки довузовских общеобразовательных организаций (общий)",
        link: "/reports/general_statistic_all"
      },      
      {
        title: "Показатели оценки довузовских общеобразовательных организаций",
        link: "/reports/general_statistic_one/"
      },      
    ]
  },
  {
    title: "Справочники",
    link: "/publishers",
    dropdown: [
      {
        title: "Организации",
        link: "/organization"
      },
    ]
  },
  
];
