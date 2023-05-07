import { NextResponse } from "next/server";
import menuItems from "./menuItems.json";

export async function GET(request) {
  return NextResponse.json(menuItems);
}
