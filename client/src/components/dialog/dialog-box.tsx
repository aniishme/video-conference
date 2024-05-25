import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type DialogBoxProps = {
  children: React.ReactNode;
  title: string;
  description: string;
  button: React.ReactNode;
};

const DialogBox: React.FC<DialogBoxProps> = ({
  children,
  title,
  description,
  button,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{button}</DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        {children}
      </DialogContent>
    </Dialog>
  );
};

export default DialogBox;
