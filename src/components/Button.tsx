import mergeClasses from '../lib/utils';

const Button = (
    props: React.HTMLAttributes<HTMLButtonElement>
): JSX.Element => {
    return (
        <button
            className={mergeClasses(
                'py-2 px-4 bg-blue-500 text-white rounded-md m-1 shadow-md hover:scale-[1.02]',
                props.className
            )}
            {...props}
        >
            {props.children}
        </button>
    );
};

export default Button;
