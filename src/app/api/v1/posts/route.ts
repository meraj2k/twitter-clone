export const GET = (req: Request) => {
    try {
        return Response.json({ success: true, data: { name: "hellow-world" } }, { status: 400 });
    } catch (error) {
        return Response.json({ error: "code fata" }, { status: 500 });
    }
}