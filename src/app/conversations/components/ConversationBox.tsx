"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Conversation, Message, User } from "@prisma/client";
import { format } from "date-fns";
import clsx from "clsx";

export default function ConversationBox({
  data,
  selected,
}: ConversationBoxProps) {
  return (
    <div>
      <div></div>
    </div>
  );
}
