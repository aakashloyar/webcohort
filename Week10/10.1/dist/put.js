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
function put() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const query = "INSERT INTO users (username, name, email, password) VALUES($1,$2,$3,$4)";
            const value = ['aakujaf', 'aakash', 'aaljku@gmail.com', '123456'];
            const res = yield client.query(query, value);
            console.log(res);
        }
        catch (err) {
            console.log('error' + err);
        }
        finally {
            yield client.end();
        }
    });
}
put();
