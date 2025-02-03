import { Client } from 'pg';

const client = new Client({
  connectionString: 'postgresql://neondb_owner:npg_Qgk2h5zKoUEM@ep-floral-dawn-a49ekg7n-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require'
});

// const client =new Client({
//   user: 'neondb_owner',
//   password: 'npg_Qgk2h5zKoUEM',
//   host: 'ep-floral-dawn-a49ekg7n-pooler.us-east-1.aws.neon.tech',
//   port: 5334,
//   database: 'neondb',
// })


async function createUserTable(){
  await client.connect();
  const result = await client.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(255) NOT NULL UNIQUE,
      name VARCHAR(255),
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);
  await client.end();
  console.log(result);
}


async function createAddressTable(){
  await client.connect();
  const result = await client.query(`
    CREATE TABLE IF NOT EXISTS addresses (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    city VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    street VARCHAR(255) NOT NULL,
    pincode VARCHAR(20),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  );
  `);
  await client.end();
  console.log(result);
}


// async function print() {
//   console.log('req');
//   const result = await client.query('SELECT * FROM USERS;')
//   console.log('hi');
//   console.log(result)
// }


//createUserTable();
createAddressTable();
