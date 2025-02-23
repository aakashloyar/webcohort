import {z,ZodError} from 'zod'

const mySchema=z.string();


// try {
//     mySchema.parse(5);
// } catch(err) {
//     if(err instanceof ZodError) {
//         console.log(err.errors[0].message);
//         //console.log(err.message);
//     }
// }
//const y=mySchema.safeParseAsync(5);
//console.log(x);
//console.log(y);
//console.log(x)


// try {
//     mySchema.safeParse(5);
// } catch(err) {
//     if(err instanceof ZodError) {
//         console.log(err);
//     }
// }

const validation=mySchema.safeParse(5);
console.log(validation.error?.errors[0].message)


const schema=z.object({
    a:z.string(),
    b:z.number({message:'b must be a number'}),
    c:z.string().min(5,{message:'length>=5'}).max(10,{message:'length=<10'})
})

const validate=schema.safeParse({
    a:'aaku',
    b:'b',
    c:'5'
});

console.log(validate.error?.errors[1].message);

const formatted=validate.error?.format();
console.log(formatted?.a?._errors);
console.log(formatted?.b?._errors);
console.log(formatted?.c?._errors);

type alpha=z.infer<typeof schema>;