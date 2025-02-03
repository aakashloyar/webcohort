import { Client } from 'pg';

const client = new Client({
  connectionString: 'postgresql://neondb_owner:npg_Qgk2h5zKoUEM@ep-floral-dawn-a49ekg7n-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require'
});

async function put() {
    try{
        await client.connect();
        const query="INSERT INTO users (username, name, email, password) VALUES($1,$2,$3,$4)"
        const value=['aakujaf','aakash','aaljku@gmail.com','123456'];
        const res=await client.query(query,value);
        console.log(res);
    } catch(err) {
        console.log('error'+err);
    } finally {
        await client.end();
    }
}
put();

