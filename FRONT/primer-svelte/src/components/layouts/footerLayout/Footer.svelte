<!-- src/components/Footer/Footer.svelte -->
<footer>
  <div class="container">
    <div class="footer-grid">
      <!-- Logo and Social Links -->
      <div class="footer-column">
        <div class="logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
            <path d="M9 9h6v6H9z"></path>
          </svg>
        </div>
        <div class="social-links">
          <a href="#" class="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
            <span class="sr-only">X (Twitter)</span>
          </a>
          <a href="#" class="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span class="sr-only">Instagram</span>
          </a>
          <a href="#" class="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
            </svg>
            <span class="sr-only">YouTube</span>
          </a>
          <a href="#" class="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            <span class="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
      
      <!-- Use cases Column -->
      <div class="footer-column">
        <h3 class="column-title">Use cases</h3>
        <ul class="footer-links">
          <li class="footer-link"><a href="#">UI design</a></li>
          <li class="footer-link"><a href="#">UX design</a></li>
          <li class="footer-link"><a href="#">Wireframing</a></li>
          <li class="footer-link"><a href="#">Diagramming</a></li>
          <li class="footer-link"><a href="#">Brainstorming</a></li>
          <li class="footer-link"><a href="#">Online whiteboard</a></li>
          <li class="footer-link"><a href="#">Team collaboration</a></li>
        </ul>
      </div>
      
      <!-- Explore Column -->
      <div class="footer-column">
        <h3 class="column-title">Explore</h3>
        <ul class="footer-links">
          <li class="footer-link"><a href="#">Design</a></li>
          <li class="footer-link"><a href="#">Prototyping</a></li>
          <li class="footer-link"><a href="#">Development features</a></li>
          <li class="footer-link"><a href="#">Design systems</a></li>
          <li class="footer-link"><a href="#">Collaboration features</a></li>
          <li class="footer-link"><a href="#">Design process</a></li>
          <li class="footer-link"><a href="#">FigJam</a></li>
        </ul>
      </div>
      
      <!-- Resources Column -->
      <div class="footer-column">
        <h3 class="column-title">Resources</h3>
        <ul class="footer-links">
          <li class="footer-link"><a href="#">Blog</a></li>
          <li class="footer-link"><a href="#">Best practices</a></li>
          <li class="footer-link"><a href="#">Colors</a></li>
          <li class="footer-link"><a href="#">Color wheel</a></li>
          <li class="footer-link"><a href="#">Support</a></li>
          <li class="footer-link"><a href="#">Developers</a></li>
          <li class="footer-link"><a href="#">Resource library</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>

<script>
  // Importar los estilos desde el archivo CSS
  import './Footer.css';
</script>