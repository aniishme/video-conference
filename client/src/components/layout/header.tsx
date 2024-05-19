import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
    <nav className="w-4/5 flex justify-between items-center px-2 py-4 ">
      <h1 className="text-xl">The meeting of the Higher Ups</h1>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </nav>
  );
};

export default Header;
