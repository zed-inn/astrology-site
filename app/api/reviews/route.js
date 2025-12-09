import dbConnect from "@/lib/db";
import Review from "@/models/Review";
import { NextResponse } from "next/server";

export async function GET(req) {
  await dbConnect();
  const reviews = await Review.find({ approved: true });
  return NextResponse.json(reviews);
}

export async function POST(req) {
  await dbConnect();
  const body = await req.json();
  const review = await Review.create(body);
  return NextResponse.json(review);
}
