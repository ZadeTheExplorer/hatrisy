<template>
  <navbar
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template>
      <router-link v-popover:popover1 class="navbar-brand" to="/">
        Zade The Explorer
      </router-link>
      <el-popover
        ref="popover1"
        popper-class="popover"
        placement="bottom"
        width="200"
        trigger="hover"
      >
        <div class="popover-body">
          Knowledge is power!
        </div>
      </el-popover>
    </template>
    <template slot="navbar-menu">
      <li class="nav-item">
        <!--        <a-->
        <!--          class="nav-item"-->
        <!--          href="https://www.creative-tim.com/product/vue-now-ui-kit"-->
        <!--          target="_blank"-->
        <!--        >-->
        <a
            class="nav-link"
            href="/"
        >
          <i class="now-ui-icons objects_spaceship"></i>
          <p>Main</p>
        </a>
      </li>
<!--      <drop-down-->
<!--        tag="li"-->
<!--        title="Components"-->
<!--        icon="now-ui-icons design_app"-->
<!--        class="nav-item"-->
<!--      >-->
<!--        <nav-link to="/">-->
<!--          <i class="now-ui-icons business_chart-pie-36"></i> All components-->
<!--        </nav-link>-->
<!--        <a-->
<!--          href="https://demos.creative-tim.com/vue-now-ui-kit/documentation"-->
<!--          target="_blank"-->
<!--          class="dropdown-item"-->
<!--        >-->
<!--          <i class="now-ui-icons design_bullet-list-67"></i> Documentation-->
<!--        </a>-->
<!--      </drop-down>-->
      <drop-down
              tag="li"
              title="Projects"
              icon="now-ui-icons files_single-copy-04"
              class="nav-item"
      >
        <!--        TODO: change to /profile-->
        <nav-link to="#LandingPage">
          <i class="fa fa-university"></i> Landing
        </nav-link>
        <nav-link to="#Weather">
          <i class="fa fa-cloud"></i> Weather App
        </nav-link>
        <nav-link to="#Calculator">
          <i class="fa fa-calculator"></i> Online Calculator
        </nav-link>
        <nav-link to="#Login">
          <i class="now-ui-icons users_circle-08"></i> Login
        </nav-link>
        <nav-link to="/resume">
          <i class="now-ui-icons users_single-02"></i> Profile
        </nav-link>
      </drop-down>
      <li class="nav-item">
        <!--        <a-->
        <!--          class="nav-item"-->
        <!--          href="https://www.creative-tim.com/product/vue-now-ui-kit"-->
        <!--          target="_blank"-->
        <!--        >-->
        <a
            class="nav-link"
            href="#/resume"
        >
          <i class="now-ui-icons users_single-02"></i>
          <p>About Me</p>
        </a>
      </li>
<!--      <li class="nav-item">-->
<!--        <a-->
<!--          class="nav-link btn btn-neutral"-->
<!--          href="https://www.creative-tim.com/product/vue-now-ui-kit-pro"-->
<!--          target="_blank"-->
<!--        >-->
<!--          <i class="now-ui-icons arrows-1_share-66"></i>-->
<!--          <p>Upgrade to PRO</p>-->
<!--        </a>-->
<!--      </li>-->

      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Checkout my Github"
          data-placement="bottom"
          href="https://github.com/ZadeTheExplorer"
          target="_blank"
        >
          <i class="fab fa-github"></i>
          <p class="d-lg-none d-xl-none">Github</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Add me on Facebook"
          data-placement="bottom"
          href="https://www.facebook.com/ZadeMcFaro"
          target="_blank"
        >
          <i class="fab fa-facebook-square"></i>
          <p class="d-lg-none d-xl-none">Facebook</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Connect me on LinkedIn"
          data-placement="bottom"
          href="https://www.linkedin.com/in/sy-tri-ha/"
          target="_blank"
        >
          <i class="fab fa-linkedin"></i>
          <p class="d-lg-none d-xl-none">LinkedIn</p>
        </a>
      </li>
    </template>
  </navbar>
</template>

<script>
import { DropDown, Navbar, NavLink } from '@/components';
import { Popover } from 'element-ui';
export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    DropDown,
    Navbar,
    NavLink,
    [Popover.name]: Popover
  }
};
</script>

<style scoped></style>
