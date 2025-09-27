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
  animation: sunrise 3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.sunrise-main {
  width: 150%;
  height: 50%;
  background: radial-gradient(
    ellipse at center,
    rgba(255, 235, 59, 0.22) 0%,      /* golden-yellow center */
    rgba(252, 211, 77, 0.18) 15%,     /* soft amber-300 */
    rgba(251, 191, 36, 0.14) 25%,     /* amber-400 transition */
    rgba(244, 114, 182, 0.1) 40%,     /* pink-400 from logo */
    rgba(168, 85, 247, 0.05) 55%,     /* purple-500 from logo */
    transparent 70%
  );
  animation-delay: 0.3s;
}

.sunrise-glow {
  width: 120%;
  height: 40%;
  background: radial-gradient(
    ellipse at center,
    rgba(255, 241, 118, 0.25) 0%,    /* bright golden glow */
    rgba(252, 211, 77, 0.18) 20%,    /* amber-300 glow */
    rgba(244, 114, 182, 0.12) 35%,   /* pink-400 subtle */
    transparent 55%
  );
  filter: blur(60px);
  animation-delay: 0.5s;
}

.sunrise-rays {
  width: 200%;
  height: 60%;
  background: radial-gradient(
    ellipse at center,
    rgba(168, 85, 247, 0.08) 0%,      /* purple-500 rays */
    rgba(244, 114, 182, 0.05) 15%,    /* pink-400 rays */
    rgba(252, 211, 77, 0.03) 30%,     /* amber-300 fade */
    transparent 50%
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
    rgba(255, 241, 118, 0.35) 0%,    /* bright golden center */
    rgba(252, 211, 77, 0.28) 15%,    /* golden-amber */
    rgba(251, 191, 36, 0.18) 30%,    /* amber-400 */
    rgba(244, 114, 182, 0.1) 45%,    /* pink-400 halo */
    rgba(168, 85, 247, 0.05) 60%,    /* purple-500 outer */
    transparent 75%
  );
  border-radius: 50%;
  filter: blur(30px);
  opacity: 0;
  animation: sunRise 3.5s cubic-bezier(0.4, 0, 0.2, 1) 0.8s forwards;
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
  animation: raysGrowIn 2.5s cubic-bezier(0.4, 0, 0.2, 1) 1.2s forwards;
}

.ray {
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform-origin: bottom center;
  width: 2px;
  height: 100%;
  background: linear-gradient(
    to top,
    rgba(255, 241, 118, 0.18),      /* golden ray */
    rgba(252, 211, 77, 0.12) 20%,   /* amber-300 */
    rgba(244, 114, 182, 0.06) 35%,  /* pink tint */
    rgba(168, 85, 247, 0.03) 50%,   /* purple fade */
    transparent 65%
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
    transform: translateX(-50%) translateY(50px) scale(4);
  }
  35% {
    opacity: 0.85;
    transform: translateX(-50%) translateY(0) scale(3.5);
  }
  100% {
    opacity: 0.8;
    transform: translateX(-50%) translateY(0) scale(1);
  }
}

@keyframes sunRise {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(35px) scale(3.2);
  }
  35% {
    opacity: 0.55;
    transform: translateX(-50%) translateY(0) scale(2.8);
  }
  100% {
    opacity: 0.5;
    transform: translateX(-50%) translateY(0) scale(1);
  }
}

@keyframes fadeIn {
  to {
    opacity: 0.3;
  }
}

@keyframes raysGrowIn {
  0% {
    opacity: 0;
    transform: translateX(-50%) scaleY(2.2);
  }
  35% {
    opacity: 0.35;
    transform: translateX(-50%) scaleY(1.8);
  }
  100% {
    opacity: 0.3;
    transform: translateX(-50%) scaleY(1);
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
    rgba(255, 235, 59, 0.14) 0%,      /* golden-yellow softer */
    rgba(252, 211, 77, 0.11) 15%,     /* soft amber-300 */
    rgba(251, 191, 36, 0.08) 25%,     /* amber-400 transition */
    rgba(244, 114, 182, 0.06) 40%,    /* pink-400 subtle */
    rgba(168, 85, 247, 0.03) 55%,     /* purple-500 fade */
    transparent 70%
  );
}

.dark .sunrise-glow {
  background: radial-gradient(
    ellipse at center,
    rgba(255, 241, 118, 0.16) 0%,     /* bright golden glow softer */
    rgba(252, 211, 77, 0.11) 20%,     /* amber-300 glow */
    rgba(244, 114, 182, 0.07) 35%,    /* pink-400 subtle */
    transparent 55%
  );
}

.dark .sun-disk {
  background: radial-gradient(
    circle,
    rgba(255, 241, 118, 0.22) 0%,     /* bright golden center softer */
    rgba(252, 211, 77, 0.17) 15%,     /* golden-amber */
    rgba(251, 191, 36, 0.11) 30%,     /* amber-400 */
    rgba(244, 114, 182, 0.06) 45%,    /* pink-400 halo */
    rgba(168, 85, 247, 0.03) 60%,     /* purple-500 outer */
    transparent 75%
  );
}

.dark .ray {
  background: linear-gradient(
    to top,
    rgba(255, 241, 118, 0.1),         /* golden ray */
    rgba(252, 211, 77, 0.07) 20%,     /* amber-300 */
    rgba(244, 114, 182, 0.04) 35%,    /* pink tint */
    rgba(168, 85, 247, 0.02) 50%,     /* purple fade */
    transparent 65%
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
