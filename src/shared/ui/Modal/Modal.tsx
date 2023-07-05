import {Fragment, memo, ReactNode, useState} from 'react';
import {Dialog, Transition} from "@headlessui/react";
import cls from './Modal.module.scss'
import {Button} from "@/shared/ui/Button/Button.tsx";

interface ModalProps {
    className?: string;
    title?: string;
    children?: ReactNode;
    btnText?: ReactNode;
}
export const Modal = memo((props: ModalProps) => {
    const {className, title, children, btnText} = props;
    let [isOpen, setIsOpen] = useState(true)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <div className={className}>
            <Button
                size={'medium'}
                onClick={openModal}
            >
                {btnText}
            </Button>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className={cls.transition}/>
                    </Transition.Child>

                    <div className={cls.Modal}>
                        <div className={cls.menu}>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel
                                    className={cls.content}
                                >
                                    {
                                        title && (
                                            <Dialog.Title
                                                as="h3"
                                                className={cls.title}
                                            >
                                                {title}
                                            </Dialog.Title>
                                        )
                                    }
                                    {children}
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
});