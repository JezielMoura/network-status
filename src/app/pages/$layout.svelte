<script>
	import '../app.css';
</script>

<style>
    h1 { text-align: center; color: white; font-weight: 400; padding: 30px; letter-spacing: 7px; }
    .container { 
        max-width: 1120px; margin-left: auto; margin-right: auto; display: flex; flex-wrap: wrap;
        justify-content: center; align-items: center;}
</style>

<h1>Network Status</h1>
<div class="container">
    <slot />
</div>