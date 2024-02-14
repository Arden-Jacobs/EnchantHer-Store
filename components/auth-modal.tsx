import * as Dailog from "@radix-ui/react-dialog";
import { IoMdClose } from "react-icons/io";
import React from "react"

interface ModalProps {
  isOpen: boolean;
  onChange: (open: boolean) => void;
  children: React.ReactNode;
}

const AuthModal: React.FC<ModalProps> = ({
  isOpen,
  onChange,
  children,
}) => {
  return (
    <Dailog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
      <Dailog.DialogPortal>
        <Dailog.DialogOverlay
          className="
            bg-neutral-900/90
            backdrop-blur-sm
            fixed
            inset-0
            "
        />
        <Dailog.Content
          className="
            fixed
            drop-shadow-md
            border
            border-neutral-600
            top-[50%]
            left-[50%]
            max-h-full
            h-full
            md:h-auto
            md:max-h-[85vh]
            w-full
            md:w-[90vw]
            md:max-w-[450px]
            translate-x-[-50%]
            translate-y-[-50%]
            rounded-md
            bg-neutral-800
            p-[20px]
            focus:outline-none"
        >
          <div>{children}</div>
          <Dailog.Close asChild>
            <button
              className="
                    text-neutral-400
                    hover:text-white
                    absolute
                    top-[10px]
                    right-[10px]
                    inline-flex
                    h-[25px]
                    w-[25px]
                    appearance-none
                    items-center
                    justify-center
                    rounded-full
                    focus:outline-none"
            >
              <IoMdClose />
            </button>
          </Dailog.Close>
        </Dailog.Content>
      </Dailog.DialogPortal>
    </Dailog.Root>
  );
};

export default AuthModal;
