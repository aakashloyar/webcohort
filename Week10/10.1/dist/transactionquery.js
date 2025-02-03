"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: 'postgresql://neondb_owner:npg_Qgk2h5zKoUEM@ep-floral-dawn-a49ekg7n-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require'
});
function transaction(username, name, email, password, city, country, street, pincode) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            yield client.query('BEGIN');
            const query = 'INSERT INTO users (username, name, email, password) VALUES($1,$2,$3,$4) RETURNING id';
            const values = [username, name, email, password];
            const userRes = yield client.query(query, values);
            const userId = userRes.rows[0].id;
            const value = [userId, city, country, street, pincode];
            const addressque = 'INSERT INTO addresses (user_id, city, country, street, pincode) VALUES($1,$2,$3,$4,$5)';
            const addressRes = yield client.query(addressque, value);
            yield client.query('COMMIT');
            console.log(addressRes);
        }
        catch (err) {
            yield client.query('ROLLBACK'); // Roll back the transaction on error
            console.error("error" + err);
        }
        finally {
            yield client.end(); // Close the client connection
        }
    });
}
transaction('aakli', 'aakash', 'asdf@gmail.com', '123456', 'city', 'country', 'street', 'pincode');
