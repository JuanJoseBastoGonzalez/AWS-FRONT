<!-- ProductCard.svelte -->

  
  <Card padding="none">
    <a href="/">
      <img class="p-8 rounded-t-lg" src={productImage} alt={productName} />
    </a>
    <div class="px-5 pb-5">
      <a href="/">
        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{productName}</h5>
      </a>
      <Rating rating={productRating} size={24} class="mt-2.5 mb-5">
        <Badge slot="text" class="ms-3">{productRating}</Badge>
      </Rating>
      <div class="flex justify-between items-center">
        <span class="text-3xl font-bold text-gray-900 dark:text-white">{productPrice}</span>
        <Button href="/">Buy now</Button>
      </div>
    </div>
  </Card>
  
  <script lang="ts">
    import "./Card.css"
    import { Card, Button, Rating, Badge } from "flowbite-svelte";
  
      // Define las props que el componente puede recibir
      export let productName: string;
      export let productPrice: string;
      export let productImage: string;
      export let productRating: number;
    </script>