<script>
  import { onMount } from "svelte";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import { stats } from "../utils/StatColor";
  import { statsNames } from "../utils/StatName";

  export let stat;
  export let maxStat;

  const deleteHyphen = (str, rep = " ") => str.replace(/-/g, rep);

  const getWidth = (num) => (num * 100) / maxStat;

  const width = tweened(0, {
    duration: 400,
    easing: cubicOut,
  });

  onMount(() => {
    let statWidth = getWidth(stat.base_stat);
    width.set(statWidth);
  });
</script>

<h1 class="md:hidden">{statsNames[deleteHyphen(stat.stat.name, "_")]}</h1>
<h1 class="hidden md:block">{deleteHyphen(stat.stat.name, " ")}</h1>

<div class="col-span-3 w-full h-min rounded-2xl bg-white">
  <h1
    class="text-base text-right p-1 rounded-2xl"
    style="width: {$width}%; background-color: {stats[
      deleteHyphen(stat.stat.name, '_')
    ]};"
  >
    {stat.base_stat}/{maxStat}
  </h1>
</div>
