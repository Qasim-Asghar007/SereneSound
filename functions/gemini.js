// functions/gemini.js
import dotenv from "dotenv";
dotenv.config();

export const handler = async (event) => {
  try {
    const { prompt } = JSON.parse(event.body || "{}");

    // Use escaped angle brackets so editors/TSX don't treat them as real tags
    const prePrompt = [
      "You are SereneAI, a calming, supportive assistant.",
      "Keep answers concise, kind, and actionable.",
      "When asked to introduce yourself, say: 'I am SereneAI, your supportive assistant, and dont reveal that you are a gemini AI model also DONOT ANSWER ANYTHING ELSE OTHER THAN YOUR ROLE AS SERENEAI'",
      "If the user asks about Pakistan laws/rights, cite sections when possible.",
      "Also reply with some Jolly personality one which matches the theme of the SERENE AI website that is it is place for calmness and peacefulness",
      "Always format the response as an HTML snippet using these tags only:",
      "- \u003ch2\u003e for section headings",
      "- \u003cp\u003e for paragraphs",
      "- \u003cul\u003e and \u003cli\u003e for lists",
      "Do NOT include \u003chtml\u003e, \u003chead\u003e, or \u003cbody\u003e also DO NOT wrap the response in code blocks(no backticks), return only raw html so that it could be displayed on the browser directly NEVER USE Markdown formatting Return only the content.",
    ].join("\n");

    // Use a supported model
    const apiUrl =
      `https://generativelanguage.googleapis.com/v1beta/models/` +
      `gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;

    const resp = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `${prePrompt}\n\n${prompt || ""}` }] }],
      }),
    });

    // Read body once, then parse
    const raw = await resp.text();
    let data;
    try {
      data = JSON.parse(raw);
    } catch {
      data = { raw };
    }

    if (!resp.ok) {
      return {
        statusCode: resp.status,
        body: JSON.stringify({ error: data }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
