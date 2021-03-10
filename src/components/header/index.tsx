import React, { FC, memo } from "react";
import Link from "next/link";
import classnames from "classnames";
import { signOut, useSession } from "next-auth/client";

export const Header: FC = memo(() => {
  const [session, isLoading] = useSession();

  const renderRightheaderPart = () => {
    if (isLoading) {
      return <span>Validating session ...</span>;
    }

    if (!session) {
      return (
        <div>
          <Link href="/api/auth/signin">
            <a>Sign in</a>
          </Link>
          <Link href="/api/auth/signin">
            <a>Log in</a>
          </Link>
        </div>
      );
    }

    return (
      <div>
        <button type="button">{session.user.name} Characters</button>
        <button type="button" onClick={() => signOut()}>
          <a>Log out</a>
        </button>
      </div>
    );
  };

  return (
    <header
      className={classnames(
        "flex",
        "flex-row",
        "justify-between",
        "bg-gray-600"
      )}
    >
      <Link href="/">
        <a>Menu</a>
      </Link>
      {renderRightheaderPart()}
    </header>
  );
});
