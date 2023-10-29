import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }): Promise<NextResponse<unknown>> {
  const task = await prisma?.task.findUnique({
    where: {
      id: Number(params.id)
    }
  })
  return NextResponse.json(task);
}

export async function PUT(request: Request, { params }: { params: { id: string } }): Promise<NextResponse<unknown>> {
  const data = await request.json();
  const updateTask = await prisma?.task.update({
    where: {
      id: Number(params.id)
    },
    data: data,
  });
  return NextResponse.json(updateTask);
}

export async function DELETE(request: Request, { params }: { params: { id: string } }): Promise<NextResponse<unknown>> {
  try {
    const taskDeleted = await prisma?.task.delete({
      where: {
        id: Number(params.id)
      }
    })
    return NextResponse.json(taskDeleted);
  } catch (error) {
    return NextResponse.json((error as Error).message);
  }
}