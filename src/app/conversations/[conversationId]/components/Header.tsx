"use client";

import { useMemo } from "react";
import Link from "next/link";
import { HiChevronLeft, HiEllipsisHorizontal } from "react-icons/hi2";
import useOtherUser from "@/hooks/useOtherUser";
import { HeaderProps } from "@/types";
import Avatar from "@/components/Avatar";

export default function Header({ conversation }: HeaderProps) {
  const otherUser = useOtherUser(conversation);

  const statusText = useMemo(() => {
    if (conversation.isGroup) return `${conversation.users.length} members`;
    return "active";
  }, [conversation]);
  return (
    <div className="flex items-center justify-between w-full bg-white border-b shadow-sm sm:px-4 py:3 px:4 lg:px-6">
      <div className="flex items-center gap-3">
        <Link
          className="block transition cursor-pointer lg:hidden text-sky-500 hover:text-sky-600"
          href="/conversations"
        >
          <HiChevronLeft size={32} />
        </Link>
        <Avatar user={otherUser} />
        <div className="flex flex-col">
          <div>{conversation.name || otherUser.name}</div>
          <div className="text-sm font-light text-neutral-500">
            {statusText}
          </div>
        </div>
      </div>
      <HiEllipsisHorizontal
        size={32}
        onClick={() => {}}
        className="transition cursor-pointer text-sky-500 hover:text-sky-600"
      />
    </div>
  );
}
