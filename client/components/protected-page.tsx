import { FC, ReactNode } from "react";
import { redirect } from "next/navigation";
import useIsUser from "@/hooks/useIsUser";

interface Props {
  children: ReactNode;
}

const ProtectedPage: FC<Props> = ({ children }) => {
  const isUser = useIsUser();
  return isUser ? children : redirect("/");
};

export default ProtectedPage;
