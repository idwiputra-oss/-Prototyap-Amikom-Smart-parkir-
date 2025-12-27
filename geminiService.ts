
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getParkingAdvice = async (history: { role: string; parts: { text: string }[] }[]) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: history,
      config: {
        systemInstruction: `You are the Amikom Smart Parking AI Assistant. 
        You help students and staff at Universitas Amikom Yogyakarta with parking-related queries.
        Rules:
        1. Be helpful, polite, and professional.
        2. Knowledgeable about Amikom campus (Gedung 1-6, Basement, Front Parking).
        3. Parking is free for verified vehicles.
        4. Operating hours: 06:00 - 22:00.
        5. Answer in Indonesian by default unless asked otherwise.`,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Maaf, saya sedang mengalami kendala teknis. Silakan coba lagi nanti.";
  }
};
