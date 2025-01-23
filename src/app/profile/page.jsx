import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    return redirect("/api/auth/login");
  }

  return (
    <div
      style={{
        backgroundImage: "url(/pexels-pixabay-220116.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="py-10"
    >
      <div className="relative z-10 flex flex-col items-center justify-center text-white">
        <h2 className="text-4xl font-semibold text-accent mb-4 border-2 rounded-3xl p-3 border-accent">
          Welcome to your profile {user?.given_name} {user?.family_name}!
        </h2>
      </div>
    </div>
  );
}
