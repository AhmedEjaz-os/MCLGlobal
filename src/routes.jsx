import dashboardIcon from "/images/sidebarAssets/dashboard.svg";
import applicationManagementIcon from "/images/sidebarAssets/applicationManagement.svg";
import commissionModule from "/images/sidebarAssets/commissionModule.svg";
import noticesSetup from "/images/sidebarAssets/noticesSetup.svg";
import ticketManagement from "/images/sidebarAssets/ticketManagement.svg";
import historyAndRecords from "/images/sidebarAssets/historyAndRecords.svg";
import searchCourses from "/images/sidebarAssets/searchCourses.svg";
import emailSystem from "/images/sidebarAssets/emailSystem.svg";
import stats from "/images/sidebarAssets/stats.svg";
import studentManagement from "/images/sidebarAssets/studentManagement.svg";

const routes = () => {
  return [
    {
      path: "/dashboard",
      component: <></>,
      name: "Dashboard",
      icon: dashboardIcon,
    },
    {
      path: "/application-management",
      component: <></>,
      name: "Application Management",
      icon: applicationManagementIcon,
    },
    {
      path: "/commission-module",
      component: <></>,
      name: "Commission Module",
      icon: commissionModule,
    },
    {
      path: "/notices-setup",
      component: <></>,
      name: "Notices Setup",
      icon: noticesSetup,
    },
    {
      path: "/ticket-management",
      component: <></>,
      name: "Ticket Management",
      icon: ticketManagement,
    },
    {
      path: "/history-and-records",
      component: <></>,
      name: "History And Records",
      icon: historyAndRecords,
    },
    {
      path: "/search-courses",
      component: <></>,
      name: "Search Courses",
      icon: searchCourses,
    },
    {
      path: "/email-system",
      component: <></>,
      name: "In-App Email System",
      icon: emailSystem,
    },
    {
      path: "/stats-dashboard",
      component: <></>,
      name: "Stats Dashboard",
      icon: stats,
    },
    {
      path: "/student-management",
      component: <></>,
      name: "Student Management",
      icon: studentManagement,
    },
  ];
};

export default routes;
