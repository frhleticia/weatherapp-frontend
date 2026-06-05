import Image from "next/image";

export function Footer() {
    return (
        <div className="bg-purple-800 p-4 m-3 border border-purple-900 rounded-xl text-white text-md lg:text-lg">
            <div className="flex flex-row gap-2 items-center justify-center">
            <p>
                made with love
            </p>
            <img
                src="/images/db.png"
                alt="DB"
                className="rounded-lg h-1/2"
            /> 
            </div>
            
        </div>
    );
}