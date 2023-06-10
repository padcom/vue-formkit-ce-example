<template>
  <div class="hero min-h-screen bg-slate-600">
    <div class="hero-content text-center">
      <div class="max-w-lg">

        <i class="icon-[bi--download]" />
        <h1 class="text-5xl font-bold">Hello there! <Icon icon="cil:alarm" class="inline text-red-400" /></h1>
        <p class="py-6">
          Provident cupiditate voluptatem et in.
          Quaerat fugiat ut assumenda excepturi exercitationem quasi.
          In deleniti eaque aut repudiandae et a id nisi.
        </p>
        <button class="btn btn-secondary">Get Started</button>
      </div>
    </div>
  </div>

  <!-- Toolbar -->
  <div class="navbar bg-base-100 sticky top-0 z-10">
    <div class="navbar-start">
      <label for="my-drawer" tabindex="0" class="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
    </div>
    <div class="navbar-center">
    </div>
    <div class="navbar-end">
    </div>
  </div>

  <!-- Page content here -->
  <div class="m-4 flex items-start">
    <div class="avatar indicator mx-4">
      <span class="indicator-item badge badge-lg badge-info">typing..</span>
      <div class="w-24 rounded-full">
        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      </div>
    </div>
    <div class="flex-grow mockup-code whitespace-pre font-mono">
      /**
      * This function says "Hello, world!" to the console
      */
      function sayHello() {
        console.log('Hello, world!');
      }
    </div>
  </div>

  <div class="m-4 flex items-start">
    <div class="flex-grow mockup-code whitespace-pre font-mono">
      /**
      * This function says "Hello, world!" to the console
      */
      function sayHello() {
        console.log('Hello, world!');
      }
    </div>
    <div class="avatar indicator mx-4">
      <span class="indicator-item indicator-start badge badge-lg badge-ghost">processing..</span>
      <div class="w-24 rounded-full">
        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      </div>
    </div>
  </div>

  <div class="drawer z-10 mb-[400px]">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />

    <div class="drawer-side">
      <label for="my-drawer" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 h-full bg-base-200 text-base-content">
        <!-- Sidebar content here -->
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'
</script>