import { NextRequest, NextResponse } from "next/server";
import validator from "validator";
import { z } from "zod";

const loginSchema = z
  .object({
    firstName: z
      .string()
      .min(2, "First name must be atleast 2 characters")
      .max(45, "First name must be less than 45 characters")
      .regex(
        new RegExp("^[a-zA-Z]+$"),
        "No special character allowed!"
      ),
    lastName: z
      .string()
      .min(2, "Last name must be atleast 2 characters")
      .max(45, "Last name must be less than 45 characters")
      .regex(
        new RegExp("^[a-zA-Z]+$"),
        "No special character allowed!"
      ),
    email: z.string().email("Please enter a valid email address"),
    phone: z
      .string()
      .refine(
        validator.isMobilePhone,
        "Please enter a valid phone number!"
      ),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters ")
      .max(50, "Password must be less than 50 characters"),
    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters ")
      .max(50, "Password must be less than 50 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password and confirm password doesn't match!",
    path: ["confirmPassword"],
  });

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = loginSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.format(), {
      status: 400,
    });
  }

  console.log({ body });
  return NextResponse.json(body, { status: 200 });
}
