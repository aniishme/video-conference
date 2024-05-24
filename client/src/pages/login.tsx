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

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLoginClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(loginData);
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
          <Link to="/signup">
            <Button variant="outline">Register</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Login;
