// services/aiService.js

const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv=require("dotenv")
dotenv.config()

// Initialize Gemini with your API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);


// Function to generate professional email
const generateEmail = async ({ senderRole, recipient, emailType, context }) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `
You are an expert email writer. Generate a professional, polite, and well-structured email based on the following details:

Sender Role: ${senderRole}
Recipient: ${recipient}
Email Type: ${emailType}
Context: ${context}

Make sure the email has a proper subject line, greeting, body, and closing. Keep the tone suitable for a ${emailType} type.
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const email = response.text();
    const formattedEmail = email.replace(/\n/g, "<br>");

    return formattedEmail;
  } catch (error) {
    console.error("Gemini Email Generation Error:", error);
    throw new Error("Failed to generate email");
  }
};

module.exports = { generateEmail };
