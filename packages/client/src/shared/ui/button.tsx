import { cn } from '@/shared/lib/cn';

interface Props {
  children: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: HTMLButtonElement['type'];
  variant?: 'positive' | 'negative';
}

export const Button: React.FC<Props> = ({
  children,
  className,
  type = 'button',
  variant = 'positive',
  onClick,
}) => {
  return (
    <button
      className={cn(
        'rounded-md px-4 py-3 text-lg font-medium transition-colors duration-100 hover:text-slate-950',
        variant === 'positive'
          ? 'bg-pink-200 hover:bg-pink-300 active:bg-pink-100'
          : 'bg-amber-200 hover:bg-amber-300 active:bg-amber-100',
        className,
      )}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
