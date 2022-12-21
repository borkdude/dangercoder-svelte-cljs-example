<script src="../lib/code.cljs" lang="cljs">
</script>

<h1>The Famous Cats of Narnia</h1>

<button on:click={addCat}>
	Add cat
</button>

<Nested answer={answer}></Nested>

<ul>
    {#each cats as cat, i}
	<li><a target="_blank" href="https://www.youtube.com/watch?v={cat.id}" rel="noreferrer">
		{i + 1}: {cat.name}
	</a></li>
{/each}
</ul>

