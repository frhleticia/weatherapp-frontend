'use client';

import Image from "next/image";

export function Semana() {
    return (
        <div className="flex flex-col gap-3 mt-6">
            <div className="flex gap-4 flex-row justify-between">
                <div>
                    <span className="text-white text-md">
                        10/10/2026
                    </span>
                </div>

                <div className="flex flex-row justify-center gap-2">
                    <img
                        className="h-1/2 w-auto flex "
                        src="/images/SOL.png"
                        alt=""
                    />
                    <span className="text-white/80 text-xl">
                        Sol
                    </span>
                </div>

                <div className="flex gap-2 flex-row">
                    <span className="text-white text-md">
                        +31
                    </span>
                    <span className="text-white text-md">
                        +51
                    </span>
                </div>
            </div>
            
            <div className="flex gap-4 flex-row justify-between">
                <div>
                    <span className="text-white text-md">
                        10/10/2026
                    </span>
                </div>

                <div className="flex flex-row justify-center gap-2">
                    <img
                        className="h-1/2 w-auto flex "
                        src="/images/SOL.png"
                        alt=""
                    />
                    <span className="text-white text-xl">
                        Sol
                    </span>
                </div>

                <div className="flex gap-2 flex-row">
                    <span className="text-white text-md">
                        +31
                    </span>
                    <span className="text-white text-md">
                        +51
                    </span>
                </div>
            </div>
        </div>
    );
}