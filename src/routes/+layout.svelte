<script>
	// import '@skeletonlabs/skeleton/themes/theme-skeleton.css'; // Skeleton theme
	import '$lib/styles/oregonTrail.postcss'; // Skeleton theme
	import '@skeletonlabs/skeleton/styles/skeleton.css'; // Skeleton styles
	import '$lib/styles/app.postcss'; // Global styles
	import { AppShell, Modal, Toast, LightSwitch } from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
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