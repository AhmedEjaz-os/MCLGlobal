import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./components/auth/login";
import RegisterPage from "./components/auth/register";
import DashboardTemplate from "./components/dashboard/template/dashboardTemplate";
import Dashboard from "./components/dashboard/dashboard";
import ApplicationManagement from "./components/dashboard/ApplicationManagement";
import CommissionModule from "./components/dashboard/CommissionModule";
import EmailSystem from "./components/dashboard/EmailSystem";
import HistoryAndRecords from "./components/dashboard/HistoryAndRecords";
import NoticesSetup from "./components/dashboard/NoticesSetup";
import SearchCourses from "./components/dashboard/SearchCourses";
import StatsDashboard from "./components/dashboard/StatsDashboard";
import StudentManagement from "./components/dashboard/StudentManagement";
import TicketManagement from "./components/dashboard/TicketManagement";
import AgreeementScreen from "./components/auth/AgreeementScreen";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/agreement" element={<AgreeementScreen />} />
          <Route path="/admin" element={<DashboardTemplate />}>
            <Route index path="/admin/dashboard" element={<Dashboard />} />
            <Route
              index
              path="/admin/application-management"
              element={<ApplicationManagement />}
            />
            <Route
              index
              path="/admin/commission-module"
              element={<CommissionModule />}
            />
            <Route index path="/admin/email-system" element={<EmailSystem />} />
            <Route
              index
              path="/admin/history-and-records"
              element={<HistoryAndRecords />}
            />
            <Route
              index
              path="/admin/notices-setup"
              element={<NoticesSetup />}
            />
            <Route
              index
              path="/admin/search-courses"
              element={<SearchCourses />}
            />
            <Route
              index
              path="/admin/stats-dashboard"
              element={<StatsDashboard />}
            />
            <Route
              index
              path="/admin/student-management"
              element={<StudentManagement />}
            />
            <Route
              index
              path="/admin/ticket-management"
              element={<TicketManagement />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
