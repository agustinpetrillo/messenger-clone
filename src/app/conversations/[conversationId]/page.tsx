import getConversationById from "@/actions/getConversationById";
import getMessages from "@/actions/getMessages";
import EmptyState from "@/components/EmptyState";
import Header from "./components/Header";

export default async function ConversationId({ params }: { params: string }) {
  const conversation = await getConversationById(params);
  const messages = await getMessages(params);

  if (!conversation) {
    return (
      <div className="h-full lg:pl-80">
        <div className="flex flex-col h-full">
          <EmptyState />
        </div>
      </div>
    );
  }

  return (
    <div className="h-full lg:pl-80">
      <div className="flex flex-col h-full">
        <Header conversation={conversation} />
      </div>
    </div>
  );
}
