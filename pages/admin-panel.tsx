import type { NextPage } from "next";
import Navigation from "../components/Navigation";
import Table from "./Table";

const Dashboard: NextPage = () => {
    return (
        <>
            <Navigation />
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                        Admin Panel
                    </h1>
                </div>
            </header>
            <main>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    <Table />
                </div>
            </main>
        </>
    );
};

export default Dashboard;
