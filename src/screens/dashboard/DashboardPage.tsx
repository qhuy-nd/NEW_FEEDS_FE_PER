"use client";

import BoxContainer from "../../atoms/box";
import Typography from "../../atoms/typography";
import ListPost from "../../features/lists/list-posts";
import Button from "../../atoms/button";
import ModalFileUpload from "../../features/modals/modal-file-upload";
import { CirclePlus, LogOut } from "lucide-react";
import { useAuth } from "../../context/auth/useAuth";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const { logout, user } = useAuth();
  const router = useRouter();

  const onLogout = () => {
    logout();
    router.push("/");
  }

  return (
    <BoxContainer>
      <div className="flex items-center justify-between gap-4">
        <div>
          <Typography as="h1">Dashboard</Typography>
          <Typography as="p">Welcome{user?.username ? `, ${user.username}` : ""}!</Typography>
        </div>

        <Button type="button" variant="secondary" onClick={onLogout}>
          <LogOut size={18} />
          Logout
        </Button>
      </div>

      <ModalFileUpload
        title="Create a new post"
        trigger={
          <Button iconOnly size="md">
            <CirclePlus size={30}/>
          </Button>
        }
        onSuccess={() => {
          console.log("Post created successfully!");
        }}
      />

      <ListPost />
    </BoxContainer>
  );
}
