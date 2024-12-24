<script lang="ts">
    import type { Snippet } from "svelte";
    import type { LayoutData } from "./$types";

    let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<div>
    <!-- <slot></slot> -->
    <!-- {@render children()} -->
    <p>
        <!-- {data} -->
    </p>
</div>
