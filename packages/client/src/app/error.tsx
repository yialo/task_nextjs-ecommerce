'use client';

import * as React from 'react';

interface Props {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: Props) {
  React.useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="page-center-container">
      <p className="text-xl">Something went wrong!</p>
      <button type="button" onClick={reset}>
        Try again
      </button>
    </div>
  );
}
