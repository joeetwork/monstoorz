<style global>
    @import "../app.postcss";
</style>

<script>
    import Icon from "$lib/assets/logo.png";
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
        <div class="flex items-center">
            <a
                href="/traits"
                class="link"
            >
                Traits
            </a>
            <a
                href="/viewer"
                class="link"
            >
                Viewer
            </a>
        </div>
    </nav>
    <slot />
</main>
