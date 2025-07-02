import icons from "./svgIcons/sidebarIcons";

const {
  dashboardIcon,
  applicationManagementIcon,
  commissionModule,
  noticesSetup,
  ticketManagement,
  historyAndRecords,
  searchCourses,
  emailSystem,
  stats,
  studentManagement,
} = icons();
const routes = () => {
  return [
    {
      path: "/admin/dashboard",
      component: <></>,
      name: "Dashboard",
      icon: dashboardIcon,
    },
    {
      path: "/admin/application-management",
      component: <></>,
      name: "Application Management",
      icon: applicationManagementIcon,
    },
    {
      path: "/admin/commission-module",
      component: <></>,
      name: "Commission Module",
      icon: commissionModule,
    },
    {
      path: "/admin/notices-setup",
      component: <></>,
      name: "Notices Setup",
      icon: noticesSetup,
    },
    {
      path: "/admin/ticket-management",
      component: <></>,
      name: "Ticket Management",
      icon: ticketManagement,
    },
    {
      path: "/admin/history-and-records",
      component: <></>,
      name: "History And Records",
      icon: historyAndRecords,
    },
    {
      path: "/admin/search-courses",
      component: <></>,
      name: "Search Courses",
      icon: searchCourses,
    },
    {
      path: "/admin/email-system",
      component: <></>,
      name: "In-App Email System",
      icon: emailSystem,
    },
    {
      path: "/admin/stats-dashboard",
      component: <></>,
      name: "Stats Dashboard",
      icon: stats,
    },
    {
      path: "/admin/student-management",
      component: <></>,
      name: "Student Management",
      icon: studentManagement,
    },
  ];
};

export default routes;
