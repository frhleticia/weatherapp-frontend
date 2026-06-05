'use clint';

import { CincoDados } from "../cincoDados/cincoDados";

export function TempoTurno() {
    return (
        <div className="bg-black/8 border border-purple-900 rounded-xl py-8">
            <div className="flex md:justify-start gap-4 mr-auto">
                <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
                    <div className="col-start-1 mb-3 flex flex-col">
                        <label className="block font-bold lg:text-xl ml-2 mb-1">
                            Tempo
                        </label>
                        <div className="relative items-center bg-purple-800 border border-purple-900 rounded-xl min-w-0 mx-2">
                            <select
                            className="appearance-none lg:text-xl text-white px-4 py-3 min-w-0 w-full outline-none [&::-webkit-calendar-picker-indicator]:invert"
                            >
                                <option value="ensolarado">Ensolarado</option>
                                <option value="nublado">Nublado</option>
                                <option value="chuvoso">Chuvoso</option>
                                <option value="tempestuoso">Tempestuoso</option>
                            </select>
                            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary">
                                ▾
                            </span>
                        </div>
                        <div className="relative items-center bg-purple-800 border border-purple-900 rounded-xl min-w-0 mx-2 mt-2">
                            <select
                            className="appearance-none lg:text-xl text-white px-4 py-3 min-w-0 w-full outline-none [&::-webkit-calendar-picker-indicator]:invert"
                            >
                                <option value="ensolarado">Ensolarado</option>
                                <option value="nublado">Nublado</option>
                                <option value="chuvoso">Chuvoso</option>
                                <option value="tempestuoso">Tempestuoso</option>
                            </select>
                            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary">
                                ▾
                            </span>
                        </div>
                    </div>
                    <div>
                    <div className="col-start-2 mb-10">
                        <div className="mb-3">
                            <label className="block font-bold lg:text-xl ml-2 mb-1">
                                Turno
                            </label>
                            <div className="flex flex-row items-center bg-purple-800 border border-purple-900 rounded-xl min-w-0 mx-2">
                                <p className="lg:text-xl text-white px-4 py-3 min-w-0 w-full">
                                    Manhã
                                </p>
                            </div>
                            <div className="flex flex-row items-center bg-purple-800 border border-purple-900 rounded-xl min-w-0 mx-2 mt-2">
                                <p className="lg:text-xl text-white px-4 py-3 min-w-0 w-full">
                                    Noite
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

                
                <CincoDados />
            </div>
        </div>
    );
}