'use client';

import Image from "next/image";

export function Tabela() {
    return (
        <div className="mt-10 flex flex-col flex-1">
            
            <div className="flex justify-between">
                <span className="text-white font-bold lg:text-xl ml-20">
                    Cidade
                </span>
                <span className="text-white font-bold lg:text-xl">
                    Data
                </span>
                <span className="text-white font-bold lg:text-xl mr-20">
                    Ação
                </span>
            </div>

            <div className="bg-black/8 border border-purple-900 rounded-xl py-2 mt-2">
                <div className="flex justify-between">
                    <span className="text-white font-bold lg:text-xl ml-20">
                        Cidade
                    </span>
                    <span className="text-white font-bold lg:text-xl">
                        Data
                    </span>
                    <div className="flex gap-4 mr-15">
                        <button>
                            <Image
                            src="/images/LAPIS.png"
                            alt="editar"
                            width={25}
                            height={25}
                            /> 
                        </button>
                        <button>
                            <Image
                            src="/images/DELETAR.png"
                            alt="deletar"
                            width={25}
                            height={25}
                            /> 
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-auto py-6">
                <span className="text-white text-sm font-bold pr-4 mt-1">
                    <button>
                        &lt;
                    </button>
                </span>
                <span className="text-white font-bold lg:text-xl">
                    Página x de x
                </span>
                <span className="text-white text-sm font-bold pl-4 mt-1">
                    <button>
                        &gt;
                    </button>
                </span>
            </div>
        </div>
    );
}