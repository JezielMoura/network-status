<script>
import Ping from "../components/ping.svelte";


</script>

<svelte:head>
    <title>Network Status</title>
</svelte:head>

<Ping icon="internet.png" ip="1.1.1.1" title="Internet"></Ping>
<Ping icon="rb.png" ip="192.168.1.1" title="Mikrotik"></Ping>
<Ping icon="server.png" ip="192.168.1.160" title="Servidor"></Ping>
<Ping icon="router.png" ip="192.168.1.2" title="Recepção"></Ping>
<Ping icon="router.png" ip="192.168.1.3" title="AP 01"></Ping>
<Ping icon="router.png" ip="192.168.1.4" title="AP 02"></Ping>
<Ping icon="router.png" ip="192.168.1.5" title="AP 03"></Ping>
<Ping icon="router.png" ip="192.168.1.6" title="Restaurante"></Ping>
<Ping icon="router.png" ip="192.168.1.7" title="Bar"></Ping>
<Ping icon="router.png" ip="192.168.1.9" title="Estoque"></Ping>
<Ping icon="print.png" ip="192.168.1.161" title="Restaurante"></Ping>
<Ping icon="print.png" ip="192.168.1.162" title="Bar"></Ping>