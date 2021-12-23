<script>
	$: cssVariables = Object
        .entries($$props)
        .filter(([key]) => key.startsWith('--'))
        .reduce((css, [key,value])=> `${ css }${ key }: ${ value };`, '');
</script>
<span class="icon" style="{cssVariables}">
    <slot></slot>
</span>
<style>
.icon {
    width: 32px;
    height: 32px;
    padding: 5px;
    color: var(--text-color, inhert);
}
</style>
