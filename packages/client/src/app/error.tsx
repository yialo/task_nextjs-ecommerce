'use client';

import * as React from 'react';

interface Props {
  error: Error;
  reset: () => void;
}

const ErrorBoundary: React.FC<Props> = ({ error, reset }) => {
  React.useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="page-center-container px-8 py-6">
      <p className="mb-4 text-xl font-medium">Something went wrong!</p>
      <button
        className="rounded-lg bg-slate-900 px-4 py-3 text-white"
        type="button"
        onClick={reset}
      >
        Try again
      </button>
    </div>
  );
};

export default ErrorBoundary;
