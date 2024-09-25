import prisma from "@/lib/prisma";

export async function GET(req: Request) {
    try {
        const inquiries = await prisma.consultation.findMany({
            orderBy: {
                createdAt: "desc",
            },
            include: {
                consultant: true,
            },
        });
        return Response.json(inquiries);
    } catch (error) {
    console.error(error);
    return Response.json({ error: "서버 오류" }, { status: 500 });
  }
}
