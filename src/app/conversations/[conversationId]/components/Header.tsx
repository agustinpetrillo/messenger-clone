"use client";

import useOtherUser from "@/hooks/useOtherUser";
import { HeaderProps } from "@/types";
import { useMemo } from "react";

export default function Header({ conversation }: HeaderProps) {
  const otherUser = useOtherUser(conversation);

  const statusText = useMemo(() => {
    if (conversation.isGroup) return `${conversation.users.length} members`;
    return "active";
  }, [conversation]);
  return (
    <div>
      <div></div>
    </div>
  );
}
