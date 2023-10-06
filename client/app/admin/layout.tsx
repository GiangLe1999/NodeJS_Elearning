"use client";

import AdminHeader from "@/components/admin-pages/layout/admin-header";
import AdminSidebar from "@/components/admin-pages/layout/admin-sidebar";
import AdminProtectedPage from "@/components/admin-protected-page";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const layout: FC<Props> = ({ children }): JSX.Element => {
  return (
    <AdminProtectedPage>
      <div className="flex min-h-screen">
        <div className="w-1/5">
          <AdminSidebar />
        </div>

        <div className="flex-1">
          <AdminHeader />
          {children}
        </div>
      </div>
    </AdminProtectedPage>
  );
};

export default layout;
