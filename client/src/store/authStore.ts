import { toast } from "@/components/ui/use-toast";
import { GetUserType, getProfile, loginUser } from "@/utils/user";
import { create } from "zustand";

interface AuthState {
  token: string | null;
  user: GetUserType | null;
  loading: boolean;
  error: string | null;
  login: (username: string, password: string) => Promise<void>;
  fetchProfile: () => Promise<void>;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem("token") || null,
  user: null,
  loading: false,
  error: null,

  login: async (email: string, password: string) => {
    set({ loading: true, error: null });
    try {
      if (!email || !password) throw new Error("Please fill all the fields");
      const response = await loginUser(email, password);
      const accessToken = response.data.token;

      localStorage.setItem("token", accessToken);
      set({ token: accessToken, loading: false });
    } catch (error: any) {
      set({
        error: error?.response.data.message || error.message,
        loading: false,
      });

      toast({
        variant: "destructive",
        title: error?.response.data.message || error.message,
      });
    }
  },
  fetchProfile: async () => {
    set({ loading: true, error: null });
    try {
      const accessToken = useAuthStore.getState().token;
      if (!accessToken) throw new Error("No access token available");

      const response = await getProfile();
      set({ user: response, loading: false });
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },
  logout: () => {},
}));

export default useAuthStore;
