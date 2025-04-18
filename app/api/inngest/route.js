import { inngest, syncUserCreation, syncUserDeletion, syncUserUpdate } from "@/config/inngest";


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
