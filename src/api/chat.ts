import { API_URL, axiosInstance } from ".";

export const Chat = {
  sendMessage: async (message: string) => {
    return await axiosInstance.post(
      "chat/send-message",
      { message },
      {
        responseType: "stream",
      }
    );
  },
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
