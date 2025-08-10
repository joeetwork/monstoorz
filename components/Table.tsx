interface PatternProps {
    pattern: string;
    traits: {
        function: string;
        trait: string;
        frequency: string;
    }[];
}

interface TableProps {
    patterns: PatternProps[];
}

export default function Table({ patterns }: TableProps) {
    return (
        <div className="overflow-x-auto">
            {patterns.map((pattern, index) => (
                <table
                    key={index}
                    className="mx-auto my-8 table w-full table-fixed"
                >
                    <thead>
                        <tr>
                            <th
                                className="text-center text-lg font-bold"
                                colSpan={3}
                            >
                                {pattern.pattern}
                            </th>
                        </tr>
                        <tr>
                            <th className="w-1/3">Function</th>
                            <th className="w-1/3">Trait</th>
                            <th className="w-1/3">Frequency</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pattern.traits.map((trait, traitIndex) => (
                            <tr key={traitIndex}>
                                <td className="whitespace-normal break-words">
                                    {trait.function}
                                </td>
                                <td className="whitespace-normal break-words">
                                    {trait.trait}
                                </td>
                                <td className="whitespace-normal break-words">
                                    {trait.frequency}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ))}
        </div>
    );
}
