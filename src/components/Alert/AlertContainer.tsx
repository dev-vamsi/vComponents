import useAlert from '../../hooks/useAlert';
import Alert from './Alert';

const AlertContainer = () => {
    const { alertQueue, onClose } = useAlert();
    return (
        <div className='absolute top-0 right-0 flex flex-col my-2'>
            {alertQueue?.map((alert) => {
                return (
                    <Alert
                        timerId={alert.timerId}
                        message={alert.alertDetails.message}
                        key={alert.timerId}
                        onClose={onClose}
                    />
                );
            })}
        </div>
    );
};

export default AlertContainer;
