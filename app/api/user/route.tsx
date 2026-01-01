import { db } from "@/config/db";
import { usersTable } from "@/config/UserSchema";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST() {
  const user = await currentUser();

  //  Auth check
  if (!user) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const email = user.primaryEmailAddress?.emailAddress;

  //  Email validation
  if (!email) {
    return NextResponse.json(
      { error: "Email not found" },
      { status: 400 }
    );
  }

  //  Check if user exists
  //@ts-ignore
 const existingUser = await db
  .select()
  .from(usersTable)
  .where(eq(usersTable.email, email))
  .limit(1);

if (existingUser.length > 0) {
  return NextResponse.json({ ok: true });
}


  //  Create user
  await db.insert(usersTable).values({
    name: user.fullName ?? "User",
    email,
    points: 0,
  });

  return NextResponse.json(
    { message: "User created successfully" },
    { status: 201 }
  );
}
