import Index from '../components/Layout/Index/Index';
import GeneralStatisticsAll from  '../components/containers/GeneralStatisticsAll/GeneralStatisticsAll';
import GeneralStatisticsOne from '../components/containers/GeneralStatisticsOne/GeneralStatisticsOne';
import OrganizationList from '../components/containers/OrganizationList/OrganizationList';

export const routes = [
    {
      path: '/reports/general_statistic_all',
      component: GeneralStatisticsAll,
    },
    {
      path: '/reports/general_statistic_one/:id?',
      component: GeneralStatisticsOne
    },
    {
      path: '/organization',
      component: OrganizationList,
    },
    {
      path: ["/", "/reports", "/publishers"],
      component: Index,
    },
  ]
