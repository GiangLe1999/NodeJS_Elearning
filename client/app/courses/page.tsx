import Header from "@/components/layout/header";
import { FC } from "react";

interface Props {}

const page: FC<Props> = (props): JSX.Element => {
  return (
    <div className="min-h-screen">
      <Header />
    </div>
  );
};

export default page;
