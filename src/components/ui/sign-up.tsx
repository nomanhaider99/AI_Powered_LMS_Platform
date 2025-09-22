import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./button";
import Image from "next/image";
import GoogleIcon from "../../../public/images/provider/google.png";
import GitHubIcon from "../../../public/images/provider/github.png";
import InstagramIcon from "../../../public/images/provider/instagram.png";

const SignUp = ({
  buttonText,
  variant,
}: {
  buttonText: string;
  variant: "default" | "secondary" | "outline";
}) => {
  return (
    <Dialog>
      {/* <-- use asChild so Radix won't render its own <button> */}
      <DialogTrigger asChild>
        <Button variant={variant}>{buttonText}</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="tracking-tighter">
            Authenticate Your Account
          </DialogTitle>
          <DialogDescription className="tracking-tighter">
            Kindly authenticate your account to create write a prompt.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-5 tracking-tighter">
          <div className="flex flex-col gap-2">
            <Button variant="secondary">
              <span className="flex items-center gap-2">
                <Image src={GoogleIcon} alt="google" width={20} height={20} />
                <span>Continue with Google</span>
              </span>
            </Button>

            <Button variant="default">
              <span className="flex items-center gap-2">
                <Image src={GitHubIcon} alt="github" width={20} height={20} />
                <span>Continue with GitHub</span>
              </span>
            </Button>

            <Button variant="secondary">
              <span className="flex items-center gap-2">
                <Image
                  src={InstagramIcon}
                  alt="instagram"
                  width={25}
                  height={25}
                />
                <span>Continue with Instagram</span>
              </span>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignUp;