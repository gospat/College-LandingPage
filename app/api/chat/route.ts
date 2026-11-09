import { NextResponse } from "next/server";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const SYSTEM_PROMPT = `You are a helpful and friendly admissions assistant for Bells University of Technology (Ota, Ogun State, Nigeria).

Help students with:
- Admissions process, eligibility, deadlines
- Programmes, departments, and colleges (general guidance)
- Campus life, hostels, sports, labs, library
- Fees, scholarships, financial aid
- Faculty, research opportunities

Be concise (2-3 sentences max), warm, and always encourage them to apply or ask more questions.`;

export async function POST(req: Request) {
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Chat service is not configured." },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const messages = (body as { messages?: ChatMessage[] }).messages;
  if (!Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const safeMessages: ChatMessage[] = messages
    .slice(-10)
    .filter(
      (m) =>
        m &&
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim().length > 0
    )
    .map((m) => ({ role: m.role, content: m.content.trim().slice(0, 2000) }));

  if (safeMessages.length === 0) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const upstream = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "openai/gpt-oss-20b",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...safeMessages.map((m) => ({ role: m.role, content: m.content })),
      ],
      max_tokens: 250,
      temperature: 0.7,
    }),
  });

  if (!upstream.ok) {
    return NextResponse.json(
      { error: "Chat service is temporarily unavailable." },
      { status: 503 }
    );
  }

  const data = (await upstream.json().catch(() => null)) as
    | {
        choices?: Array<{ message?: { content?: string } }>;
      }
    | null;

  const raw = data?.choices?.[0]?.message?.content;
  if (!raw) {
    return NextResponse.json(
      { error: "Chat service is temporarily unavailable." },
      { status: 503 }
    );
  }

  const reply = raw.replace(/<think>[\s\S]*?<\/think>/gi, "").trim();
  return NextResponse.json({ reply });
}
