import { NextResponse } from "next/server";
import features from "./features.json";

export async function GET(request) {
  return NextResponse.json(features);
}
