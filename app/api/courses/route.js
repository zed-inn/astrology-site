import dbConnect from "@/lib/db";
import Course from "@/models/Course";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();
  const courses = await Course.find({ active: true });
  return NextResponse.json(courses);
}

export async function POST(req) {
  await dbConnect();
  const body = await req.json();
  const course = await Course.create(body);
  return NextResponse.json(course);
}
