<script>
    import { SPECIALPATTERNS } from "../../constants";
</script>

<div class="overflow-x-auto">
    {#each SPECIALPATTERNS as pattern}
        <table class="mx-auto my-8 table w-full table-fixed">
            <thead>
                <tr>
                    <th
                        class="text-center text-lg font-bold"
                        colspan="3">{pattern.pattern}</th
                    >
                </tr>
                <tr>
                    <th class="w-1/3">Function</th>
                    <th class="w-1/3">Trait</th>
                    <th class="w-1/3">Frequency</th>
                </tr>
            </thead>
            <tbody>
                {#each pattern.traits as trait}
                    <tr>
                        <td class="whitespace-normal break-words"
                            >{trait.function}</td
                        >
                        <td class="whitespace-normal break-words"
                            >{trait.trait}</td
                        >
                        <td class="whitespace-normal break-words"
                            >{trait.frequency}</td
                        >
                    </tr>
                {/each}
            </tbody>
        </table>
    {/each}
</div>
