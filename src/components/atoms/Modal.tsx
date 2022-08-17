import React, { ReactNode, Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { classNames } from "@/utils/helpers";

type Props = {
  children: ReactNode;
  className?: string;
  open: boolean;
  onClose: () => void;
};
const Modal: React.FC<Props> = ({
  children,
  className,
  open,
  onClose,
  ...other
}) => {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog onClose={onClose} className="fixed z-10 inset-0 overflow-y-auto">
        <Dialog.Overlay className="fixed inset-0 bg-overlay cursor-pointer" />
        <Transition.Child
          as={Fragment}
          enter="transition duration-250 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-250 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <div
            className={classNames(
              className,
              "relative z-10 max-w-[700px] min-h-[70%px] my-[56px] mx-auto bg-white rounded-[14px]"
            )}
            {...other}
          >
            {children}
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default React.memo(Modal);
