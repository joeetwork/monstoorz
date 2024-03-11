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
        class="sticky top-0 left-0 z-20 flex w-full items-center justify-between bg-black p-3"
    >
        <a href="/"
            ><img
                src={Icon}
                width="70"
                class="rounded hover:ring"
                alt=""
            />
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
