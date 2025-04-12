

const { generateEmail } = require("../services/aiService");

const generateEmailController = async (req, res) => {
  try {
    const { senderRole, recipient, emailType, context } = req.body;

    
    if (!senderRole || !recipient || !emailType || !context) {
      return res.status(400).json({ error: "All fields are required." });
    }

    
    const emailContent = await generateEmail({ senderRole, recipient, emailType, context });

    res.status(200).json({ email: emailContent });
  } catch (error) {
    console.error("Email generation failed:", error);
    res.status(500).json({ error: "Failed to generate email. Please try again later." });
  }
};

module.exports = { generateEmailController };
