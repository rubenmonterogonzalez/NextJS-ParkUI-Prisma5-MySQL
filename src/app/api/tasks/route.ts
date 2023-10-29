import { NextResponse } from "next/server";
import { prisma } from "~/lib/prisma";

export async function GET(request: Request): Promise<NextResponse<unknown>> {
  const tasks = await prisma?.task.findMany();
  return NextResponse.json(tasks);
}

export async function POST(request: Request): Promise<NextResponse<unknown>> {
  const { title, description } = await request.json();
  const newTask = await prisma?.task.create({
    data: {
      title,
      description
    },
  });
  return NextResponse.json(newTask);
}