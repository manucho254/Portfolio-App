<script>
export default {
  name: "ContactView",
};
</script>

<template>
  <section id="contact" class="d-flex align-items-center flex-column gap-4 align-items-center mt-5">
    <span class="active text-e-lg">CONTACT ME</span>
    <div class="d-flex justify-content-space-around gap-4 flex-wrap">
      <div class="mt-5">
        <img class="contact-image" src="@/assets/images/short.png" />
      </div>
      <div class="d-flex justify-content-center align-items-end flex-column flex-wrap gap-2">
        <span class="text-lg"> TO GET STARTED </span>
        <form class="d-flex flex-column gap-1">
          <input class="form-input" type="text" placeholder="NAME" required />
          <input class="form-input" type="text" placeholder="EMAIL" required />
          <textarea class="form-input" placeholder="MESSAGE"></textarea>
          <button class="form-btn" type="submit">SEND ME A MESSAGE</button>
        </form>
      </div>
    </div>
  </section>
</template>
