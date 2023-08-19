<template>
  <div class="home">
    <div class="page_header">
      <h1>BookBound: Discover the Power of Stories Together!</h1>
      <img
        class="floating"
        src="../assets/images/sharpened-transparent-logo.png"
      />
    </div>
    <!-- <logo-slider>
      <div class="slideshow">
        <img id="slides" src="../assets/images/mock-annonceevent/picnic2.png" />
        <img id="slides" src="../assets/images/mock-annonceevent/meet-author.png" />
        <img id="slides" src="../assets/images/mock-annonceevent/bookReview.png" />
        <img id="slides" src="../assets/images/mock-annonceevent/bedtime2.png" />
        <img id="slides" src="../assets/images/mock-annonceevent/picnic2.png" />
        <img id="slides" src="../assets/images/mock-annonceevent/meet-author.png" />
        <img id="slides" src="../assets/images/mock-annonceevent/bookReview.png" />
        <img id="slides" src="../assets/images/mock-annonceevent/bedtime2.png" />
      </div>
    </logo-slider> -->
    <div class="content">
      <div class="rounded_panel" id="header_panel">
        <h1>What is BookBound?</h1>
      </div>
      <div class="product_details_container">
        <div class="product_details">
          <div class="rounded_panel">
            <h1>
              Dive into a world of reading with your family through an
              incredible program designed for kids and parents alike. Explore
              captivating stories, take part in exciting reading contests, and
              win prizes. It's more than a reading challenge; it's a thrilling
              adventure that bonds families and creates lasting memories. Embark
              on this extraordinary journey where stories come to life, and
              shared joy awaits!
            </h1>
          </div>
          <div class="book_covers">
            <img
              class="book_cover"
              src="../assets/images/book covers/winniethepooh.jpg"
              alt="winnie the pooh"
            />
            <img
              class="book_cover"
              src="../assets/images/book covers/aliceinwonderland.jpg"
              alt="alice in wonderland"
            />
            <img
              class="book_cover"
              src="../assets/images/book covers/dracula.jpg"
              alt="dracula"
            />
            <img
              class="book_cover"
              src="../assets/images/book covers/anneofgreengables.jpg"
              alt="anne of green gables"
            />
          </div>
        </div>
        <div class="product_details">
          <div class="rounded_panel">
            <h1>
              Say goodbye to disorganized reading records. Our family reading
              tracking website is a centralized hub where each family member can
              manage their profiles, curate reading lists, and track progress.
              This interactive platform turns reading into a shared adventure,
              fostering both camaraderie and friendly competition. Join the
              journey and transform reading into a family bonding experience!
            </h1>
          </div>
          <div class="book_covers">
            <img
              class="book_cover"
              src="../assets/images/book covers/frankenstein.jpg"
              alt="frankie"
            />
            <img
              class="book_cover"
              src="../assets/images/book covers/greatgatbsy.jpg"
              alt="great gatbsy"
            />
            <img
              class="book_cover"
              src="../assets/images/book covers/GUEST_a0eb4016-52b3-4bbe-a1b9-8c208c81bb42.jpg"
              alt="wizard of oz"
            />
            <img
              class="book_cover"
              src="../assets/images/book covers/gulliverstravels.jpg"
              alt="gulliver's traavels"
            />
          </div>
        </div>
        <div class="product_details">
          <div class="rounded_panel">
            <h1>
              Our family reading program is more than just reading - it's a
              relationship builder. It fosters love for books and literacy in
              children while allowing parents to bond over stories. With access
              to age-appropriate content, parents can be confident their
              children are exploring suitable material. This program is not only
              a gateway to the wonders of storytelling but also a catalyst for
              quality family time and lifelong learning. Embrace reading as a
              family, and strengthen your connections through the joy of
              stories!
            </h1>
          </div>
          <div class="book_covers">
            <img
              class="book_cover"
              src="../assets/images/book covers/jekyllhyde.jpg"
              alt=""
            />
            <img
              class="book_cover"
              src="../assets/images/book covers/journeytocenterofearth.jpg"
              alt=""
            />
            <img
              class="book_cover"
              src="../assets/images/book covers/littlewomen.jpg"
              alt=""
            />
            <img
              class="book_cover"
              src="../assets/images/book covers/peterrabbit.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="product_details">
          <div class="rounded_panel">
            <h1>
              Join us for epic tales, incredible connections, and the thrill of
              reading. Embark on this adventure and explore the wonderful world
              of books with us!
            </h1>
          </div>
          <div class="book_covers">
            <img
              class="book_cover"
              src="../assets/images/book covers/pictureofdoriangray.jpg"
              alt="dorian gray"
            />
            <img
              class="book_cover"
              src="../assets/images/book covers/theOdyssey.jpg"
              alt="odyessy"
            />
            <img
              class="book_cover"
              src="../assets/images/book covers/velvateenrabbit.jpg"
              alt="velvateen rabbit"
            />
            <img
              class="book_cover"
              src="../assets/images/book covers/wutheringheights.jpg"
              alt="wuthering heights"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home-view",
};
</script>

<style scoped>
.home {
  padding: 1vw;
}

#header_panel {
  width: 550px;
}

#header_panel h1 {
  font-family: var(--header-font);
  font-size: 32px;
  text-align: center;
  color: var(--font-color);
}

.product_details_container {
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 30px;
}

.product_details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  align-items: center;
  justify-items: center;
  background-color: var(--background-color-popout);
  padding: 20px;
  box-shadow: var(--panel-shadow);
}

.rounded_panel {
  width: 700px;
}

.rounded_panel h1 {
  font-family: var(--main-font);
  font-size: 16px;
  padding: 10px;
}

.book_covers {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 1vw;
  width: 100%;
}

.book_covers .book_cover {
  filter: drop-shadow(15px 15px 8px rgba(0, 0, 0, 0.329));
  width: 8rem;
  height: auto;
}

/*-- Mobile -- */
@media (max-width: 500px) {
  .page_header {
  }
  .page_header h1 {
    padding: 3px;
  }
  .page_header img {
    position: absolute;
    top: 90px;
    left: -40px;
    width: 325px;
    height: auto;
    filter: drop-shadow(25px 35px 8px rgba(0, 0, 0, 0.329));
  }

  .floating {
    margin-left: 0px;
    margin-top: 0px;
  }

  @keyframes floating {
    0% {
      transform: translate(0%, 30px);
    }
    50% {
      transform: translate(0%, 45px);
    }
    100% {
      transform: translate(0%, 30px);
    }
  }
  .content {
    position: relative;
    margin-left: 1vw;
    margin-right: auto;
    top: 290px;
    width: 90vw;
  }

  #header_panel {
    width: 70vw;
  }
  #header_panel h1 {
    font-size: 22px;
  }

  .product_details_container {
    width: 100%;
    justify-self: flex-start;
    align-self: flex-start;
  }

  .product_details {
    width: 86vw;
    grid-template-columns: 1fr;
    padding: 15px;
  }

  .product_details .rounded_panel{
    height: fit-content;
    padding: 9px;
    margin: 5px 0px 15px 0px;
    width:100%;
}

  .rounded_panel h1 {
    font-size: 12px;
    padding: 3px;
  }

  .book_covers {
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }

  .book_covers .book_cover {
    width: 80px;
    align-self: center;
    justify-self: center;
  }
}

/*-- Desktop --*/
@media (min-width: 916px) {
  .product_details:nth-child(odd) .rounded_panel {
    order: 1;
  }

  .product_details:nth-child(odd) .book_covers {
    order: 2;
  }

  .product_details:nth-child(even) .rounded_panel {
    order: 2;
  }

  .product_details:nth-child(even) .book_covers {
    order: 1;
  }
}
</style>
