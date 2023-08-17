import { API_URL } from ".";

export const Chat = {
  sendMessageStream: async (message: string) => {
    return await fetch(`${API_URL}chat/send-message`, {
      method: "post",
      body: JSON.stringify({ message }),
      headers: {
        Accept: "application/json, text/plain, */*", // indicates which files we are able to understand
        "Content-Type": "application/json", // indicates what the server actually sent
      },
    });
  },
};
