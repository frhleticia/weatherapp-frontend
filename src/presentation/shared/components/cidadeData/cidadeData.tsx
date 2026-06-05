'use client';

import { PesquisarCidade } from "../pesquisarCidade/pesquisarCidade";

export function CidadeData() {
    return (
        <div>
            <div className="flex flex-col md:flex-row justify-start gap-4">
                <PesquisarCidade />
                <div className="">
                    <label className="block font-bold lg:text-xl ml-3 mb-1">
                        Data
                    </label>
                    <div className="flex mb-4">
                        <div className="flex flex-row items-center bg-purple-800 border border-purple-900 rounded-xl min-w-0 mx-2">
                            <input type="date"
                            className="lg:text-xl text-white px-4 py-3 min-w-0 w-full outline-none [&::-webkit-calendar-picker-indicator]:invert"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}