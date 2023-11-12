type LoginOrRegister = "LOGIN" | "REGISTER";

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
}

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
}

interface AuthSocialButtonProps {
  icon: IconType;
  onClick: () => void;
}

interface AuthContextProps {
  children: React.ReactNode;
}

interface DesktopItemProps {
  label: string;
  icon: Icon;
  href: string;
  onClick?: () => void;
  active?: boolean;
}

interface MobileItemProps {
  href: string;
  icon: any;
  active?: boolean;
  onClick?: () => void;
}

interface DesktopSidebarProps {
  currentUser: User;
}

interface AvatarProps {
  user?: User;
}

interface UserListProps {
  items: User[];
}

interface UserBoxProps {
  data: User;
}
