// import { NextApiRequest, NextApiResponse } from "next";
// import z from 'zod';

import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/db";

// const createUserSchema = z.object({
//     fullName: z.string(),
//     username: z.string(),
//     role: z.string(),
//     password: z.string()
// }).strict();

// function validateUserSchema (data: any) {
//     try {
//         const parseData = createUserSchema.parse(data)
//         return parseData;
//     }catch(error: any){
//         throw new Error(error.message);
//     }
// }

// export const POST = async (request: any) => {
//     try {
//         const json = await request.json();
//         const validateUser = validateUserSchema(json);
//     }
//     catch(e: any){
//         console.log(e)
//     }
// }



export const GET = async (req: Request, res: Response) => {
    console.log("Get Request")
    const users = await prisma.users.findMany();

    return NextResponse.json(users);
};

export const POST = async (req: NextRequest, res: NextResponse) => {
    console.log("Post Request")

    const data = await req.json();

    try {

        const user = await prisma.users.create({
            data : { fullName: data.fullName, username: data.username, role: data.role, password: data.password }
        });

        return NextResponse.json(user)
    }catch(e: any){
        return NextResponse.json({}, { status: 400})
    }
};

export const DELETE = async (req: NextRequest) => {
    console.log("Delete Request")

    const data = await req.json();

    // try {
    //     const user = await prisma.users.delete({
            
    //     })
    // }
}