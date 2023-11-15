"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { MdOutlineGroupAdd } from "react-icons/md";
import useConversation from "@/hooks/useConversation";
import ConversationBox from "./ConversationBox";

export default function ConversationList({
  initialItems,
}: ConversationListProps) {
  const { conversationId, isOpen } = useConversation();
  const router = useRouter();
  const [items, setItems] = useState<FullConversationType[]>(initialItems);

  return (
    <aside
      className={clsx(
        "fixed inset-y-0 pb-20 lg:pb-0 lg:left-20 lg:w-80 lg:block overflow-y-auto border-r border-gray-200",
        isOpen ? "hidden" : "block w-full left-0"
      )}
    >
      <div className="px-5">
        <div className="flex justify-between pt-4 mb-4">
          <h5 className="text-2xl font-bold text-neutral-800">Messages</h5>
          <div className="p-2 text-gray-600 transition bg-gray-100 rounded-full cursor-pointer hover:opacity-75">
            <MdOutlineGroupAdd size={20} />
          </div>
        </div>
        {items.map((item) => (
          <ConversationBox
            key={item.id}
            data={item}
            selected={conversationId === item.id}
          />
        ))}
      </div>
    </aside>
  );
}
