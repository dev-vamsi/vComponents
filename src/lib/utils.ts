import { twMerge } from 'tailwind-merge';

export default function mergeClasses(
    defaultClasses: string,
    propClasses: string | undefined
) {
    return twMerge(defaultClasses, propClasses);
}
