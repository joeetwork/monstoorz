<style global>
    @import "../app.postcss";
</style>

<script>
    import Icon from "$lib/assets/logo.png";
    import { page } from "$app/stores";
    import { NAVLINKS } from "../constants";

    $: activePath = $page.url.pathname;
</script>

<main>
    <nav
        class="sticky top-0 left-0 z-20 flex w-full items-center justify-between bg-black py-3 px-4"
    >
        <a href="/">
            <div class="flex items-center gap-2">
                <img
                    src={Icon}
                    width="50"
                    class="rounded"
                    alt=""
                />
                <h1 class="text-4xl font-bold text-yellow-500">Monstoorz</h1>
            </div>
        </a>

        <div class="flex items-center gap-6">
            {#each NAVLINKS as { path, label }}
                <a
                    href={path}
                    class={`text-xl hover:text-yellow-500 ${
                        activePath === path && "text-yellow-500"
                    }`}
                >
                    {label}
                </a>
            {/each}
        </div>
    </nav>
    <slot />
</main>
