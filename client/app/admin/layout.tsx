"use client";

import AdminHeader from "@/components/admin-pages/layout/admin-header";
import AdminSidebar from "@/components/admin-pages/layout/admin-sidebar";
import AdminProtectedPage from "@/components/admin-protected-page";
import { FC, ReactNode, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
}

const AdminLayout: FC<Props> = ({ children }): JSX.Element | null => {
  const [hasMounted, setHasMounted] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <AdminProtectedPage>
      <div className="flex min-h-screen">
        <div className={`${!isCollapsed ? "w-[20%]" : "w-[5%]"}`}>
          <AdminSidebar
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
          />
        </div>

        <div className="flex-1 transition">
          <AdminHeader />
          {children}
        </div>
      </div>
    </AdminProtectedPage>
  );
};

export default AdminLayout;
