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
            Our family reading program, including parents, is more than just reading - it's a relationship builder. It
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
</template>

<script>
export default {
  name: "home-view",
};
</script>

<style scoped>
#info_box_header_container {
  display: flex;
  margin-top: 5rem;
  margin-bottom: 5rem;
  align-items: center;
  justify-content: center;
}

#info_box_header {
  width: 50%;
  background: rgb(115, 147, 126);
  border: 1px;
  border-color: rgb(55, 77, 62);
  border-style: solid;
  border-radius: 40px;
  padding: 10px;
  box-shadow: var(--panel-shadow);
}

#info_box_header h1 {
  font-family: var(--header-font);
  font-size: 28px;
  text-align: center;
  color: var(--font-color);
}

/* -- Mobile phones -- */
@media(max-width: 916px) {
  .home {
    padding: 0.5rem;
    background: var(--background-color);
  }

  .title {
    display: flex;
    background-color: var(--background-color-green-mute);
    color: var(--font-color);
    align-items: center;
    justify-items: center;
    border-radius: 50%;
    box-shadow: var(--panel-shadow);
    height: 15rem;
  }

  .title h1 {
    font-family: var(--header-font);
    font-size: 32px;
    text-shadow: 15px 15px 10px rgba(0, 0, 0, 0.329);
    text-align: right;
    padding:1rem;
  }

  .title img {
    width: 350px;
    filter: drop-shadow(25px 35px 8px rgba(0, 0, 0, 0.329));
  }

  .content {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .product_details {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    row-gap: 2rem;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  .info_box {
    height: fit-content;
    width: fit-content;
    background: rgb(115, 147, 126);
    border: 2px;
    border-color: rgb(55, 77, 62);
    border-style: solid;
    border-radius: 80px;
    box-shadow: var(--panel-shadow);

  }

  .info_box h1 {
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    padding: 25px
  }

  .book_covers {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    width: 100%;
    justify-items: center;
    justify-content: center;
    margin-bottom: 3rem;
  }

  .book_covers .book_cover {
    filter: drop-shadow(15px 15px 8px rgba(0, 0, 0, 0.329));
    width: 8rem;
    height: auto;
  }

}

/*-- Desktop --*/
@media(min-width: 916px) {
  .content {
    margin-left: 12rem;
    margin-right: 12rem;
  }


  .home {
    padding: 0.5rem;
    background: var(--background-color);
  }

  .title {
    display: flex;
    font-family: var(--header-font);
    background-color: var(--background-color-green-mute);
    color: var(--font-color);
    align-items: center;
    margin: 30px 15px 30px 15px;
    border-radius: 50%;
    height: 250px;
    box-shadow: var(--panel-shadow);
  }

  .title h1 {
    font-size: 58px;
    text-shadow: 15px 15px 10px rgba(0, 0, 0, 0.329);
    text-align: center;
    margin-left: 30%;
  }

  .title img {
    width: 400px;
    filter: drop-shadow(25px 35px 8px rgba(0, 0, 0, 0.329));
  }

  logo-slider {
    display: flex;
    border: 2px solid rgb(0, 0, 0);
    background: rgb(255, 237, 200);

    box-shadow: var(--panel-shadow);
    padding: 10px;
    height: 325px;
    overflow: hidden;
    width: 70%;
    position: relative;
    margin: 0 auto 50px;
  }

  logo-slider:hover .slideshow {
    animation-play-state: paused;
  }

  .slideshow {
    display: flex;
    animation: marquee 40s linear infinite;
    justify-content: space-evenly;
  }

  #slides {
    width: 45rem;
    height: auto;
    padding: 0rem 1rem 0rem 1rem;

  }

  @keyframes marquee {
    0% {
      transform: translateX(0%)
    }

    100% {
      transform: translateX(-50%)
    }
  }





  .product_details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    column-gap: 5rem;
    padding: 1rem;
    width: 100%;
    align-items: center;
  }

  .info_box {
    height: fit-content;
    width: 80%;
    align-self: center;
    justify-self: center;
    background: rgb(115, 147, 126);
    border: 2px;
    border-color: rgb(55, 77, 62);
    border-style: solid;
    border-radius: 80px;
    padding: 25px;
    box-shadow: var(--panel-shadow);

  }

  .info_box h1 {
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
  }

  .book_covers {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
    grid-template-rows: auto;
    gap: 1rem;
    width: 90%;
    justify-items: center;
    align-items: center;
  }

  .book_covers .book_cover {
    filter: drop-shadow(15px 15px 8px rgba(0, 0, 0, 0.329));
    width: 10rem;
    height: auto;
  }

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