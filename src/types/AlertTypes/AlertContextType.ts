import { AlertQueueType } from './AlertQueueType';
import { NewAlertProps } from './NewAlertProps';

export interface AlertContextType {
    alertQueue: AlertQueueType[];
    setAlertQueue: (data: any) => void;
    makeNewAlert: (data: NewAlertProps) => void;
    onClose: (timerId: number) => void;
}
