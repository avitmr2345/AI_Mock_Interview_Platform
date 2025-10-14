import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { getCurrentUser, isAuthenticated } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/actions/auth.action";

const Layout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();

  if (!isUserAuthenticated) redirect("/sign-in");

  const user = await getCurrentUser();

  return (
    <div className="root-layout">
      <nav className="flex justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Logo" width={38} height={32} />
          <h2 className="text-primary-100">TechAce</h2>
        </Link>
        <div className="flex items-center gap-6">
          <p className="capitalize text-xl text-primary-100 font-bold max-sm:gap-4">
            {user?.name}
          </p>
          <Button className="text-[14px] text-red-600 font-bold" onClick={signOut}>
            Sign Out
          </Button>
        </div>
      </nav>

      {children}
    </div>
  );
};

export default Layout;
