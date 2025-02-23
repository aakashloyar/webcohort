"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const mySchema = zod_1.z.string();
const x = mySchema.parse(5);
const y = mySchema.safeParseAsync(5);
//console.log(x);
//console.log(y);
