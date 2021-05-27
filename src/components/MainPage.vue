<template>
  <section class="main-section">
    <div class="card-wrapper">
      <div class="site-card">
        <img src="../assets/zbc-news-logo.png" alt="site-1-logo" />
        <span class="contry-code-banner">ZW</span>
        <button>
          <i class="fa fa-book" aria-hidden="true"></i> Add to collection
        </button>
      </div>
      <h3 class="site-name">Site 1</h3>
      <p>Secondary information is here</p>
    </div>
    <div class="card-wrapper">
      <div class="site-card">
        <img src="../assets/noticias-de-angola-logo.svg" alt="site-1-logo" />
        <span class="contry-code-banner">ZW</span>
        <button>
          <i class="fa fa-book" aria-hidden="true"></i> Add to collection
        </button>
      </div>
      <h3 class="site-name">Site 1</h3>
      <p>Secondary information is here</p>
    </div>
    <div class="card-wrapper">
      <div class="site-card">
        <img src="../assets/sun_logo-na.jpg" alt="site-1-logo" />
        <span class="contry-code-banner">ZW</span>
        <button>
          <i class="fa fa-book" aria-hidden="true"></i> Add to collection
        </button>
      </div>
      <h3 class="site-name">Site 1</h3>
      <p>Secondary information is here</p>
    </div>
    <div class="card-wrapper">
      <div class="site-card">
        <img src="../assets/zbc-news-logo.png" alt="site-1-logo" />
        <span class="contry-code-banner">ZW</span>
        <button>
          <i class="fa fa-book" aria-hidden="true"></i> Add to collection
        </button>
      </div>
      <h3 class="site-name">Site 1</h3>
      <p>Secondary information is here</p>
    </div>
    <div class="card-wrapper">
      <div class="site-card">
        <img src="../assets/noticias-de-angola-logo.svg" alt="site-1-logo" />
        <span class="contry-code-banner">ZW</span>
        <button>
          <i class="fa fa-book" aria-hidden="true"></i> Add to collection
        </button>
      </div>
      <h3 class="site-name">Site 1</h3>
      <p>Secondary information is here</p>
    </div>
    <div class="card-wrapper">
      <div class="site-card">
        <img src="../assets/sun_logo-na.jpg" alt="site-1-logo" />
        <span class="contry-code-banner">ZW</span>
        <button>
          <i class="fa fa-book" aria-hidden="true"></i> Add to collection
        </button>
      </div>
      <h3 class="site-name">Site 1</h3>
      <p>Secondary information is here</p>
    </div>
    <div class="card-wrapper">
      <div class="site-card">
        <img src="../assets/zbc-news-logo.png" alt="site-1-logo" />
        <span class="contry-code-banner">ZW</span>
        <button>
          <i class="fa fa-book" aria-hidden="true"></i> Add to collection
        </button>
      </div>
      <h3 class="site-name">Site 1</h3>
      <p>Secondary information is here</p>
    </div>
    <div class="card-wrapper">
      <div class="site-card">
        <img src="../assets/noticias-de-angola-logo.svg" alt="site-1-logo" />
        <span class="contry-code-banner">ZW</span>
        <button>
          <i class="fa fa-book" aria-hidden="true"></i> Add to collection
        </button>
      </div>
      <h3 class="site-name">Site 1</h3>
      <p>Secondary information is here</p>
    </div>
    <div class="card-wrapper">
      <div class="site-card">
        <img src="../assets/sun_logo-na.jpg" alt="site-1-logo" />
        <span class="contry-code-banner">ZW</span>
        <button>
          <i class="fa fa-book" aria-hidden="true"></i> Add to collection
        </button>
      </div>
      <h3 class="site-name">Site 1</h3>
      <p>Secondary information is here</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "MainPage",
};
</script>

<style scoped>
* {
  color: #707070;
}
.main-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 16px;
  max-width: 1000px;
  margin-inline: auto;

  height: 1;
}
.card-wrapper {
  display: flex;
  flex-direction: column;
  margin-bottom: 2%;
  position: relative;

  width: 32%;
}

.card-wrapper:hover img {
  opacity: 0.6;
}

.site-card {
  display: flex;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 2px 5px #888;
  width: 100%;
}
.site-card:before {
  content: "";
  float: left;
  padding-top: 100%;
}

.site-name {
  margin-bottom: 0;
  text-align: left;
}

img {
  width: 100%;
  border-radius: 8px;
}

button {
  position: relative;
  width: 50%;
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  border-radius: 1em;
  padding: 0.5em;
}
span {
  color: rgba(229, 229, 229, 1);
  opacity: 0;
  position: absolute;
  top: 0.9em;
  left: 90%;
  width: 1.8em;
  height: 1.5em;
  padding-block: 5px;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  font-weight: bold;
  font-size: 150%;
  background: linear-gradient(
    227.28deg,
    #000000 -23.7%,
    #560000 46.65%,
    #ff0000 109.03%
  );
}
.card-wrapper:hover span,
.card-wrapper:hover button {
  opacity: 1;
}
p {
  text-align: left;
}
@media only screen and (max-width: 800px) {
  .main-section {
    max-width: 600px;
  }
  .card-wrapper {
    width: 48%;
  }
  button {
    top: 65%;
  }
}
@media only screen and (max-width: 550px) {
  .main-section {
    margin-inline: 5%;
  }
  .card-wrapper {
    width: 100%;
  }
  button {
    top: 65%;
  }
}
</style>
