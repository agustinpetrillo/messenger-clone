"use client";

import { AvatarProps } from "@/types";
import Image from "next/image";
// import useActiveList from "@/hooks/useActiveList";

export default function Avatar({ user }: AvatarProps) {
  //   const { members } = useActiveList();
  //   const isActive = members.indexOf(user?.email!) !== -1;

  return (
    <div className="relative">
      <div className="relative inline-block overflow-hidden rounded-full h-9 w-9 md:h-11 md:w-11">
        <Image fill src={user?.image || "/imgs/placeholder.jpg"} alt="Avatar" />
      </div>
      {/* {isActive && (
        <span className="absolute top-0 right-0 block w-2 h-2 bg-green-500 rounded-full ring-2 ring-white md:h-3 md:w-3" />
      )} */}
    </div>
  );
}
