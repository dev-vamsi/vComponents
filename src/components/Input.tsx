import mergeClasses from '../lib/utils';

const Input = (
    props: React.InputHTMLAttributes<HTMLInputElement>
): JSX.Element => {
    return (
        <input
            className={mergeClasses(
                'border border-gray-900 p-2 rounded-md w-full m-1 shadow-inner outline-blue-500 caret-blue-500',
                props.className
            )}
            {...props}
        />
    );
};

export default Input;
