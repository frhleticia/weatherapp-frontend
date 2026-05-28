'use client';

import Image from "next/image";

export function Hoje() {
    return (
        <div>
            <div>
                <Image
                    className=""
                    src="/images/clima.png"
                    alt=""
                    width={100}
                    height={20}
                    priority
                />
            </div>

            <div>
                <div>
                    <Image
                        className=""
                        src="/images/precipitacao.png"
                        alt="Precipitação"
                        width={100}
                        height={20}
                        priority
                    />
                    <p>%</p>
                    <p>Precipitação</p>
                </div>
                <div>
                    <Image
                        className=""
                        src="/images/humidade.png"
                        alt="Humidade"
                        width={100}
                        height={20}
                        priority
                    />
                    <p>%</p>
                    <p>Humidade</p>
                </div>
                <div>
                    <Image
                        className=""
                        src="/images/velocidadeVento.png"
                        alt="Velocidade do vento"
                        width={100}
                        height={20}
                        priority
                    />
                    <p>km/h</p>
                    <p>Velocidade vento</p>
                </div>
            </div>
        </div>
    );
}