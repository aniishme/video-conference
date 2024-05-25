import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogProps } from "@radix-ui/react-dialog";

type DialogBoxProps = {
  children: React.ReactNode;
  title: string;
  description: string;
  button: React.ReactNode;
};

const DialogBox: React.FC<DialogBoxProps & DialogProps> = ({
  children,
  title,
  description,
  button,
  ...props
}) => {
  return (
    <Dialog {...props}>
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
