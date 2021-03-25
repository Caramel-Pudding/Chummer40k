import React, { FC, memo } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import classnames from "classnames";
import { useSession, signIn, signOut } from "next-auth/client";

export const Header: FC = memo(() => {
  const [session, isLoading] = useSession();
  const currentPath = useRouter().pathname;

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
      <div>
        <Link href="/">
          <a>Menu</a>
        </Link>
        <Link href="/inventory">
          <a>Inventory</a>
        </Link>
      </div>
      <h1>{currentPath}</h1>
      {renderRightheaderPart()}
    </header>
  );
});
