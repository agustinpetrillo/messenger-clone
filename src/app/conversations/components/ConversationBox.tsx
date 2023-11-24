"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Conversation, Message, User } from "@prisma/client";
import { format } from "date-fns";
import clsx from "clsx";
import useOtherUser from "@/hooks/useOtherUser";
import Avatar from "@/components/Avatar";
import { ConversationBoxProps } from "@/types";

export default function ConversationBox({
  data,
  selected,
}: ConversationBoxProps) {
  const session = useSession();
  const router = useRouter();
  const otherUser = useOtherUser(data);

  const handleClick = () => {
    router.push(`/conversations/${data.id}`);
  };

  const lastMessage = useMemo(() => {
    const messages = data.messages || [];

    return messages[messages.length - 1];
  }, [data.messages]);

  const userEmail = useMemo(() => {
    return session?.data?.user?.email;
  }, [session?.data?.user?.email]);

  const hasSeen = useMemo(() => {
    if (!lastMessage) return false;

    const seenArray = lastMessage.seen || [];

    if (!userEmail) return false;

    return seenArray.filter((user) => user.email === userEmail).length !== 0;
  }, [lastMessage, userEmail]);

  const lastMessageText = useMemo(() => {
    if (lastMessage?.image) return "Sent an image";

    if (lastMessage?.body) return lastMessage?.body;

    return "Started a conversation";
  }, [lastMessage]);

  return (
    <div
      onClick={() => handleClick()}
      className={clsx(
        "w-full relative p-3 flex items-center space-x-3 hover:bg-neutral-100 rounded-lg transition cursor-pointer",
        selected ? "bg-neutral-100" : "bg-white"
      )}
    >
      <Avatar user={otherUser} />
      <div className="flex-1 min-w-0">
        <div className="focus:outline-none">
          <div className="flex items-center justify-between mb-1">
            <p className="font-medium text-gray-900 text-md">
              {data.name || otherUser.name}
            </p>
            {lastMessage?.createdAt && (
              <p className="text-xs font-light text-gray-400">
                {format(new Date(lastMessage.createdAt), "p")}
              </p>
            )}
          </div>
          <p
            className={clsx(
              "text-sm truncate",
              hasSeen ? "text-gray-500" : "text-black font-medium"
            )}
          >
            {lastMessageText}
          </p>
        </div>
      </div>
    </div>
  );
}
