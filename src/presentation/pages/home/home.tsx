import { Footer } from "../../shared/components/footer/footer";
import { Hoje } from "../../shared/components/hoje/hoje";
import { Navbar } from "../../shared/components/navbar/navbar";
import { PesquisarCidade } from "../../shared/components/pesquisarCidade/pesquisarCidade";
import { Semana } from "../../shared/components/semana/semana";

export default function Home() {
    return (
        <div className="flex flex-col bg-purple-900 min-h-screen w-full">
            <Navbar />
              <main className="flex-1 px-6 py-6 lg:px-12">
                <div className="flex w-full mb-4 justify-end">
                  <PesquisarCidade />
                </div>
                <h1 className="text-white text-2xl font-bold mb-8">Hoje</h1>
                <Hoje />
                <Semana />
                
              </main>
              <Footer />
        </div>
      );
    }