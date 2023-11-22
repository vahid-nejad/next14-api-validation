import { cn } from "@nextui-org/react";

interface Props {
  strength: number;
}
const ShowPassStrength = ({ strength }: Props) => {
  return (
    <div
      className={cn("flex gap-2 w-full ", {
        "justify-start": strength < 3,
        "justify-between": strength === 3,
      })}
    >
      {Array.from({ length: strength + 1 }).map((i, index) => (
        <div
          key={index}
          className={cn(
            {
              "bg-red-500": strength === 0,
              "bg-orange-500": strength === 1,
              "bg-yellow-500": strength === 2,
              "bg-green-500 grow": strength === 3,
            },
            "h-2  w-32 rounded-md "
          )}
        ></div>
      ))}
    </div>
  );
};

export default ShowPassStrength;
