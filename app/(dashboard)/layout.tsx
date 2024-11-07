import type { Metadata } from "next";
import SideBar from "./_components/SideBar";
import Header from "./_components/Header";


export const metadata: Metadata = {
    title: "GeniusWriter",
    description: "An AI powered website to generate content for all users",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <main className="grid grid-cols-5">
            <aside className="col-span-1">
                <SideBar/>
            </aside>
            <section className="col-span-4">
                <Header/>
                {children}
            </section>
        </main>
    );
}
