import { CidadeData } from "../../shared/components/cidadeData/cidadeData";
import { Footer } from "../../shared/components/footer/footer";
import { Navbar } from "../../shared/components/navbar/navbar";
import { TempoTurno } from "../../shared/components/tempoTurno/tempoTurno";

export default function Cadastrar() {
  return (
    <div className="bg-purple-900 min-h-screen flex flex-col">
        <Navbar />
          <main className="flex-1 px-4 py-3 lg:px-8">
            <h1 className="text-white text-lg lg:text-3xl font-bold ml-3 mb-6">
                Cadastro meteorológico
            </h1>
              <CidadeData />
              <TempoTurno />

              <div className="flex justify-end gap-4 my-10">
                  <button className="bg-purple-800 hover:bg-black/8 text-white font-bold w-40 h-10 rounded-full">
                      Cancelar
                  </button>
                  <button className="bg-purple-800 hover:bg-black/8 text-white font-bold w-40 h-10 rounded-full">
                      Salvar
                  </button>
              </div>
          </main>
          <Footer />
    </div>
  )
}
