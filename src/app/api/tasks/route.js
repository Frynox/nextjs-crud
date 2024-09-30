import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";


export async function GET() {
  const data = await prisma.task.findMany();
  console.log(data);

  return NextResponse.json({
    status: 200,
    response: "Tareas Encontradas",
    data: data,
  });
}

export async function POST(request) {
  const data = await request.json();
  console.log(data);
  const newTask = await prisma.task.create({
    data: {
      title: data.title,
      description: data.description,
    },
  });
  return NextResponse.json({
    status: 200,
    response: "Tarea Creada!",
    data: newTask,
  });
}
