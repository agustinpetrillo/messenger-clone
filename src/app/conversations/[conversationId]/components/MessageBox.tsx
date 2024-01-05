"use client";

import { useSession } from "next-auth/react";
import { MessageBoxProps } from "@/types";

export default function MessageBox({ data, isLast }: MessageBoxProps) {
  const session = useSession();

  const isOwn = session?.data?.user?.email === data?.sender?.email;
  const seenList = (data.seen || [])
    .filter((user: any) => user.email !== data?.sender?.email)
    .map((user: any) => user.name)
    .join(", ");

  return (
    <div>
      <div></div>
    </div>
  );
}
