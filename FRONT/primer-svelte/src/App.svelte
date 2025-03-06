<script lang="ts">
  import { Router, Route, Link, link } from "svelte-routing";
  import routes from "./routes/routes.js";
  import Home from "./routes/index.svelte";
  import { Carousel } from "flowbite-svelte";
  import images from "./assets/images/images.json";
  import "./app.css";
  import ProductCard from "./components/ui/card/Index.js";
  import Footer from "./components/layouts/footerLayout/Index.js";
  import NavbarComponent from "./components/ui/menu/Menu.svelte";
  const products = [
    {
      name: "Samsung Galaxy Watch 4",
      price: "$349",
      image: "/images/product-2.webp",
      rating: 5,
    },
    {
      name: "Apple Watch Series 7",
      price: "$599",
      image: "/images/product-1.webp",
      rating: 4,
    },
    {
      name: "Xiaomi Mi Band 6",
      price: "$99",
      image: "/images/product-3.webp",
      rating: 4.5,
    },
    {
      name: "Fitbit Charge 5",
      price: "$179",
      image: "/images/product-4.webp",
      rating: 4.2,
    },
  ];
</script>

hiohasoidfsf
<main>

<!-- 
condicional if para validar y aparecer 
  <NavbarComponent /> -->
  
  
  <nav></nav>

  <div>
    <Carousel {images} let:Controls>
      <Controls />
    </Carousel>
  </div>
  <div class="networking">
    <section>1</section>
    <section>2</section>
    <section>3</section>
    <section>4</section>
    <section>5</section>
    <section>6</section>
  </div>
  <p class="text-lg dark:text-white">Productos</p>
  <!-- <Link "href"='/'>Home</Link> -->
  <!-- <Link to="/about">About</Link>
    <Link to="/dashboard">Dashboard</Link>
    <Link to="/profile">Profile</Link>  -->
  <div class="products">
    {#each products as product}
      <ProductCard
        productName={product.name}
        productPrice={product.price}
        productImage={product.image}
        productRating={product.rating}
      />
    {/each}
  </div>

  <p>SERVICIOS</p>

  <div class="products">
    {#each products as product}
      <ProductCard
        productName={product.name}
        productPrice={product.price}
        productImage={product.image}
        productRating={product.rating}
      />
    {/each}
  </div>
  <Footer />

  <Router>
    {#each routes as { path, component }}
      <Route {path} {component} />
    {/each}
  </Router>
</main>

<style lang="less">
  .networking {
    background-color: aqua;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .products {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
  }
  
</style>
