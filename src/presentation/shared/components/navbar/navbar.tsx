'use client';

export function Navbar() {
    return (
        <div className="bg-purple-800 m-3 border border-purple-900 rounded-xl text-white text-lg lg:text-2xl font-bold">
            <nav className="px-4 py-2 lg:px-10">
                <ul className="flex flex-wrap flex-row items-center justify-start gap-3 lg:gap-6">
                    <li className="hover:underline underline-offset-4"><a href="/">Home</a></li>
                    <li className="hover:underline underline-offset-4"><a href="/cadastrar">Cadastrar</a></li>
                    <li className="hover:underline underline-offset-4"><a href="/listar">Listar</a></li>
                </ul>
            </nav>
        </div>
        
    );
}