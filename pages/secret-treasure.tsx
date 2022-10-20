import type { NextPage } from "next";
import Link from "next/link";
import Navigation from "../components/Navigation";

const Dashboard: NextPage = () => {
    return (
        <>
            <Navigation />
            <div className="min-h-full bg-white px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
                <div className="mx-auto max-w-max">
                    <main className="sm:flex">
                        <img
                            className="h-20 w-auto"
                            src="gold-coin-2.png"
                            alt="Gold Coin"
                        />
                        <div className="sm:ml-6">
                            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                    You found a Gold Coin!
                                </h1>
                                <p className="mt-1 text-base text-gray-500">
                                    You found the secret treasure...
                                    <br></br>
                                    But is there more to be found?
                                </p>
                                <p className="mt-1 text-base text-gray-500"></p>
                            </div>
                            <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                                <Link href="/super-secret-treasure">
                                    <a
                                        href="#"
                                        className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        Dig deeper
                                    </a>
                                </Link>
                                <a
                                    href="#"
                                    className="inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Leave
                                </a>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
