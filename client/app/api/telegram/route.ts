import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const {
      base,
      profession,
      fullname,
      phone,
    } = await req.json();

    const BOT_TOKEN =
      process.env.TELEGRAM_BOT_TOKEN;

    const CHAT_ID =
      process.env.TELEGRAM_CHAT_ID;

    const message = `
📥 Новая заявка

👤 ФИО: ${fullname}
📱 Телефон: ${phone}
🎓 Основа:${base}
💼 Профессия:${profession}
`;

    const telegramRes = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          chat_id: CHAT_ID,

          text: message,
        }),
      }
    );

    const data =
      await telegramRes.json();

    return NextResponse.json({
      ok: true,
      data,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error,
      },
      {
        status: 500,
      }
    );
  }
}