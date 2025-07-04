import Box from "@mui/material/Box";
import WelcomeCard from "./dashboardComponents/WelcomeCard";
import DashboardStatsCard from "./dashboardComponents/DashboardStatsCard";
import {
  UserOneIcon,
  UserTwoIcon,
  UserThreeIcon,
  UserFourIcon,
} from "./dashboardComponents/DashboardIcons";
import ConstantString from "../../ConstantString";
import CourseApplication from "./dashboardComponents/CourseApplication";

function Dashboard() {
  const statsCard = [
    {
      icon: UserOneIcon(),
      cardNumber: 89,
      cardTitle: ConstantString.DASHBOARD_STATS_CARD_TITLE_1,
      cartStatus: "+12% from last month",
      statsColor: "#19B32B",
    },
    {
      icon: UserTwoIcon(),
      cardNumber: 45,
      cardTitle: ConstantString.DASHBOARD_STATS_CARD_TITLE_2,
      cartStatus: "Requires attention",
      statsColor: "#CAA201",
    },
    {
      icon: UserThreeIcon(),
      cardNumber: 78,
      cardTitle: ConstantString.DASHBOARD_STATS_CARD_TITLE_3,
      cartStatus: "+8% from last month",
      statsColor: "#19B32B",
    },
    {
      icon: UserFourIcon(),
      cardNumber: 11,
      cardTitle: ConstantString.DASHBOARD_STATS_CARD_TITLE_4,
      cartStatus: "-12% from last month",
      statsColor: "#B31942",
    },
  ];

  return (
    <Box>
      <WelcomeCard />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "21.85px",
          maxWidth: "100%",
          flexWrap: "wrap",
        }}
      >
        {statsCard.map(
          ({ icon, cardNumber, cardTitle, cartStatus, statsColor }, index) => (
            <DashboardStatsCard
              key={index}
              icon={icon}
              cardNumber={cardNumber}
              cardTitle={cardTitle}
              cartStatus={cartStatus}
              statsColor={statsColor}
            />
          )
        )}
      </Box>
      <Box
        sx={{
          backgroundColor: "#DFEDFF",
          borderRadius: "10px",
          padding: "33px 21px",
          marginTop: "26.59px",
        }}
      >
        <CourseApplication />
      </Box>
    </Box>
  );
}

export default Dashboard;
