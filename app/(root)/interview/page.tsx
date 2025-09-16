import React from "react";
import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";

const InterviewPage = async () => {
  const user = await getCurrentUser();
  const isInvalidUser = !user || !user.name || !user.id;

  if (isInvalidUser) {
    return (
      <p className="flex justify-center">
        Please sign in to access the interview generation feature.
      </p>
    );
  }

  return (
    <>
      <h3>Interview Generation</h3>
      <Agent userName={user.name} userId={user.id} type="generate" />
    </>
  );
};

export default InterviewPage;
