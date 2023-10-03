'use client';

import * as React from 'react';
import { Button } from '@/shared/ui/button';

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
      <Button variant="negative" onClick={reset}>
        Try again
      </Button>
    </div>
  );
};

export default ErrorBoundary;
