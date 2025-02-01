mkdir type-app
cd type-app
npm init -y
npx tsc --init

tsc -b to create js from ts



//gaining some knowledge about tsconfig.json
    "target": "es2016","es5"                     
// this option convert ts to the version that we wanted for js file


rootDir-> where ts file will be
outDir -> where js file will be 

    // "noImplicitAny": true,                            /* Enable error reporting for expressions and declarations with an implied 'any' type. */
//give error for types if true otherwise not


    // "removeComments": true,                           /* Disable emitting comments. */
    //if any comments in ts -> will not come in js file