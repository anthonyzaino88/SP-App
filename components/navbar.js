// navbar.js

class BottomNavbar extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: 'open' });
  
      shadowRoot.innerHTML = `
        <style>
 
          nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #053658;
            color: #fff;
            padding: 15px;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 999;
            opacity: 1;
         
    
           
            box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
           
           
          }
  
          .nav-link {
            text-decoration: none;
            color: #fff;
            text-align: center;
            font-size: 12px;
            letter-spacing: 1px;
          }
  
        </style>
  
        <nav>
          <a class="nav-link" href="https://anthonyzaino88.github.io/sp-app/">
          <img src="../assets/images/home.svg" alt="home" class="icon-color">
            <span class="nav-icon"></span><br>Home
          </a>
          <a class="nav-link" href="https://anthonyzaino88.github.io/sp-app/pages/products.html">
          <img src="../assets/images/fan-white.svg" alt="Products" class="icon-color">
            <span class="nav-icon"></span><br>Products
          </a>
          <a class="nav-link" href="https://anthonyzaino88.github.io/sp-app/pages/library.html">
          <img src="../assets/images/library.svg" alt="Products" class="icon-color">
            <span class="nav-icon"></span><br>Library
          </a>
          <a class="nav-link" href="https://anthonyzaino88.github.io/sp-app/">
          <img src="../assets/images/right-left-white.svg" alt="Products" class="icon-color">
            <span class="nav-icon"></span><br>Cross-Ref
          </a>
          <a class="nav-link" href="https://anthonyzaino88.github.io/sp-app/">
          <img src="../assets/images/solidplay-white.svg" alt="Products" class="icon-color">
            <span class="nav-icon"></span><br>Media
          </a>
        </nav>
      `;
    }
  }
  
  customElements.define('bottom-navbar', BottomNavbar);
  
