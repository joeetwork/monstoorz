<script>
    import Table from "$lib/components/table.svelte";

    let trait = "Core";

    /**
     * @param {string} traitType
     * @returns {void}
     */
    function handleClick(traitType) {
        trait = traitType;
    }
</script>

<div class="mx-auto max-w-lg py-10">
    <div class="flex justify-around pb-4">
        <h1 class="text-3xl font-bold">Patterns</h1>

        <div
            role="tablist"
            class="tabs tabs-boxed max-w-fit"
        >
            <button
                role="tab"
                class={`tab font-bold ${
                    trait === "Core" && "bg-yellow-500 text-black"
                }`}
                on:click={() => handleClick("Core")}
                >Core
            </button>

            <button
                role="tab"
                class={`tab font-bold  ${
                    trait === "Special" && "bg-yellow-500 text-black"
                }`}
                on:click={() => handleClick("Special")}
                >Special
            </button>
        </div>
    </div>

    <Table />
</div>
