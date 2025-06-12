import type { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  subtitleLink?: {
    text: string;
    to: string;
  };
}

const AuthLayout = ({ children, title, subtitle, subtitleLink }: AuthLayoutProps) => {
  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-2xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
            {title}
          </h2>
          {subtitle && subtitleLink && (
            <p className="mt-2 text-center text-sm text-gray-600">
              {subtitle}{' '}
              <a
                href={subtitleLink.to}
                className="font-medium text-orange-500 hover:text-orange-600"
              >
                {subtitleLink.text}
              </a>
            </p>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout; 