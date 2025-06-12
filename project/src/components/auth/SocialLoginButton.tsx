import type { IconType } from 'react-icons';
import type { ReactNode } from 'react';

interface SocialLoginButtonProps {
  icon?: IconType;
  customIcon?: ReactNode;
  text: string;
  iconColor?: string;
  onClick?: () => void;
}

const SocialLoginButton = ({ icon: Icon, customIcon, text, iconColor, onClick }: SocialLoginButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
    >
      {customIcon || (Icon && <Icon className={`text-xl ${iconColor || ''}`} />)}
      <span className="ml-2">{text}</span>
    </button>
  );
};

export default SocialLoginButton; 