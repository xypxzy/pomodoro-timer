import {memo, ReactNode, useEffect, useRef} from 'react';
import cn from "classnames";
import cls from './Modal.module.scss'
interface ModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    maxWidth?: 'm' | 'l';
}

export const Modal = memo((props: ModalProps) => {
    const {className, children, onClose, isOpen, maxWidth = 'm'} = props;
    const modalRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            onClose();
        }
    };
    const handleEscapeKey = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            onClose();
        }
    }
    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('keydown', handleEscapeKey);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscapeKey);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [isOpen, onClose]);


    if (!isOpen) return null;

    return (
        <div className={
            cn(cls.modal ,className)
        }>
            <div ref={modalRef} className={
                cn(cls.modalContent, {
                    [cls.m]: maxWidth == 'm',
                    [cls.l]: maxWidth == 'l',
                }
                )
            }>
                {children}
            </div>
        </div>
    )
});
