import React, { FC, memo } from "react";

import { useSession, signIn, signOut } from "next-auth/client";

export const RightHeaderHalf: FC = memo(() => {
  const [session, isLoading] = useSession();

  if (isLoading) {
    return <span>Validating session ...</span>;
  }

  if (!session) {
    return (
      <button type="button" onClick={() => signIn()}>
        Sign In
      </button>
    );
  }

  return (
    <div>
      <button type="button">Characters</button>
      <button type="button" onClick={() => signOut()}>
        <a>Log out</a>
      </button>
    </div>
  );
});
