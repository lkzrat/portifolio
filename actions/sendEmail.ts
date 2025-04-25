import { validateString, getErrorMessage } from "@/lib/utils";

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  try {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        senderEmail,
        message,
      }),
    });

    if (!response.ok) {
      const { error } = await response.json();
      throw new Error(error || "Failed to send email");
    }

    const data = await response.json();
    return { data };
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};
