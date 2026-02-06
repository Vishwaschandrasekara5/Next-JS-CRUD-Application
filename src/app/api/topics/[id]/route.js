import connectMongodb from "../../../../../libs/mongodb"
import Topic from "../../../../../models/topic";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
const {id} = await params;
    await connectMongodb();
    const topic =  await Topic.findOne({_id: id});
    return NextResponse.json({ topic }, { status: 200 });

}