import type { NextPage } from "next";
import Link from "next/link";
import Navigation from "../components/Navigation";

const Dashboard: NextPage = () => {
    return (
        <>
            <Navigation />
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                        Find Treasure
                    </h1>
                </div>
            </header>
            <main>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    <div className="min-h-full bg-white px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
                        <div className="mx-auto max-w-max">
                            <div className="sm:flex">
                                <img
                                    className="h-20 w-auto"
                                    src="treasure-chest.png"
                                    alt="Treasure Chest"
                                />
                                <div className="sm:ml-6">
                                    <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                            You found a Treasure Chest!
                                        </h1>
                                        <p className="mt-1 text-base text-gray-500">
                                            You are a true treasure hunter!
                                        </p>
                                        <p className="mt-1 text-base text-gray-500"></p>
                                    </div>
                                    <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                                        <Link href="/secret-treasure">
                                            <a
                                                href="#"
                                                className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            >
                                                Go Back
                                            </a>
                                        </Link>
                                        <Link href="/treasure-island">
                                            <a
                                                href="#"
                                                className="inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            >
                                                Leave
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Dashboard;
