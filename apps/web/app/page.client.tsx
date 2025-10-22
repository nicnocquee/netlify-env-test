"use client";

import { env } from "@workspace/env";

export const PageClient = () => {
  return (
    <div>
      <h1>Hello World: {env.NEXT_PUBLIC_PUBLIC_KEY}</h1>
    </div>
  );
};
