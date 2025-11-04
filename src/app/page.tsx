import { Button } from "@levsib2005/lab6";

export default function Home() {
  const buttonClick = () => {
    console.log("ok")
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Button variant={"primary"} size={"md"} onClick={buttonClick}>
        Привет
      </Button>
    </div>
  );
}
