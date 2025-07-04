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
      name: "Dashboard",
      icon: dashboardIcon,
    },
    {
      path: "/admin/application-management",
      name: "Application Management",
      icon: applicationManagementIcon,
    },
    {
      path: "/admin/commission-module",
      name: "Commission Module",
      icon: commissionModule,
    },
    {
      path: "/admin/notices-setup",
      name: "Notices Setup",
      icon: noticesSetup,
    },
    {
      path: "/admin/ticket-management",
      name: "Ticket Management",
      icon: ticketManagement,
    },
    {
      path: "/admin/history-and-records",
      name: "History And Records",
      icon: historyAndRecords,
    },
    {
      path: "/admin/search-courses",
      name: "Search Courses",
      icon: searchCourses,
    },
    {
      path: "/admin/email-system",
      name: "In-App Email System",
      icon: emailSystem,
    },
    {
      path: "/admin/stats-dashboard",
      name: "Stats Dashboard",
      icon: stats,
    },
    {
      path: "/admin/student-management",
      name: "Student Management",
      icon: studentManagement,
    },
  ];
};

export default routes;
