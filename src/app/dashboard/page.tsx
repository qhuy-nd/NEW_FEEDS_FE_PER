import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../lib/auth";
import DashboardPage from "../../screens/dashboard/DashboardPage";

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/");
  }

  return <DashboardPage />;
}
