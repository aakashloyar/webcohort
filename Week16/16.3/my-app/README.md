This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


//cookie are used to authenticate 
//they automatically sent on each request
//properties
//can be sent only on secure requests

//3 settings of cookies
//strict-> property to make these cookies sent only from cross origin site
//lax-> property as strict but any website is giving link to original website then directly 
signin if already signed it as it can send cookie
//none-> can be sent from any site-> can lead to cbfr attacks
cbfr attacks->other site can send request as cookie is already stored and it will go with every request
so other website can send some dangerous


//next file

import { NextRequest,NextResponse } from "next/server";

export async function GET(req:NextRequest,arg:any) {
    const { nextAuth } = await arg.params; // Await the params
    //this will prime all routes after auth
    //[...xxx] -> this is to make it understand that this is not counted in routes
    //this is only counted to next routes
    console.log(nextAuth);
    return NextResponse.json({
        message: "asdf"
    });
}




//now as we have used recoilroot and wrapped our application in that
//now we have to wrap our application in sessionprovider
//but it will show that react context are not available in server component
//so we have to use useclient and make a another file provider.tsx
//session is used to get user details
//client side->useSession
//server side->getServerSession()

//these will give us access to only some of the information 
//to get more we must use callback
there are 2 types of callback-> session and jwt
//so client side start sending id
//but not server

//now you can do google authentication as well as github authentication
//if you donot want to use custom page use your own



