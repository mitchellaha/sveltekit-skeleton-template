import { json } from '@sveltejs/kit';

/*
    ? GET /api/demo?paramOne=123
        * returns Data with paramOne
    ? POST /api/demo
        * returns Data with from JSON body
    ? DELETE /api/demo?paramOne=123
        * deletes paramOne
*/


export async function GET({ url }) {
    const paramOne = url?.searchParams?.get('paramOne');
    return json({ got: paramOne })
};


export async function POST({ request, cookies }) {
    const body = await request.json();
    const bodyParam = body?.param;
    return json({ bodyParam: bodyParam, cookie: cookies.get('cookie') })
};


export async function DELETE({ url }) {
    const paramOne = url?.searchParams?.get('paramOne');
    return json({ deleted: paramOne })
};
