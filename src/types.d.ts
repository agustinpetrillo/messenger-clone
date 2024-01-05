import { Conversation, Message } from "@prisma/client";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export type LoginOrRegister = "LOGIN" | "REGISTER";

export interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
}

export interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
}

export interface AuthSocialButtonProps {
  icon: IconType;
  onClick: () => void;
}

export interface AuthContextProps {
  children: React.ReactNode;
}

export interface DesktopItemProps {
  label: string;
  icon: Icon;
  href: string;
  onClick?: () => void;
  active?: boolean;
}

export interface MobileItemProps {
  href: string;
  icon: any;
  active?: boolean;
  onClick?: () => void;
}

export interface DesktopSidebarProps {
  currentUser: User;
}

export interface AvatarProps {
  user?: User;
}

export interface UserListProps {
  items: User[];
}

export interface UserBoxProps {
  data: User;
}

export interface ConversationListProps {
  initialItems: FullConversationType[];
}

export interface FullMessageType extends Message {
  sender: User;
  seen: User[];
}

export interface FullConversationType extends Conversation {
  users: User[];
  messages: FullMessageType[];
}

export interface ConversationBoxProps {
  data: FullConversationType;
  selected?: boolean;
}

export interface HeaderProps {
  conversation: Conversation & {
    users: User[];
  };
}

export interface MessageInputProps {
  id: string;
  placeholder?: string;
  type?: string;
  errors: FieldErrors;
  register: UseFormRegister<FieldValues>;
  required?: boolean;
}

export interface BodyProps {
  initialMessages: FullMessageType[];
}

export interface MessageBoxProps {
  data: FullMesageType;
  isLast?: boolean;
}
