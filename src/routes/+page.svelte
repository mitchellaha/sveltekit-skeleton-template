<script>
    import FaCat from 'svelte-icons/fa/FaCat.svelte';
    import TestComponent from '$components/TestComponent.svelte';

    $: name = 'World';
</script>


<div class="flex flex-col justify-center align-middle gap-2">
    <div class="w-10"><FaCat /></div>
    <h1>Welcome to SvelteKit Skeleton Template</h1>
    <div class="grid grid-cols-3 gap-2">
        <button class="btn btn-sm variant-filled-primary">Primary</button>
        <button class="btn btn-sm variant-filled-secondary">Secondary</button>
        <button class="btn btn-sm variant-filled-tertiary">Tertiary</button>
        <button class="btn btn-sm variant-filled-success">Success</button>
        <button class="btn btn-sm variant-filled-warning">Warning</button>
        <button class="btn btn-sm variant-filled-error">Error</button>
    </div>
    <div class="flex flex-col gap-2 border border-black p-2 m-2">
        <div class="flex flex-row gap-1">
            <span class="font-semibold">Name:</span>
            <input class="input input-sm" type="text" placeholder="Enter your name" bind:value={name} />
        </div>
        <TestComponent name={name} />
    </div>
</div>