<script>
  export let name;
  export let value;
  export let measure;

  const dataToFixed = (num) => (num / 10).toFixed(1);
</script>

<div>
  <h1 class="font-semibold">{dataToFixed(value)} {measure}</h1>
  <h1 class="text-xl text-gray-500">{name}</h1>
</div>
