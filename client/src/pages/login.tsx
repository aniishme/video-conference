import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginUser } from "@/utils/user";
import { useToast } from "@/components/ui/use-toast";

function Login() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = useState({
    loading: false,
    error: null,
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLoginClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      setStatus({ loading: true, error: null });
      if (!loginData.email || !loginData.password)
        throw new Error("Please fill all the fields");

      const response = await loginUser(loginData.email, loginData.password);
      if (response?.status === 200) {
        setStatus({ loading: false, error: null });
        setLoginData({ email: "", password: "" });

        return navigate("/dashboard");
      }
    } catch (error: any) {
      setStatus({
        loading: false,
        error: error?.response.data.message || error.message,
      });

      toast({
        variant: "destructive",
        title: error?.response.data.message || error.message,
      });
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[#131B23]">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login to Meet</CardTitle>
          <CardDescription>Join events in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Email:</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="john@doe.com"
                  value={loginData.email}
                  onChange={handleFormChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Password:</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="**********"
                  value={loginData.password}
                  onChange={handleFormChange}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button className="bg-[#2274A5]" onClick={handleLoginClick}>
            Login
          </Button>
          <Link to="/register">
            <Button variant="outline">Register</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Login;
