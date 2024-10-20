export interface NewAlertProps {
    message: string;
    onClose: (timerId: number) => void;
}
