"use client";
import { Suspense } from "react";
import Heading from "@/components/heading";
import Header from "@/components/layout/header";
import Profile from "@/components/profile-page/profile";
import ProtectedPage from "@/components/protected-page";
import useUserInfo from "@/hooks/useUserInfo";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import Loading from "../loading";

interface Props {}

const ProfilePage: NextPage<Props> = () => {
  const user = useUserInfo();

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <ProtectedPage>
      <Heading
        title={`${user.name} Profile`}
        description={`${user.name} Profile at Elearning website.`}
      />
      <div className="min-h-screen">
        <Header />

        <div className="mt-28 container">
          <Profile />
        </div>
      </div>
    </ProtectedPage>
  );
};

export default ProfilePage;
