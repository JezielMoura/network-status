<script>
import { onMount } from "svelte";
    let ping = 'Init';

    onMount(async () => {
        let response = await fetch("http://127.0.0.1:5000/api/127.0.0.1")
        ping = await response.text()
    })
</script>

<svelte:head>
    <title>Network Status</title>
</svelte:head>

<h1>{ ping }</h1>