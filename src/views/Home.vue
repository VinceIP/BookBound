<template>
  <div class="home">
    <div class="page_header">
      <h1>BookBound: Discover the Power of Stories Together!</h1>
      <img
        class="floating"
        src="../assets/images/sharpened-transparent-logo.png"
      />
    </div>

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
#header_panel {
  width: 35%;
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
  width: 85%;
}

.product_details {
  width: 100%;
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
  width: 90%;
}

.book_covers {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 1vw;
  width: 90%;
}

.book_covers .book_cover {
  filter: drop-shadow(15px 15px 8px rgba(0, 0, 0, 0.329));
  max-width: 100%;
  height: auto;
}

/*-- Mobile -- */
@media (max-width: 500px) {
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

  .product_details .rounded_panel {
    height: fit-content;
    padding: 9px;
    margin: 5px 0px 15px 0px;
    width: 100%;
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

/* -- Mobile Large/landscape -- */
@media (min-width: 501px) and (max-width: 1000px) {
  .book_covers {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: 1vw;
    max-width: 70%;
  }
  .book_covers .book_cover {
    filter: drop-shadow(15px 15px 8px rgba(0, 0, 0, 0.329));
    max-width: 100%;
    height: auto;
  }

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
