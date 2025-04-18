import { Inngest } from "inngest";
import connectDb from "@/lib/connectDb";
import User from "@/models/User";

export const inngest = new Inngest({ name: "Noblescart App" });

// 🔹 Sync User Creation
export const syncUserCreation = inngest.createFunction(
  {
    id: "sync-user-creation-from-clerk",
  },
  { event: "clerk/user.created" },
  async ({ event }) => {
    const { id, first_name, last_name, email_addresses, image_url } = event.data;

    const userData = {
      _id: id,
      email: email_addresses[0]?.email,
      name: `${first_name} ${last_name}`,
      image_url,
    };

    await connectDb();
    await User.create(userData);
  }
);

// 🔹 Sync User Update
export const syncUserUpdate = inngest.createFunction(
  {
    id: "sync-user-update-from-clerk",
  },
  { event: "clerk/user.updated" },
  async ({ event }) => {
    const { id, first_name, last_name, email_addresses, image_url } = event.data;

    const userData = {
      _id: id,
      email: email_addresses[0]?.email,
      name: `${first_name} ${last_name}`,
      image_url,
    };

    await connectDb();
    await User.findByIdAndUpdate(id, userData);
  }
);

// 🔹 Sync User Deletion
export const syncUserDeletion = inngest.createFunction(
  {
    id: "sync-user-deletion-from-clerk",
  },
  { event: "clerk/user.deleted" },
  async ({ event }) => {
    const { id } = event.data;

    await connectDb();
    await User.findByIdAndDelete(id);
  }
);
