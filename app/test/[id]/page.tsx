export default async function Page({params}: {params: Promise<{id: string}>}) {
    const { id } = await params;
    return (
        <>
        <h1>Test</h1>
        <p>Test {id}</p>
        </>
    );
}