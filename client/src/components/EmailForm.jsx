import React, { useState } from "react";
import axios from "axios";

const EmailForm = () => {
  const [formData, setFormData] = useState({
    senderRole: '',
    recipient: '',
    emailType: '',
    context: '',
  });
  const [generatedEmail, setGeneratedEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/generate/email`,
        formData
      );
      setGeneratedEmail(response.data.email);
    } catch (err) {
      setError("Failed to generate email. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

 
  const copyToClipboard = () => {
    if (generatedEmail) {
      const tempElement = document.createElement("div");
      tempElement.innerHTML = generatedEmail;
      const text = tempElement.innerText;
      navigator.clipboard.writeText(text)
        .then(() => alert("Copied to clipboard!"))
        .catch(() => alert("Failed to copy."));
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">AI Email Generator</h1>

      <div className="flex flex-col md:flex-row gap-8">
      
        <form
          onSubmit={handleSubmit}
          className="md:w-1/2 w-full space-y-6"
        >
          <div>
            <label htmlFor="senderRole" className="block font-medium text-gray-700 mb-1">
              Sender Role
            </label>
            <input
              type="text"
              name="senderRole"
              id="senderRole"
              value={formData.senderRole}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., Marketing Manager"
              required
            />
          </div>

          <div>
            <label htmlFor="recipient" className="block font-medium text-gray-700 mb-1">
              Recipient
            </label>
            <input
              type="text"
              name="recipient"
              id="recipient"
              value={formData.recipient}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., Client, Team, HR"
              required
            />
          </div>

          <div>
            <label htmlFor="emailType" className="block font-medium text-gray-700 mb-1">
              Email Type
            </label>
            <select
              name="emailType"
              id="emailType"
              value={formData.emailType}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Email Type</option>
              <option value="Meeting Request">Meeting Request (Schedule a meeting)</option>
              <option value="Follow-up">Follow-up (After a meeting or interaction)</option>
              <option value="Introduction">Introduction (Introduce yourself/team)</option>
              <option value="Thank You">Thank You (Show appreciation)</option>
              <option value="Apology">Apology (Address a mistake)</option>
              <option value="Job Application">Job Application (Apply for a position)</option>
              <option value="Resignation">Resignation (Formal resignation letter)</option>
              <option value="Feedback Request">Feedback Request (Ask for feedback)</option>
              <option value="Proposal">Proposal (Present an idea or offer)</option>
              <option value="Complaint">Complaint (Express dissatisfaction)</option>
              <option value="Appreciation">Appreciation (Acknowledge effort)</option>
              <option value="Reminder">Reminder (Send a gentle nudge)</option>
              <option value="Request for Information">Request for Information (Ask for details)</option>
            </select>
          </div>

          <div>
            <label htmlFor="context" className="block font-medium text-gray-700 mb-1">
              Email Context
            </label>
            <textarea
              name="context"
              id="context"
              value={formData.context}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              rows="6"
              placeholder="Describe the purpose or background of the email"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {loading ? "Generating..." : "Generate Email"}
          </button>

          {error && <div className="text-red-600 text-center mt-4">{error}</div>}
        </form>

        
        <div className="md:w-1/2 w-full bg-gray-50 p-6 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Generated Email</h2>
          {generatedEmail ? (
            <>
              <div
                className="prose prose-sm max-w-none text-gray-800 mb-4"
                dangerouslySetInnerHTML={{ __html: generatedEmail }}
              />
              <button
                onClick={copyToClipboard}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm"
              >
                Copy to Clipboard
              </button>
            </>
          ) : (
            <p className="text-gray-500">Your email will appear here after generation.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailForm;
