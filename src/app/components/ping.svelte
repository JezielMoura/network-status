<script>
import { onMount } from "svelte";

    export let icon = 'load.svg';
    export let ip = '127.0.0.1';
    export let title = 'Nenhum';
    let success = false;

    const load = async () => {
        success = false;
        let response = await fetch(`http://localhost:5000/api/${ip}`);
        success = (await response.text()) == "True" ? true : false;
    }

    onMount(async () =>  load())
    
</script>

<style>
    .box-status { 
        width: 230px; height: 140px; border: 3px solid rgba(255, 255, 255, 0.3); border-radius: 5px;
        margin: 10px; padding: 20px; box-sizing: border-box; display: flex; flex-direction: column; 
        align-items: center; cursor: pointer; }

    p { color: #fff; padding-top: 15px;}
    .true { background: rgb(11, 189, 26);}
    .false { background: rgb(223, 42, 42);}
    .loading { background: orange; }
</style>

<div class="box-status {success}" on:click={load}>
    <img src={icon} alt="" width=60px height=60px>
    <p>{ title }</p>
</div>