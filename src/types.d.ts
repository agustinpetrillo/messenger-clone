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
