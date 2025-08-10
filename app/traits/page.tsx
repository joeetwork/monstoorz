"use client";

import { useState } from "react";
import Table from "@/components/Table";
import { SPECIALPATTERNS, COREPATTERNS } from "@/lib/constants";

export default function TraitsPage() {
    const [trait, setTrait] = useState("Core");

    const handleClick = (traitType: string) => {
        setTrait(traitType);
    };

    return (
        <div className="mx-auto max-w-lg py-10">
            <div className="flex justify-around">
                <h1 className="text-3xl font-bold">Patterns</h1>

                <div
                    role="tablist"
                    className="tabs tabs-boxed max-w-fit"
                >
                    <button
                        role="tab"
                        className={`tab font-bold ${
                            trait === "Core" && "bg-yellow-500 text-black"
                        }`}
                        onClick={() => handleClick("Core")}
                    >
                        Core
                    </button>

                    <button
                        role="tab"
                        className={`tab font-bold ${
                            trait === "Special" && "bg-yellow-500 text-black"
                        }`}
                        onClick={() => handleClick("Special")}
                    >
                        Special
                    </button>
                </div>
            </div>

            <Table
                patterns={trait === "Special" ? SPECIALPATTERNS : COREPATTERNS}
            />
        </div>
    );
}
