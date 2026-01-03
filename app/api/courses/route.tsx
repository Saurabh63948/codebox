import { db } from "@/config/db";
import { CoursesTable } from "@/config/UserSchema";
import { NextResponse } from "next/server";

export async function GET() {
  const res = await db.select().from(CoursesTable);
  return NextResponse.json(res);
}
