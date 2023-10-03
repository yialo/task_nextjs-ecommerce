import { cn } from '@/shared/lib/cn';

interface Props {
  children: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: HTMLButtonElement['type'];
}

export const Button: React.FC<Props> = ({
  children,
  className,
  type = 'button',
  onClick,
}) => {
  return (
    <button
      className={cn(
        'rounded bg-pink-200 px-4 py-3 text-lg font-medium transition-colors duration-100 hover:bg-pink-300 hover:text-slate-950',
        className,
      )}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
