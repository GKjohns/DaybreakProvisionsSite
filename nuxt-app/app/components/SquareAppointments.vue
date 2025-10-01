<template>
  <div class="square-appointments-widget">
    <iframe
      src="https://book.squareup.com/appointments/sg6sjqs09gnmt1/location/LNCHM239FSDW9/services"
      width="100%"
      height="800"
      style="border: none;"
      title="Book an Appointment"
      loading="lazy"
    />
  </div>
</template>

<script setup lang="ts">
// No script needed for iframe embed
</script>

<style scoped>
.square-appointments-widget {
  width: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}

.square-appointments-widget iframe {
  display: block;
}

/* Make iframe responsive */
@media (max-width: 768px) {
  .square-appointments-widget iframe {
    height: 900px;
  }
}
</style>

