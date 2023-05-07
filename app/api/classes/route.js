import { NextResponse } from "next/server";
import classes from "./classes.json";

export async function GET(request) {
  return NextResponse.json(classes);
}
