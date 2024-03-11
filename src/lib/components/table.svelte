<script>
    import { PATTERNS } from "../../constants";
</script>

<div class="overflow-x-auto">
    {#each PATTERNS as pattern}
        <table class="mx-auto my-8 table">
            <thead>
                <tr>
                    <th
                        class="text-center text-lg font-bold"
                        colspan="3"
                    >
                        {pattern.pattern}
                    </th>
                </tr>
                <tr>
                    <th>Function</th>
                    <th>Trait</th>
                    <th>Frequency</th>
                </tr>
            </thead>
            <tbody>
                {#each pattern.traits as trait}
                    <tr>
                        <td>{trait.function}</td>
                        <td>{trait.trait}</td>
                        <td>{trait.frequency}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    {/each}
</div>
