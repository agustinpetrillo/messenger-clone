"use client";

import { MessageInputProps } from "@/types";

export default function MessageInput({
  id,
  placeholder,
  type,
  errors,
  register,
  required,
}: MessageInputProps) {
  return (
    <div className="relative w-full">
      <input
        type={type}
        id={id}
        autoComplete={id}
        {...register(id, { required })}
        placeholder={placeholder}
        className="w-full px-4 py-2 font-light text-black rounded-full bg-neutral-100 focus:outline-none"
      />
    </div>
  );
}
