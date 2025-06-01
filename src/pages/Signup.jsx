import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { ShineBorder } from "../components/magicui/shine-border";
import { useState } from "react";

export default function Signup() {

  const [user, setUser] = useState()
  console.log(user);
  
  return (
    <Card className="relative overflow-hidden max-w-[500px] w-full mx-auto mt-[150px]">
      <ShineBorder duration={10} borderWidth={2} shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
      <CardHeader>
        <CardTitle className="text-4xl font-semibold">Signup</CardTitle>
        <CardDescription className="text-[14px]">
          Create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-lg">Name</Label>
              <Input id="name" className="text-lg" type="text" placeholder="Rohan" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-lg">Email</Label>
              <Input onChange={(e)=>setUser(e.target.value)} id="email" className="text-lg" type="email" placeholder="name@example.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password" className="text-lg">Password</Label>
              <Input id="password" className="text-lg" type="password" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-black cursor-pointer text-lg py-5">Sign Up</Button>
      </CardFooter>
    </Card>
  );
}
