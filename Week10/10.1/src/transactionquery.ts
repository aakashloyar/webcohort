import { Client } from 'pg';

const client = new Client({
  connectionString: 'postgresql://neondb_owner:npg_Qgk2h5zKoUEM@ep-floral-dawn-a49ekg7n-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require'
});

async function transaction(username:string,name:string,email:string,password:string,city:string,country:string,street:string,pincode:string) {
    try{
        await client.connect();

        await client.query('BEGIN');
    
        const query='INSERT INTO users (username, name, email, password) VALUES($1,$2,$3,$4) RETURNING id'
        const values=[username,name,email,password];
        const userRes=await client.query(query,values);
        const userId = userRes.rows[0].id;
        const value=[userId,city,country,street,pincode]
        const addressque='INSERT INTO addresses (user_id, city, country, street, pincode) VALUES($1,$2,$3,$4,$5)';
        const addressRes=await client.query(addressque,value);
    
        await client.query('COMMIT');
        console.log(addressRes)
    } catch(err) {
        await client.query('ROLLBACK'); // Roll back the transaction on error
        console.error("error"+err);
    } finally {
        await client.end(); // Close the client connection
    }
   
     
}
transaction('aakli','aakash','asdf@gmail.com','123456','city','country','street','pincode');