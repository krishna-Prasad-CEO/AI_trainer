import Vapi from "@vapi-ai/web"; // Assuming you're using the @vapi-ai/web SDK

// Check if NEXT_PUBLIC_VAPI_API_KEY is defined
const vapiApiKey = process.env.NEXT_PUBLIC_VAPI_API_KEY;

if (!vapiApiKey) {
  console.error("VAPI_API_KEY is not defined. Please check your .env file.");
  // You might want to throw an error or handle this more gracefully
  // in a production environment.
}

export const vapi = new Vapi(vapiApiKey!); // Pass the API key here
