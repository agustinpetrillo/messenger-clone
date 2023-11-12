"use client";

import UserBox from "./UserBox";

export default function UserList({ items }: UserListProps) {
  return (
    <aside className="fixed inset-y-0 left-0 block w-full pb-20 overflow-y-auto border-r border-gray-200 lg:pb-0 lg:left-20 lg:w-80 lg:block">
      <div className="px-5">
        <div className="flex flex-col">
          <h5 className="py-4 text-2xl font-bold text-neutral-800">People</h5>
        </div>
        {items.map((user) => (
          <UserBox key={user.id} data={user} />
        ))}
      </div>
    </aside>
  );
}
