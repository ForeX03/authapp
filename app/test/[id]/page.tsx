import prisma from "@/lib/prisma";

export default async function Page({params}: {params: Promise<{id: string}>}) {
    const { id } = await params;

    const { post } = await prisma.user.fin
    return (
        <>
        <h1>Test</h1>
        <p>Test {id}</p>
        </>
    );
}