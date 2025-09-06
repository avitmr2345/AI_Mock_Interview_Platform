import React from "react";
import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";

const Page = async () => {
  const user = await getCurrentUser();

  if (!user || !user.name || !user.id) {
    return (
      <>
        <h3>Interview Generation</h3>
        <p className="flex justify-center">
          Please sign in to access the interview generation feature.
        </p>
      </>
    );
  }

  return (
    <>
      <h3>Interview Generation</h3>

      <Agent userName={user.name} userId={user.id} type="generate" />
    </>
  );
};
export default Page;
