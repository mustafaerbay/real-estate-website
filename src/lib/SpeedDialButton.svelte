<script>
    import { SpeedDial, SpeedDialButton, Rating } from "flowbite-svelte";
    import {
        ShareNodesSolid,
        PrinterSolid,
        PhoneSolid,
        FileCopySolid,
        WhatsappSolid,
    } from "flowbite-svelte-icons";
    let open = false;
    let url = ""
    const email = () => {
        open = false;
    };

    let text = "asdasdda asdasdasd"
    function openWhatsapp() {
        // @ts-ignore
        window.open("https://wa.me/+901234567890?text="+text, "_blank").focus();
    }
    function openEmail() {
        // @ts-ignore
        window.open("https://wa.me/+905312422416", "_blank").focus();
    }
</script>

<SpeedDial defaultClass="absolute fixed end-16 bottom-16">
<!-- <SpeedDial shadow="green" gradient color="green" defaultClass="absolute fixed end-16 bottom-16"> -->
    <!-- <Rating slot="button" total={1} rating={0.5} size={48} /> -->
    <SpeedDialButton name="Email" href="/contact">
        <ShareNodesSolid class="w-6 h-6" />
    </SpeedDialButton>
    <SpeedDialButton name="Whatsapp" on:click={openWhatsapp}>
        <WhatsappSolid class="w-6 h-6" />
    </SpeedDialButton>
</SpeedDial>
