import type { NextPage } from "next";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import Navigation from "../components/Navigation";

const createUser = async (
    event: FormEvent,
    router: NextRouter,
    setLoading: any
) => {
    event.preventDefault();

    const user = {
        username: (event.target as any).username.value,
        password: (event.target as any).password.value,
        confirm_password: (event.target as any).confirm_password.value,
    };

    console.log(user);

    if (user.password !== user.confirm_password) {
        alert("Passwords do not match");
        setLoading(false);
        return;
    }

    await fetch("api/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        });

    router.push("/dashboard");
};

const Dashboard: NextPage = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    return (
        <>
            <Navigation />
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                        Add User
                    </h1>
                </div>
            </header>
            <main>
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <form
                        onSubmit={(e) => createUser(e, router, setLoading)}
                        className="space-y-8 divide-y divide-gray-200"
                    >
                        <div className="space-y-6 pt-8 sm:space-y-5 sm:pt-10">
                            <div>
                                <h3 className="text-lg font-medium leading-6 text-gray-900">
                                    Create new account
                                </h3>
                                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                    Please fill in the following account
                                    details.
                                </p>
                            </div>
                            <div className="space-y-6 sm:space-y-5">
                                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label
                                        htmlFor="username"
                                        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                    >
                                        Username
                                    </label>
                                    <div className="mt-1 sm:col-span-2 sm:mt-0">
                                        <input
                                            id="username"
                                            name="username"
                                            type="text"
                                            autoComplete="off"
                                            required
                                            className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                    >
                                        Password
                                    </label>
                                    <div className="mt-1 sm:col-span-2 sm:mt-0">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            minLength={8}
                                            required
                                            className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                    >
                                        Confirm Password
                                    </label>
                                    <div className="mt-1 sm:col-span-2 sm:mt-0">
                                        <input
                                            id="confirm_password"
                                            name="confirm_password"
                                            type="password"
                                            required
                                            className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label
                                        htmlFor="country"
                                        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                    >
                                        Role
                                    </label>
                                    <div className="mt-1 sm:col-span-2 sm:mt-0">
                                        <select
                                            id="role"
                                            name="role"
                                            autoComplete="role"
                                            className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                                        >
                                            <option>pirate king</option>
                                            <option>bucanneer</option>
                                            <option>scurvey dog</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-5">
                            <div className="flex justify-end">
                                <Link href="/admin-panel">
                                    <button
                                        type="button"
                                        className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        Cancel
                                    </button>
                                </Link>
                                <button
                                    type="submit"
                                    className={
                                        loading
                                            ? "hidden"
                                            : "ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    }
                                    onClick={() => setLoading(true)}
                                >
                                    Save
                                </button>

                                <button
                                    disabled
                                    type="submit"
                                    className={
                                        !loading
                                            ? "hidden"
                                            : "ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    }
                                >
                                    <svg
                                        role="status"
                                        className="inline mr-3 w-4 h-4 text-white animate-spin"
                                        viewBox="0 0 100 101"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                            fill="#E5E7EB"
                                        />
                                        <path
                                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    Save
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
};

export default Dashboard;
