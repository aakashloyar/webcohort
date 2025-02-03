// interface User {
//     id: number;
//     name: string;
//     email: string;
//     createdAt: Date;
//   }
  
//   // For a profile display, only pick `name` and `email`
//   type UserProfile = Pick<User, 'name' | 'email'>;
  
//   const displayUserProfile = (user: UserProfile) => {
//     console.log(`Name: ${user.name}, Email: ${user.email}`);
//   };
  
//   // Correct way to call the function
//   displayUserProfile({ name: 'Aakash', email: 'aakash@example.com' });
  