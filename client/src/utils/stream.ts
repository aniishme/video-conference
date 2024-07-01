import { api } from "@/lib/api";

export const tokenProvider = async () => {
  const token = localStorage.getItem("token");
    const response = await api.get("/stream/token-provider",{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.token
  };
  