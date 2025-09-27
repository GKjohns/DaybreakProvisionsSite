<template>
  <div class="hero-background">
    <!-- Main sunrise gradient -->
    <div class="sunrise-gradient sunrise-main" />
    
    <!-- Additional layers for depth -->
    <div class="sunrise-gradient sunrise-glow" />
    <div class="sunrise-gradient sunrise-rays" />
    
    <!-- Sun disk -->
    <div class="sun-disk" />
    
    <!-- Animated light rays -->
    <div class="light-rays">
      <div class="ray ray-1" />
      <div class="ray ray-2" />
      <div class="ray ray-3" />
      <div class="ray ray-4" />
      <div class="ray ray-5" />
    </div>
  </div>
</template>

<style scoped>
.hero-background {
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: -1;
}

/* Main sunrise gradient */
.sunrise-gradient {
  position: absolute;
  left: 50%;
  bottom: -30%;
  transform: translateX(-50%);
  border-radius: 50%;
  filter: blur(40px);
  opacity: 0;
  animation: sunrise 2s ease-out forwards;
}

.sunrise-main {
  width: 150%;
  height: 50%;
  background: radial-gradient(
    ellipse at center,
    rgba(255, 94, 77, 0.15) 0%,
    rgba(255, 154, 0, 0.1) 20%,
    rgba(255, 206, 84, 0.05) 35%,
    rgba(255, 237, 117, 0.02) 50%,
    transparent 65%
  );
  animation-delay: 0.3s;
}

.sunrise-glow {
  width: 120%;
  height: 40%;
  background: radial-gradient(
    ellipse at center,
    rgba(255, 123, 67, 0.2) 0%,
    rgba(255, 193, 7, 0.1) 25%,
    transparent 50%
  );
  filter: blur(60px);
  animation-delay: 0.5s;
}

.sunrise-rays {
  width: 200%;
  height: 60%;
  background: radial-gradient(
    ellipse at center,
    rgba(255, 152, 0, 0.05) 0%,
    rgba(255, 235, 59, 0.02) 20%,
    transparent 40%
  );
  filter: blur(80px);
  animation-delay: 0.7s;
}

/* Sun disk */
.sun-disk {
  position: absolute;
  bottom: -120px;
  left: 50%;
  transform: translateX(-50%);
  width: 180px;
  height: 180px;
  background: radial-gradient(
    circle,
    rgba(255, 235, 59, 0.3) 0%,
    rgba(255, 193, 7, 0.2) 20%,
    rgba(255, 152, 0, 0.1) 40%,
    transparent 65%
  );
  border-radius: 50%;
  filter: blur(30px);
  opacity: 0;
  animation: sunRise 2.5s ease-out 0.8s forwards;
}

/* Light rays */
.light-rays {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 50%;
  opacity: 0;
  animation: fadeIn 1.5s ease-out 1.2s forwards;
}

.ray {
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform-origin: bottom center;
  width: 1px;
  height: 100%;
  background: linear-gradient(
    to top,
    rgba(255, 235, 59, 0.15),
    rgba(255, 235, 59, 0.05) 20%,
    transparent 40%
  );
  opacity: 0;
  animation: rayPulse 6s ease-in-out infinite;
}

.ray-1 {
  transform: translateX(-50%) rotate(-40deg);
  animation-delay: 0s;
}

.ray-2 {
  transform: translateX(-50%) rotate(-20deg);
  animation-delay: 0.5s;
}

.ray-3 {
  transform: translateX(-50%) rotate(0deg);
  animation-delay: 1s;
}

.ray-4 {
  transform: translateX(-50%) rotate(20deg);
  animation-delay: 1.5s;
}

.ray-5 {
  transform: translateX(-50%) rotate(40deg);
  animation-delay: 2s;
}

/* Animations */
@keyframes sunrise {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(50px);
  }
  100% {
    opacity: 0.8;
    transform: translateX(-50%) translateY(0);
  }
}

@keyframes sunRise {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(30px);
  }
  100% {
    opacity: 0.5;
    transform: translateX(-50%) translateY(0);
  }
}

@keyframes fadeIn {
  to {
    opacity: 0.3;
  }
}

@keyframes rayPulse {
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 0.3;
  }
}

/* Dark mode adjustments */
.dark .sunrise-main {
  background: radial-gradient(
    ellipse at center,
    rgba(255, 94, 77, 0.1) 0%,
    rgba(255, 154, 0, 0.07) 20%,
    rgba(255, 206, 84, 0.03) 35%,
    rgba(255, 237, 117, 0.01) 50%,
    transparent 65%
  );
}

.dark .sunrise-glow {
  background: radial-gradient(
    ellipse at center,
    rgba(255, 123, 67, 0.15) 0%,
    rgba(255, 193, 7, 0.05) 25%,
    transparent 50%
  );
}

.dark .sun-disk {
  background: radial-gradient(
    circle,
    rgba(255, 235, 59, 0.2) 0%,
    rgba(255, 193, 7, 0.1) 20%,
    rgba(255, 152, 0, 0.05) 40%,
    transparent 65%
  );
}

.dark .ray {
  background: linear-gradient(
    to top,
    rgba(255, 235, 59, 0.1),
    rgba(255, 235, 59, 0.03) 20%,
    transparent 40%
  );
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .sunrise-main {
    width: 200%;
    height: 40%;
  }
  
  .sunrise-glow {
    width: 150%;
    height: 35%;
  }
  
  .sun-disk {
    width: 140px;
    height: 140px;
    bottom: -100px;
  }
  
  .ray {
    height: 80%;
  }
}
</style>
