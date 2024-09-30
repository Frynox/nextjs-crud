import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request, { params }) {
  const data = await prisma.task.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  if (!data) {
    return NextResponse.json({
      status: 404,
      response: "Tarea no Encontrada",
      data: "not found",
    });
  }
  return NextResponse.json({
    status: 200,
    response: "Tarea Encontrada",
    data: data,
  });
}

export async function PUT(request, { params }) {
    const body = await request.json()
    const data = await prisma.task.update({
        where: {
            id: Number(params.id)
        },
        data: body,
    })

    return NextResponse.json({
        status: 404,
        response: "Tarea Actualizada",
        data: data,
      });
}

export async function DELETE(request, { params }) {
  try {
    const data = await prisma.task.delete({
      where: {
        id: Number(params.id),
      },
    });

    if (!data) {
      return NextResponse.json({
        status: 404,
        response: "Tarea no Encontrada",
        data: "not found",
      });
    }

    return NextResponse.json({
      status: 200,
      response: "Tarea Eliminada",
      data: data,
    });
  } catch (error) {
    console.error("Fallo al eliminar", error.error);
  }
}
