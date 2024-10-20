import { createContext, useEffect, useState } from 'react';
import { AlertContextType } from '../../types/AlertTypes/AlertContextType';
import { AlertQueueType } from '../../types/AlertTypes/AlertQueueType';
import { NewAlertProps } from '../../types/AlertTypes/NewAlertProps';

export const AlertContext = createContext<AlertContextType>(
    {} as AlertContextType
);

export default function AlertProvider(props: React.HTMLAttributes<any>) {
    const [alertQueue, setAlertQueue] = useState<AlertQueueType[]>([]);

    useEffect(() => {
        return () => {
            alertQueue.map((alert) => {
                clearTimeout(alert.timerId);
            });
        };
    }, []);

    const makeNewAlert = (newAlertDetails: NewAlertProps) => {
        const timerId: number = setTimeout(() => {
            newAlertDetails.onClose(timerId);
        }, 3000);

        setAlertQueue((prev) => [
            ...prev,
            { alertDetails: newAlertDetails, timerId },
        ]);
    };

    const onClose = (timerId: number) => {
        clearTimeout(timerId);
        setAlertQueue((prev) =>
            prev.filter((alert) => alert.timerId !== timerId)
        );
    };

    const value = {
        alertQueue,
        setAlertQueue,
        makeNewAlert,
        onClose,
    };
    return (
        <AlertContext.Provider value={value}>
            {props.children}
        </AlertContext.Provider>
    );
}
