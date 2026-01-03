import { db } from "@/config/db";
import { CoursesTable } from "@/config/UserSchema";
import { like } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  ctx: { params: Promise<{ slug: string }> }
) {
  const { slug } = await ctx.params;

  console.log("SLUG:", slug);

  const course = await db
    .select()
    .from(CoursesTable)
    .where(like(CoursesTable.tags, `%${slug}%`))
    .limit(1);

  console.log("COURSE:", course);

  if (!course.length) {
    return NextResponse.json(
      { error: "Course not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(course[0]);
}
