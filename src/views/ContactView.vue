<script>
export default {
  name: "ContactView",
};
</script>

<template>
  <section
    id="contact"
    class="d-flex align-items-center flex-column gap-4 align-items-center mt-5"
  >
    <span class="active text-e-lg text-center"
      >CONTACT
      <span class="text-light">ME</span>
      <span class="horizontal-line w-300"></span>
    </span>
    <div class="d-flex justify-content-space-around gap-4 flex-wrap">
      <div
        class="d-flex justify-content-center align-items-center flex-column flex-wrap gap-2"
      >
        <span class="text-25">I'm available for work get in touch.</span>
        <form
          class="d-flex flex-column gap-2"
          action="mailto:manuchoadero@gmail.com"
          method="post"
          enctype="text/plain"
        >
          <input class="form-input" type="text" placeholder="NAME" required />
          <input class="form-input" type="text" placeholder="EMAIL" required />
          <textarea class="form-input" placeholder="MESSAGE"></textarea>
          <div class="d-flex justify-content-end">
            <button class="form-btn" type="submit">SEND ME A MESSAGE</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
