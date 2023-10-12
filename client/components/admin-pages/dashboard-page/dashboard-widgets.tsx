import { FC } from "react";
import UserAnalytics from "../users-analytics-page/users-analytics";
import { BiBorderLeft } from "react-icons/bi";
import { Box, CircularProgress } from "@mui/material";
import { PiUsersFourLight } from "react-icons/pi";
import OrdersAnalytics from "../orders-analytics-page/orders-analytics";
import AllInvoices from "../all-invoices";

interface Props {
  open?: boolean;
  value?: number;
}

const CircularProgressWithLabel: FC<Props> = ({ open, value }): JSX.Element => {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        value={value}
        size={45}
        color={value && value > 90 ? "info" : "error"}
        thickness={4}
        style={{ zIndex: open ? -1 : 1 }}
      />
      <Box
        sx={{
          inset: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></Box>
    </Box>
  );
};

const DashboardWidgets: FC<Props> = ({ open }): JSX.Element => {
  return (
    <div className="w-[90%] mx-auto mt-[100px] mb-12">
      <div className="grid grid-cols-[70%,30%] gap-4">
        <UserAnalytics isDashboard />

        <div>
          <div className="dark:bg-[#111C43] rounded-sm shadow-md border dark:border-none">
            <div className="flex items-center p-5 justify-between">
              <div className="">
                <BiBorderLeft className="dark:text-[#45CBA0] text-tertiary text-[30px]" />
                <h5 className="pt-2 dark:text-dark_text text-tertiary text-lg">
                  120
                </h5>
                <h5 className="py-2 dark:text-[#45CBA0] text-tertiary">
                  Sales Obtained
                </h5>
              </div>

              <div className="">
                <CircularProgressWithLabel open={open} value={100} />
                <h5 className="text-center pt-4">+120%</h5>
              </div>
            </div>
          </div>

          <div className="dark:bg-[#111C43] shadow-md border dark:border-none mt-7">
            <div className="flex items-center p-5 justify-between">
              <div className="">
                <PiUsersFourLight className="dark:text-[#45CBA0] text-tertiary text-[30px]" />
                <h5 className="pt-2 dark:text-dark_text text-tertiary">450</h5>
                <h5 className="pt-2 dark:text-[#45CBA0] text-tertiary">
                  New Users
                </h5>
              </div>

              <div className="">
                <CircularProgressWithLabel open={open} value={100} />
                <h5 className="text-center pt-4">+150%</h5>
              </div>
            </div>
          </div>
        </div>

        <OrdersAnalytics isDashboard />
        <AllInvoices isDashboard />
      </div>
    </div>
  );
};

export default DashboardWidgets;
