import Index from "./index.svelte";
import About from "./about.svelte";
import Dashboard from "./dashboard.svelte";
import Profile from "./profile.svelte";

export default [
  { path: "/", component: Index },
  { path: "/about", component: About },
  { path: "/dashboard", component: Dashboard },
  { path: "/profile", component: Profile },
];
