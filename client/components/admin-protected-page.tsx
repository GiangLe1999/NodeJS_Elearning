import useIsAdmin from "@/hooks/useIsAdmin";
import { redirect } from "next/navigation";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AdminProtectedPage: FC<Props> = ({ children }) => {
  const isAdmin = useIsAdmin();

  return isAdmin ? children : redirect("/");
};

export default AdminProtectedPage;
