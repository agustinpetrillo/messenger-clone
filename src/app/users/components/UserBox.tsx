"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Avatar from "@/components/Avatar";

export default function UserBox({ data }: UserBoxProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = () => {
    setIsLoading(true);

    axios
      .post("/api/conversations", {
        userId: data.id,
      })
      .then((data) => {
        router.push(`/conversations/${data.data.id}`);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div
      onClick={() => handleClick()}
      className="relative flex items-center w-full p-3 space-x-3 transition bg-white rounded-lg cursor-pointer hover:bg-neutral-100"
    >
      <Avatar user={data} />
      <div className="flex-1 min-w-0">
        <div className="focus:outline-none">
          <div className="flex items-center justify-between mb-1">
            <p className="text-sm font-medium text-gray-900">{data.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
