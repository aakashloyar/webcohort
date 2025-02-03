import { Client } from 'pg';

const client = new Client({
  connectionString: 'postgresql://neondb_owner:npg_Qgk2h5zKoUEM@ep-floral-dawn-a49ekg7n-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require'
});

async function Quer() {
    try {
      await client.connect();  
      const query = 'SELECT * FROM users';
      const result = await client.query(query);
      
      if (result.rows.length > 0) {
        console.log('User found:', result.rows[0]); // Output user data
        return result.rows[0]; // Return the user data
      } else {
        console.log('No user found with the given email.');
        return null; // Return null if no user was found
      }
    } catch (err) {
      console.error('Error during fetching user:', err);
      throw err; // Rethrow or handle error appropriately
    } finally {
        await client.end(); // Close the client connection
    }
    
  }
  
Quer();  