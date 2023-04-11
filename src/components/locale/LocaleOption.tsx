import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'

type Props = {
    // custom props here...'
    name: string;
    flag: React.ReactNode;
    changeTo: string;
    path: string;
}

const LocaleOption = ({ name, flag, changeTo, path }: Props) => {
    return (
        <li>
            <Link
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem"
                locale={changeTo}
                target="_blank"
                href={path}
            >
                <div className="inline-flex items-center">
                    {flag}
                    {name}
                </div>
            </Link>
        </li >)
}

export default LocaleOption