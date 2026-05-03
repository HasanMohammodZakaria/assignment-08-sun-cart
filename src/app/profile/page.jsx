"use client";
import { UpdateUserInfoModal } from "@/components/shared/UpdateUserInfoModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";

const MyProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  console.log(user, "user");
  return (
    <div className="my-15">
      <Card className="max-w-96 mx-auto flex flex-col items-center border">
        <Avatar className="w-30 h-30">
          <Avatar.Image
            alt={user?.name}
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
        </Avatar>
        <h2 className="text-xl font-bold text-[#005691]">{user?.name}</h2>
        <p className="text-muted">{user?.email}</p>
        <UpdateUserInfoModal />
      </Card>
    </div>
  );
};

export default MyProfilePage;
