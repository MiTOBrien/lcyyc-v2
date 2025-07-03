<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <div>
    <nav>
      <div class="left-nav">
        <RouterLink class="nav-link home" to="/" @click="closeMenu">LCYYC</RouterLink>
      </div>

      <!-- Desktop navigation -->
      <div class="right-nav desktop-nav">
        <RouterLink class="nav-link" to="/why">Why Yo-Yo?</RouterLink>
        <RouterLink class="nav-link" to="/lessons">Lessons</RouterLink>
        <RouterLink class="nav-link" to="/links">Links</RouterLink>
      </div>

      <!-- Mobile hamburger button -->
      <button class="hamburger" @click="toggleMenu" :class="{ active: isMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <!-- Mobile navigation menu -->
      <div class="mobile-nav" :class="{ open: isMenuOpen }">
        <RouterLink class="nav-link" to="/why" @click="closeMenu">Why YoYo?</RouterLink>
        <RouterLink class="nav-link" to="/lessons" @click="closeMenu">Lessons</RouterLink>
        <RouterLink class="nav-link" to="/links" @click="closeMenu">Links</RouterLink>
      </div>
    </nav>
  </div>
</template>

<style scoped>
nav {
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 80px;
  padding: 10px 20px;
  box-sizing: border-box;
  background-color: #2c2c2c;
}

.home {
  font-size: 2rem;
  text-decoration: none;
  color: white;
}

.left-nav {
  display: flex;
  position: absolute;
  align-items: center;
  left: 20px;
}

.right-nav {
  display: flex;
  position: absolute;
  align-items: center;
  left: 10%;
  gap: 20px;
}

.nav-link {
  text-decoration: none;
  /* color: #483248; */
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: white;
  transform: scale(1.1);
}

/* Hamburger menu button */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 20px;
  z-index: 1001;
}

.hamburger span {
  width: 100%;
  height: 3px;
  background-color: white;
  transition: all 0.3s ease;
  transform-origin: center;
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* Mobile navigation */
.mobile-nav {
  display: none;
  position: fixed;
  top: 120px;
  right: 0;
  background-color: #b366ff;
  width: 100%;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transform: translateX(100%);
  transition: transform 0.3s ease;
  z-index: 1000;
  text-align: right;
}

.mobile-nav.open {
  transform: translateX(0);
}

.mobile-nav .nav-link {
  display: block;
  padding: 12px 20px;
  font-size: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  text-align: right;
}

.mobile-nav .nav-link:last-child {
  border-bottom: none;
}

/* Mobile styles */
@media (max-width: 768px) {
  .home {
    font-size: 1.5rem;
    top: 70px;
  }

  .desktop-nav {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  .mobile-nav {
    display: block;
  }

  nav {
    height: 70px;
  }
}

@media (max-width: 480px) {
  .home {
    font-size: 1.2rem;
  }

  nav {
    padding: 10px 15px;
  }

  .left-nav {
    left: 15px;
  }

  .hamburger {
    right: 15px;
  }
}
</style>
