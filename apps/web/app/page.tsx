import { Button } from "@workspace/ui/components/button";
import { PageClient } from "./page.client";
import { env } from "@workspace/env";

export default function Page() {
  const _ = env.WHATSAPP_API_ACCESS_TOKEN;
  // do something with _
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World This is static page</h1>
        <PageClient />
        <Button size="sm">Button</Button>
      </div>
    </div>
  );
}
