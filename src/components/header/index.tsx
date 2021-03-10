import React, { FC, memo } from "react";
import Link from "next/link";
import classnames from "classnames";
import { useSession, signIn, signOut } from "next-auth/client";

export const Header: FC = memo(() => {
  const [session, isLoading] = useSession();

  const renderRightheaderPart = () => {
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
  };

  return (
    <header
      className={classnames(
        "flex",
        "flex-row",
        "justify-between",
        "p-2",
        "bg-gray-600",
        "text-sm"
      )}
    >
      <Link href="/">
        <a>Menu</a>
      </Link>
      {renderRightheaderPart()}
    </header>
  );
});
