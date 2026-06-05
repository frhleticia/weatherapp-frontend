import { Footer } from "@/src/presentation/shared/components/footer/footer";
import { Navbar } from "@/src/presentation/shared/components/navbar/navbar";
import { PesquisarCidade } from "@/src/presentation/shared/components/pesquisarCidade/pesquisarCidade";
import { Tabela } from "@/src/presentation/shared/components/tabela/tabela";

export default function Listar() {
    return (
        <div className="bg-purple-900 min-h-screen flex flex-col">
                <Navbar />
                  <main className="flex-1 flex flex-col px-4 py-6 lg:px-8">
                    <h1 className="text-white text-lg lg:text-3xl font-bold ml-3 mb-6">
                        Lista de cidades
                    </h1>
                    <PesquisarCidade />
                    <Tabela />
                  </main>
                  <Footer />
            </div>
    );
}