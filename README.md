This project was built to explore modern front-end technologies and create a functional application centered around mental wellness. The goal was to build a secure, performant, and user-friendly platform where users can relax with ASMR sounds, interact with an intelligent chatbot for quick queries, and browse profiles of registered professionals for online consultations.

A key architectural feature is the use of serverless functions to handle API requests to the Gemini API, ensuring that the API key remains secure and is never exposed on the client-side.

Key Features
🎧 Extensive ASMR Library: A curated collection of high-quality ASMR sounds to help with relaxation, focus, and sleep.

💬 AI-Powered Chatbot: Integrated with the Google Gemini API, the chatbot can answer user questions and provide a conversational experience.

👨‍⚕️ Online Wellness Sessions: A dedicated section where users can view profiles of registered doctors and wellness professionals and book consultations.

🔒 Secure Architecture: API keys are managed securely through serverless functions, which act as a proxy between the client and the AI service.

✨ Responsive Design: A mobile-first approach ensures a seamless experience across all devices.

Built With
React: A JavaScript library for building user interfaces.

Google Gemini API: Powers the intelligent chatbot feature.

Serverless Functions: Used for secure API key management and handling backend logic without a dedicated server.
