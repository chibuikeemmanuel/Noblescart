// Inngest Function to save user data to a database
export const syncUserCreation = inngest.createFunction(
    {
      id: 'sync-user-creation-from-clerk', // 🔄 updated ID
    },
    { event: 'clerk/user.created' },
    async ({ event }) => {
      const { id, first_name, last_name, email_addresses, image_url } = event.data;
      const userData = {
        _id: id,
        email: email_addresses[0].email,
        name: first_name + ' ' + last_name,
        image_url: image_url,
      };
      await connectDb();
      await User.create(userData);
    }
  );
  
  // Inngest Function to update user data in database
  export const syncUserUpdate = inngest.createFunction(
    {
      id: 'sync-user-update-from-clerk', // 🔄 updated ID
    },
    { event: 'clerk/user.updated' },
    async ({ event }) => {
      const { id, first_name, last_name, email_addresses, image_url } = event.data;
      const userData = {
        _id: id,
        email: email_addresses[0].email,
        name: first_name + ' ' + last_name,
        image_url: image_url,
      };
      await connectDb();
      await User.findByIdAndUpdate(id, userData);
    }
  );
  