/* eslint-disable react/prop-types */
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";

const AlertModal = ({
  isAlertModalOpen,
  setIsAlertModalOpen,
  header,
  description,
  onConfirm,
  disabled,
}) => {
  const handleConfirm = () => {
    onConfirm();
  };

  const handleCancel = () => {
    setIsAlertModalOpen(false);
  };

  return (
    <AlertDialog open={isAlertModalOpen} onOpenChange={setIsAlertModalOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{header}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <Button
            onClick={handleCancel}
            variant="outline"
            className="border-input text-black hover:text-black hover:bg-accent"
          >
            Cancel
          </Button>
          <Button
            onClick={handleConfirm}
            disabled={disabled}
            variant="linearGradient"
          >
            {disabled ? "Loading..." : "Confirm"}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertModal;
