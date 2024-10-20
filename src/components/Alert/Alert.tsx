import { AlertProps } from '../../types/AlertTypes/AlertProps';

const CloseIcon = () => {
    return (
        <svg
            width={'24px'}
            height={'24px'}
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
            <g
                id='SVGRepo_tracerCarrier'
                strokeLinecap='round'
                strokeLinejoin='round'
            ></g>
            <g id='SVGRepo_iconCarrier'>
                {' '}
                <circle
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='#000000'
                    strokeWidth='1.5'
                ></circle>{' '}
                <path
                    d='M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5'
                    stroke='#000000'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                ></path>{' '}
            </g>
        </svg>
    );
};

const Alert = (props: AlertProps) => {
    return (
        <div className='relative m-1 transition-transform transform duration-300 ease-in-out'>
            <div className='absolute inset-0 bg-gradient-to-r from-green-700 to-green-500 rounded-lg opacity-0 animate-fadeIn'></div>
            <div
                {...props}
                className='relative p-4 m-[2px] bg-white text-black rounded-md min-w-[400px] shadow-md flex items-center justify-between opacity-0 animate-fadeIn'
            >
                <div className='flex gap-3'>
                    <div className='text-xl'>🚀</div>
                    <p>{props.message}</p>
                </div>
                <div
                    className='close-icon'
                    onClick={() => props.onClose(props.timerId)}
                >
                    <CloseIcon />
                </div>
            </div>
        </div>
    );
};

export default Alert;
