import { db } from "@/config/db";
import { CoursesTable } from "@/config/UserSchema";
import { like } from "drizzle-orm";

interface Props {
  params: Promise<{
    courseSlug: string;
  }>;
}

export default async function CoursePage({ params }: Props) {
  const { courseSlug } = await params;

  console.log("PAGE SLUG:", courseSlug);

  const course = await db
    .select()
    .from(CoursesTable)
    .where(like(CoursesTable.tags, `%${courseSlug}%`))
    .limit(1);

  if (!course.length) {
    return <div className="p-6">Course not found</div>;
  }

  const data = course[0];

  return (
    <div className="p-6">
      <h1 className="text-4xl font-game">{data.title}</h1>
      <p className="text-gray-400 mt-2">{data.desc}</p>
      <span className="inline-block mt-3 px-4 py-1 bg-zinc-800 rounded-xl">
        {data.level}
      </span>
    </div>
  );
}
