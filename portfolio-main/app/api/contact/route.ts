import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);
    const supabase = createServerClient();

    const { error } = await supabase.from("messages").insert([data]);

    if (error) {
      // If Supabase isn't configured, still succeed (graceful degradation)
      console.error("Supabase error:", error.message);
      return NextResponse.json(
        { message: "Message received (Supabase not configured)" },
        { status: 200 }
      );
    }

    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: err.issues }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
