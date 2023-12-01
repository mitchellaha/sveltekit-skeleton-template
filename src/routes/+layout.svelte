<script>
	import '$lib/styles/app.postcss';
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup, AppShell, Modal, Toast, LightSwitch, initializeStores } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	initializeStores();
</script>


<Modal />
<Toast />
<AppShell
slotPageContent="flex justify-center overflow-hidden h-max"
slotHeader="sticky z-10 m-1 p-1">
	<svelte:fragment slot="header">
		<LightSwitch />
	</svelte:fragment>

	<slot />
</AppShell>