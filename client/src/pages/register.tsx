import { useState } from "react";
import { Link } from "react-router-dom";

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
import { createUser } from "@/utils/user";

function Register() {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [status, setStatus] = useState({
    loading: false,
    error: null,
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setRegisterData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegisterClick = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    try {
      setStatus({ loading: true, error: null });
      if (!registerData.name || !registerData.email || !registerData.password)
        throw new Error("Please fill all the fields");

      const response = await createUser(registerData);
      if (response?.status === 201) {
        alert("User created successfully");
        setStatus({ loading: false, error: null });
        setRegisterData({ name: "", email: "", password: "" });
      }
    } catch (error: any) {
      console.log(error);
      setStatus({
        loading: false,
        error: error?.response.data.message || error.message,
      });
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[#131B23]">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Register to Meet</CardTitle>
          <CardDescription>Create account and enjoy meets./</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name:</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={registerData.name}
                  onChange={handleFormChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Email:</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="john@doe.com"
                  value={registerData.email}
                  onChange={handleFormChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Password:</Label>
                <Input
                  id="password"
                  name="password"
                  placeholder="**********"
                  value={registerData.password}
                  onChange={handleFormChange}
                />
              </div>
            </div>
          </form>
          {status.error && (
            <div className="text-red-500 text-sm mt-2">{status.error}</div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button className="bg-[#2274A5]" onClick={handleRegisterClick}>
            Register
          </Button>
          <Link to="/login">
            <Button variant="outline">Login</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Register;
