import { inngest, syncUserCreation, syncUserDeletion, syncUserUpdate } from "@/config/inngest";
import { serve } from "inngest/next"; // ✅ required for Next.js API route



// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUpdate, // ✅ this should match the actual function name
    syncUserDeletion,
  ]
  ,
});
