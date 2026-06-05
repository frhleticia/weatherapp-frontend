'use client';


export function Hoje() {
    return (
        <div className="bg-purple-800/50 border border-purple-900 rounded-xl p-4 flex flex-wrap items-center md:flex-row md:justify-between">
            <div className="flex flex-wrap items-center px-8">
                <img
                    className="flex w-auto h-[10vh] md:h-[20vh]"
                    src="/images/SOL.png"
                    alt=""
                />
                <div className="flex">
                    <span className="text-white text-4xl font-bold pl-4">
                        23°
                    </span>
                    <div className="pt-4">
                        <span className="text-white text-2xl pr-2">
                            /
                        </span>
                        <span className="text-white text-lg">
                            17°
                        </span>
                    </div>
                </div>
            </div>
            <div className="gap-6 md:gap-10 flex flex-wrap h-full md:flex-row lg:justify-end mr-10">
                <div className="flex flex-col items-center">
                    <img
                        className="w-auto h-[4vh] md:h-[10vh] flex"
                        src="/images/precipitacao.png"
                        alt="Precipitação"
                    />
                    <p>%</p>
                    <p>Precipitação</p>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        className="w-auto h-[4vh] md:h-[10vh] flex"
                        src="/images/humidade.png"
                        alt="Precipitação"
                    />
                    <p>%</p>
                    <p>Humidade</p>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        className="w-auto h-[4vh] md:h-[10vh] flex"
                        src="/images/velocidadeVento.png"
                        alt="Precipitação"
                    />
                    <p>km/h</p>
                    <p>Vel. vento</p>
                </div>
            </div>
        </div>
    );
}