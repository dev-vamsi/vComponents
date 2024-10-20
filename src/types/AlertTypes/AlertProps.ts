export interface AlertProps {
    message: string;
    onClose: (timerId: number) => void;
    timerId: number;
}
