"use client";
import { passwordStrength } from "check-password-strength";

import { useState, useEffect } from "react";
import ShowPassStrength from "./ShowPassStrength";
import { Input, button } from "@nextui-org/react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

const PasswordInput = () => {
  const [pass, setPass] = useState("");
  const [visible, setVisible] = useState(false);
  const [passStrength, setPassStrength] = useState(0);
  const toggleVisible = () => setVisible((prev) => !prev);
  useEffect(() => {
    setPassStrength(passwordStrength(pass).id);
  }, [pass]);
  return (
    <div className="flex flex-col gap-2">
      <Input
        label="Password"
        type={visible ? "text" : "password"}
        onChange={(e) => setPass(e.target.value)}
        endContent={
          <button onClick={toggleVisible}>
            {visible ? <EyeOffIcon className="w-4" /> : <EyeIcon className="w-4" />}
          </button>
        }
      />
      <ShowPassStrength strength={passStrength} />
    </div>
  );
};

export default PasswordInput;
