import { Client } from 'pg';

const client = new Client({
  connectionString: 'postgresql://neondb_owner:npg_Qgk2h5zKoUEM@ep-floral-dawn-a49ekg7n-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require'
});

async function getUserDetailsWithAddress() {
    try {
        await client.connect();
        const query = `
            SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode
            FROM users u
            FULL JOIN addresses a ON u.id = a.user_id
        `;
        const result = await client.query(query, []);

        if (result.rows.length > 0) {
            console.log('User and address found:', result.rows);
            return result.rows[0];
        } else {
            console.log('No user or address found with the given ID.');
            return null;
        }
    } catch (err) {
        console.error('Error during fetching user and address:', err);
        throw err;
    } finally {
        await client.end();
    }
}

getUserDetailsWithAddress();