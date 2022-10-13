import type { NextPage } from "next";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

const navigation = [];

const Header: NextPage = () => {
    return (
        <>
            <header className="bg-indigo-600">
                <nav
                    className="mx-auto max-w-7xl px-4 sm:px-4 lg:px-8"
                    aria-label="Top"
                >
                    <div className="flex w-full  items-center justify-start border-b border-indigo-500 py-6 lg:border-none">
                        <div className="flex items-center px-2">
                            <a href="#">
                                <span className="sr-only">Your Company</span>
                                <img
                                    className="h-10 w-auto"
                                    src="https://tailwindui.com/img/logos/mark.svg?color=white"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className="flex flex-1 justify-center lg:justify-end">
                            <div className="w-full px-2 lg:px-6">
                                <label htmlFor="search" className="sr-only">
                                    Search projects
                                </label>
                                <div className="relative text-indigo-200 focus-within:text-gray-400">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <MagnifyingGlassIcon
                                            className="h-5 w-5"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <input
                                        id="search"
                                        name="search"
                                        className="block w-full rounded-md border border-transparent bg-indigo-400 bg-opacity-25 py-2 pl-10 pr-3 leading-5 text-indigo-100 placeholder-indigo-200 focus:bg-white focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
                                        placeholder="Search"
                                        type="search"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="ml-10 space-x-4 flex items-center justify-end">
                            <a
                                href="#"
                                className="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-indigo-600 hover:bg-indigo-50"
                            >
                                Log Out
                            </a>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;
