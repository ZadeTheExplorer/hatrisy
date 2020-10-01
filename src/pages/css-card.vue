<template>
  <div class="page-header clear-filter" filter-color="yellow">

    <div class="content">
      <div class="container">
        <div class="el-col-md-offset-2 ml-auto mr-auto">
          <div style="font-family: 'DM Mono', monospace !important;">
            <section class="card-list-css">
              <article class="card-css">
                <header class="card-header-css">
                  <p>Sep 11th 2020</p>
                  <h2>Never forget</h2>
                </header>

                <div class="card-author">
                  <a class="author-avatar" href="#">
                    <img src="avatar.png"/>
                  </a>
                  <svg class="half-circle" viewBox="0 0 106 57">
                    <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                  </svg>

                  <div class="author-name">
                    <div class="author-name-prefix">Author</div>
                    Jeff Delaney
                  </div>
                </div>
                <div class="tags">
                  <a href="#">html</a>
                  <a href="#">css</a>
                  <a href="#">web-dev</a>
                </div>
              </article>


              <article class="card-css">
                <header class="card-header-css">
                  <p>OCt 2nd 2020</p>
                  <h2>Card Tricks are fun!</h2>
                </header>

                <div class="card-author">
                  <a class="author-avatar" href="#">
                    <img src="https://api.adorable.io/avatars/172/a.png"/>
                  </a>
                  <svg class="half-circle" viewBox="0 0 106 57">
                    <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                  </svg>

                  <div class="author-name">
                    <div class="author-name-prefix">Pirate</div>
                    Sy Tri Ha
                  </div>
                </div>
                <div class="tags">
                  <a href="#">html</a>
                  <a href="#">css</a>
                </div>
              </article>


              <article class="card-css">
                <header class="card-header-css">
                  <p>Oct 1st 2020</p>
                  <h2>Card Tricks are fun!</h2>
                </header>

                <div class="card-author">
                  <a class="author-avatar" href="#">
                    <img src="https://api.adorable.io/avatars/172/b.png"/>
                  </a>
                  <svg class="half-circle" viewBox="0 0 106 57">
                    <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                  </svg>

                  <div class="author-name">
                    <div class="author-name-prefix">Pirate</div>
                    Zade The Explorer
                  </div>
                </div>
                <div class="tags">
                  <a href="#">html</a>
                  <a href="#">css</a>
                </div>
              </article>

              <article class="card-css">
                <header class="card-header-css">
                  <p>Sep 11th 2020</p>
                  <h2>Card Tricks are fun!</h2>
                </header>

                <div class="card-author">
                  <a class="author-avatar" href="#">
                    <img src="https://api.adorable.io/avatars/172/c.png"/>
                  </a>
                  <svg class="half-circle" viewBox="0 0 106 57">
                    <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                  </svg>

                  <div class="author-name">
                    <div class="author-name-prefix">Pirate</div>
                    Edward Teach
                  </div>
                </div>
                <div class="tags">
                  <a href="#">html</a>
                  <a href="#">css</a>
                </div>
              </article>


              <article class="card-css">
                <header class="card-header-css">
                  <p>Sep 11th 2020</p>
                  <h2>Card Tricks are fun!</h2>
                </header>

                <div class="card-author">
                  <a class="author-avatar" href="#">
                    <img src="https://api.adorable.io/avatars/172/d.png"/>
                  </a>
                  <svg class="half-circle" viewBox="0 0 106 57">
                    <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                  </svg>

                  <div class="author-name">
                    <div class="author-name-prefix">Pirate</div>
                    William Kidd
                  </div>
                </div>
                <div class="tags">
                  <a href="#">html</a>
                  <a href="#">css</a>
                </div>
              </article>

            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'css-card',
  components: {}
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&display=swap');

body {
  background-color: #17141d !important;
}

a {
  text-decoration: none;
}

.card-list-css {
  display: flex;
  padding: 3rem;
  overflow-x: scroll;
}

.card-list-css::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

.card-list-css::-webkit-scrollbar-thumb {
  background: #201c29;
  border-radius: 10px;
  box-shadow: inset 2px 2px 2px hsla(0, 0%, 100%, .25), inset -2px -2px 2px rgba(0, 0, 0, .25);
}

.card-list-css::-webkit-scrollbar-track {
  background: linear-gradient(90deg, #201c29, #201c29 1px, #17141d 0, #17141d);
}


.card-css {
  height: 350px;
  width: 400px;
  min-width: 250px;
  padding: 1.5rem;
  border-radius: 16px;
  background: #17141d;
  box-shadow: -1rem 0 3rem #000;
  display: flex;
  flex-direction: column;
  transition: .2s;
  margin: 0;
  scroll-snap-align: start;
  clear: both;
  position: relative;
}

.card-css:focus-within ~ .card-css, .card-css:hover ~ .card-css {
  transform: translateX(130px);
}

.card-css:hover {
  transform: translateY(-1rem);
}

.card-css:not(:first-child) {
  margin-left: -130px;
}


.card-header-css {
  margin-bottom: auto;
}

.card-header-css p {
  font-size: 14px;
  margin: 0 0 1rem;
  color: #7a7a8c;
}

.card-header-css h2 {
  font-size: 20px;
  margin: .25rem 0 auto;
  text-decoration: none;
  color: inherit;
  border: 0;
  display: inline-block;
  cursor: pointer;
}

.card-header-css h2:hover {
  background: linear-gradient(90deg, #ff8a00, #e52e71);
  text-shadow: none;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}

.card-author {
  margin: 3rem 0 0;
  display: grid;
  grid-template-columns: 75px 1fr;
  align-items: center;
  position: relative;
}

.author-avatar {
  grid-area: auto;
  align-self: start;
  position: relative;
  box-sizing: border-box;
}

.author-avatar img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  filter: grayscale(100%);
  display: block;
  overflow: hidden;
  margin: 16px 10px;
}

.author-name {
  grid-area: auto;
  box-sizing: border-box;
}

.author-name-prefix {
  font-style: normal;
  font-weight: 700;
  color: #7a7a8c;
}

.half-circle {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 48px;
  fill: none;
  stroke: #ff8a00;
  stroke-width: 8;
  stroke-linecap: round;
  pointer-events: none;
}

.tags {
  padding: .5rem 0 1rem;
  line-height: 2;
  margin: 1rem 0 0;
}

.tags a {
  font-style: normal;
  font-weight: 700;

  color: #7a7a8c;
  text-transform: uppercase;
  font-size: .66rem;
  border: 3px solid #28242f;
  border-radius: 2rem;
  padding: .2rem .85rem .25rem;
  position: relative;
}

.tags a:hover {
  background: linear-gradient(90deg, #ff8a00, #e52e71);
  text-shadow: none;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-box-decoration-break: clone;
  border-color: white;
}
</style>
