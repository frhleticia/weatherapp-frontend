'use client';

export function CincoDados() {
    return (
        <div className="">
            <div className="flex flex-col gap-4 lg:grid lg:grid-cols-3 mb-4">
                <div className="col-start-1">
                    <label className="block font-bold lg:text-xl ml-3 mb-1">
                        Temperatura Máxima
                    </label>
                    <div className="flex">
                        <div className="flex flex-row items-center bg-purple-800 border border-purple-900 rounded-xl min-w-0 mx-2">
                            <input type="number"
                            placeholder="31°C"
                            className="lg:text-xl text-white px-4 py-2 min-w-0 w-full outline-none"
                            />
                        </div>
                    </div>
                </div>
                <div className="col-start-3">
                    <label className="block font-bold lg:text-xl mb-1">
                        Temperatura Mínima
                    </label>
                    <div className="flex">
                        <div className="flex flex-row items-center bg-purple-800 border border-purple-900 rounded-xl min-w-0 mx-2">
                            <input type="number"
                            placeholder="18°C"
                            className="lg:text-xl text-white px-4 py-2 min-w-0 w-full outline-none"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-3 gap-4">
                <div className="col-start-1">
                    <label className="block font-bold lg:text-xl ml-3 mb-1">
                        Precipitação
                    </label>
                    <div className="flex">
                        <div className="flex flex-row items-center bg-purple-800 border border-purple-900 rounded-xl min-w-0 mx-2">
                            <input type="number"
                            placeholder="10%"
                            className="lg:text-xl text-white px-4 py-2 min-w-0 w-full outline-none"
                            />
                        </div>
                    </div>
                </div>
                <div className="col-start-2">
                    <label className="block font-bold lg:text-xl ml-3 mb-1">
                        Humidade
                    </label>
                    <div className="flex">
                        <div className="flex flex-row items-center bg-purple-800 border border-purple-900 rounded-xl min-w-0 mx-2">
                            <input type="number"
                            placeholder="30%"
                            className="lg:text-xl text-white px-4 py-2 min-w-0 w-full outline-none"
                            />
                        </div>
                    </div>
                </div>
                <div className="col-start-3">
                    <label className="block font-bold lg:text-xl mb-1">
                        Velocidade do vento
                    </label>
                    <div className="flex">
                        <div className="flex flex-row items-center bg-purple-800 border border-purple-900 rounded-xl min-w-0 mx-2">
                            <input type="number"
                            placeholder="30%"
                            className="lg:text-xl text-white px-4 py-2 min-w-0 w-full outline-none"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}