import { syncUserUpdate } from "@/config/inngest"; // ✅ This matches the actual export


import { inngest, syncUserCreation, syncUserDeletion, syncUserUpdation} from "@/config/inngest";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
   syncUserCreation,
   syncUserUpdation,
   syncUserDeletion,

  ],
});
