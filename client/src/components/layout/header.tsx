import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
    <div className="flex justify-between items-center w-4/5 px-2 py-4 bg-[#131B23]">
      <h1 className="text-xl font-extralight tracking-widest">ASTRO MEET</h1>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default Header;
