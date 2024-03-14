"use server";

import prisma from "../../utils/db";
import * as bcrypt from "bcrypt";

export const registerUser = async (formData: FormData) => {

    const firstName = formData.get("firstname");
    const lastName = formData.get("lastname");
    const email = formData.get("email");
    const password = formData.get("password");

    const name = `${firstName} ${lastName}`;

    if (!firstName || !lastName || !email || !password) {
        return { error: "Something went wrong" }
    }

    const hashedPassword = await bcrypt.hash(password.toString(), 10);

    await prisma.user.create({
        data: {
            email: email.toString(),
            name,
            passwordHash: hashedPassword,
        }
    })

    return { email, name };
}