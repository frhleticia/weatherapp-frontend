'use client';

import { MapPin, Search } from 'lucide-react';

export function PesquisarCidade() {
    return (
        <div>
            <label className="block font-bold lg:text-xl ml-3 mb-1">
                Pesquise a cidade
            </label>
            <div className="flex">
                <div className="flex flex-row items-center bg-purple-800 border border-purple-900 rounded-xl min-w-0 mx-2">
                    <Search className="ml-5 shrink-0" />
                    <input type="text"
                    placeholder="Porto Alegre"
                    className="lg:text-xl text-white px-4 py-2 min-w-0 w-full outline-none"
                    />
                </div>
                <div className="bg-purple-800 border border-purple-900 rounded-full p-3 w-max cursor-pointer">
                    <MapPin size={24} />
                </div>
            </div>
        </div>
    );
}