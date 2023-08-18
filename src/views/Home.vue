<template>
  <div class="home">
    <div class="title">
      <h1>BookBound: Discover the Power of Stories Together!</h1>
      <img class="floating" src="../assets/images/sharpened-transparent-logo.png" />
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
      <div id="info_box_header_container">
        <div id="info_box_header">
          <h1>What is BookBound?</h1>
        </div>
      </div>
      <div class="product_details_container">
      <div class="product_details">

        <div class="info_box">
          <h1>
            Dive into a world of reading with your family through an incredible program designed for kids and parents
            alike. Explore captivating stories, take part in exciting reading contests, and win prizes. It's more than a
            reading challenge; it's a thrilling adventure that bonds families and creates lasting memories. Embark on this
            extraordinary journey where stories come to life, and shared joy awaits!
          </h1>
        </div>
        <div class="book_covers">
          <img class="book_cover" src="../assets/images/book covers/winniethepooh.jpg" alt="winnie the pooh" />
          <img class="book_cover" src="../assets/images/book covers/aliceinwonderland.jpg" alt="alice in wonderland" />
          <img class="book_cover" src="../assets/images/book covers/dracula.jpg" alt="dracula" />
          <img class="book_cover" src="../assets/images/book covers/anneofgreengables.jpg" alt="anne of green gables" />
        </div>
      </div>
      <div class="product_details">
        <div class="info_box">
          <h1>
            Say goodbye to disorganized reading records. Our family reading tracking website is a centralized hub where
            each family member can manage their profiles, curate reading lists, and track progress. This interactive
            platform turns reading into a shared adventure, fostering both camaraderie and friendly competition. Join the
            journey and transform reading into a family bonding experience!
          </h1>
        </div>
        <div class="book_covers">
          <img class="book_cover" src="../assets/images/book covers/frankenstein.jpg" alt="frankie" />
          <img class="book_cover" src="../assets/images/book covers/greatgatbsy.jpg" alt="great gatbsy" />
          <img class="book_cover" src="../assets/images/book covers/GUEST_a0eb4016-52b3-4bbe-a1b9-8c208c81bb42.jpg"
            alt="wizard of oz" />
          <img class="book_cover" src="../assets/images/book covers/gulliverstravels.jpg" alt="gulliver's traavels" />
        </div>
      </div>
      <div class="product_details">
        <div class="info_box">
          <h1>
            Our family reading program is more than just reading - it's a relationship builder. It
            fosters love for books and literacy in children while allowing parents to bond over stories. With access to
            age-appropriate content, parents can be confident their children are exploring suitable material. This program
            is not only a gateway to the wonders of storytelling but also a catalyst for quality family time and lifelong
            learning. Embrace reading as a family, and strengthen your connections through the joy of stories!
          </h1>
        </div>
        <div class="book_covers">
          <img class="book_cover" src="../assets/images/book covers/jekyllhyde.jpg" alt="" />
          <img class="book_cover" src="../assets/images/book covers/journeytocenterofearth.jpg" alt="" />
          <img class="book_cover" src="../assets/images/book covers/littlewomen.jpg" alt="" />
          <img class="book_cover" src="../assets/images/book covers/peterrabbit.jpg" alt="" />
        </div>
      </div>
      <div class="product_details">
        <div class="info_box">
          <h1>
            Join us for epic tales, incredible connections, and the thrill of reading. Embark on this adventure and
            explore the wonderful world of books with us!
          </h1>
        </div>
        <div class="book_covers">
          <img class="book_cover" src="../assets/images/book covers/pictureofdoriangray.jpg" alt="dorian gray" />
          <img class="book_cover" src="../assets/images/book covers/theOdyssey.jpg" alt="odyessy" />
          <img class="book_cover" src="../assets/images/book covers/velvateenrabbit.jpg" alt="velvateen rabbit" />
          <img class="book_cover" src="../assets/images/book covers/wutheringheights.jpg" alt="wuthering heights" />
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
.content {
  margin-left: 12vw;
  margin-right: 12vw;
}

.home {
  padding: 1vw;
}

.title {
  display: flex;
  flex-direction: row;
  font-family: var(--header-font);
  background-color: var(--background-color-green-mute);
  color: var(--font-color);
  align-items: center;
  justify-content: center;
  margin: 75px 35px 30px 35px;
  border-radius: 50%;
  height: 20vh;
  box-shadow: var(--panel-shadow);
}

.title h1 {
  font-size: 6.5vh;
  text-shadow: 15px 15px 10px rgba(0, 0, 0, 0.329);
  text-align: center;
}

.title img {
  width: 20vw;
  filter: drop-shadow(25px 35px 8px rgba(0, 0, 0, 0.329));
}

#info_box_header_container {
  display: flex;
  margin-top: 10vh;
  margin-bottom: 10vh;
  align-items: center;
  justify-content: center;
}

#info_box_header {
  width: 30%;
  height: fit-content;
  background: rgb(115, 147, 126);
  border: 1px;
  border-color: rgb(55, 77, 62);
  border-style: solid;
  border-radius: 40px;
  padding: 1vh;
  box-shadow: var(--panel-shadow);
}

#info_box_header h1 {
  font-family: var(--header-font);
  font-size: 4vh;
  text-align: center;
  color: var(--font-color);
}

.product_details_container{
  display:grid;
  grid-template-columns: 1fr;
  row-gap: 30px;
}

.product_details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  padding: 1rem;
  margin-left:8vw;
  margin-right: auto;
  width: 70%;
  align-items: center;
  justify-items: center;
  background-color: var(--background-color-popout);
  padding:50px;
  box-shadow: var(--panel-shadow);

}

.info_box {
  height: fit-content;
  width:fit-content;
  background: rgb(115, 147, 126);
  border: 2px;
  border-color: rgb(55, 77, 62);
  border-style: solid;
  border-radius: 80px;
  padding: 20px 30px 20px 30px;
  margin-left:20px;
  margin-right:20px;
  box-shadow: var(--panel-shadow);
}

.info_box h1 {
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
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

/* -- Mobile large -- */
@media(max-width: 916px) {
  .home {
    padding: 0.5rem;
  }

  .content {
    margin-left: 0rem;
    margin-right: 0rem;
  }

  .title {
    height: 15rem;
  }

  .title h1 {
    font-size: 32px;
    text-align: right;
    padding: 1rem;
  }

  .title img {
    width: 350px;
  }

  .product_details {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    row-gap: 5rem;
  }

  .info_box {
    height: fit-content;
    width: 40rem;
    padding: 1.25rem;
  }

  .info_box h1 {
    font-size: 16px;
  }

  .book_covers {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5rem;
    width: 100%;
  }

  .book_covers .book_cover {
    width: 5rem;
    height: auto;
  }

}

/* -- Mobile small -- */
@media(max-width: 713px) {
  .content {
  margin-left: 0vw;
  margin-right: 0vw;
}

.home {
  padding: 0vw;
}

.title {
  display: flex;
  flex-direction: column;
  font-family: var(--header-font);
  background-color: var(--background-color-green-mute);
  color: var(--font-color);
  align-items: center;
  justify-content: center;
  margin: 0px;
  border-radius: 20%;
  height: 45vh;
  box-shadow: var(--panel-shadow);
}

.title h1 {
  font-size:42px;
  text-shadow: 15px 15px 10px rgba(0, 0, 0, 0.329);
  text-align: center;
}

.title img {
  z-index: 3;
   transform: scale(0.5) translate(-15px -65px);

  filter: drop-shadow(25px 35px 8px rgba(0, 0, 0, 0.329));
}

#info_box_header_container {
  display: flex;
  margin: 45px;
  align-items: center;
  justify-content: center;
}

#info_box_header {
  width: 80vw;
  height: fit-content;
  background: rgb(115, 147, 126);
  border: 1px;
  border-color: rgb(55, 77, 62);
  border-style: solid;
  border-radius: 40px;
  padding: 0vh;
  box-shadow: var(--panel-shadow);
}

#info_box_header h1 {
  font-family: var(--header-font);
  font-size: 4vh;
  text-align: center;
  color: var(--font-color);
}

.product_details_container{
  display:grid;
  grid-template-columns: 1fr;
  row-gap: 30px;
}

.product_details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  padding: 1rem;
  margin-left:8vw;
  margin-right: auto;
  width: 70%;
  align-items: center;
  justify-items: center;
  background-color: var(--background-color-popout);
  padding:50px;
  box-shadow: var(--panel-shadow);

}

.info_box {
  height: fit-content;
  width:fit-content;
  background: rgb(115, 147, 126);
  border: 2px;
  border-color: rgb(55, 77, 62);
  border-style: solid;
  border-radius: 80px;
  padding: 20px 30px 20px 30px;
  margin-left:20px;
  margin-right:20px;
  box-shadow: var(--panel-shadow);
}

.info_box h1 {
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
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

}

/*-- Desktop --*/
@media(min-width: 916px) {


  .product_details:nth-child(odd) .info_box {
    order: 1;
  }

  .product_details:nth-child(odd) .book_covers {
    order: 2;
    
  }

  .product_details:nth-child(even) .info_box {
    order: 2;
  }

  .product_details:nth-child(even) .book_covers {
    order: 1;
  }
}
</style>