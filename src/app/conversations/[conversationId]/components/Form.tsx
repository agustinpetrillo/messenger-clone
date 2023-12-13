"use client";

import axios from "axios";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useConversation from "@/hooks/useConversation";
import MessageInput from "./MessageInput";
import { HiPaperAirplane, HiPhoto } from "react-icons/hi2";

export default function Form() {
  const { conversationId } = useConversation();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: { message: "" },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setValue("meesage", "", { shouldValidate: true });
    axios.post("/api/messages", {
      ...data,
      conversationId,
    });
  };

  return (
    <div className="flex items-center w-full gap-2 p-4 bg-white border-t lg:gap-4">
      <HiPhoto size={30} className="text-sky-500" />
      <form
        onSubmit={() => handleSubmit(onSubmit)}
        className="flex items-center w-full gap-2 lg:gap-4"
      >
        <MessageInput
          id="message"
          register={register}
          errors={errors}
          required
          placeholder="Write a message..."
        />
        <button
          type="submit"
          className="p-2 transition rounded-full cursor-pointer bg-sky-500 hover:bg-sky-600"
        >
          <HiPaperAirplane size={18} className="text-white" />
        </button>
      </form>
    </div>
  );
}
