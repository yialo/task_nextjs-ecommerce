import { cn } from '@/shared/lib/cn';

interface Props {
  children: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
  type?: HTMLButtonElement['type'];
  variant?: 'positive' | 'negative' | 'neutral';
}

export const Button: React.FC<Props> = ({
  children,
  className,
  disabled,
  type = 'button',
  variant = 'positive',
  onClick,
}) => {
  return (
    <button
      className={cn(
        'rounded-md px-4 py-3 text-lg font-medium transition-colors duration-100 hover:text-slate-950',
        {
          'bg-pink-200 hover:bg-pink-300 active:bg-pink-100':
            variant === 'positive',
          'bg-amber-200 hover:bg-amber-300 active:bg-amber-100':
            variant === 'neutral',
          'bg-slate-900 text-white hover:bg-slate-800 hover:text-slate-50 active:bg-slate-700':
            variant === 'negative',
        },
        className,
      )}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
