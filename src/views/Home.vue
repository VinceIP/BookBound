<template>
  <div class="home">
    <div class="title">
      <h1>BookBound: Discover the Power of Stories Together!</h1>
      <img class="floating" src="../assets/images/sharpened-transparent-logo.png" />
    </div>
    <logo-slider>
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
    </logo-slider>
    <div class="content">
      <div class="product_details">
        <div class="info_box">
          <h1>
            Get ready for an incredible family reading program that's all about fun
            and togetherness! It's specially designed for both kids and parents, so
            the whole family can dive into the magic of reading. Imagine being
            whisked away to amazing worlds through captivating stories and vibrant
            illustrations. But that's not all - this program is packed with exciting
            surprises! You can challenge your family to friendly reading contests
            and win fantastic prizes. It's like a thrilling race to see who can read
            the most books or explore the most adventurous tales. And the best part?
            You'll be cheering each other on and celebrating as a team. It's a
            fantastic way to bond with your family and create lasting memories. So
            get ready to embark on this extraordinary reading adventure together,
            where stories come to life and joy fills the air!
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
            Gone are the days of scattered reading logs and forgotten book lists.
            Our family reading tracking website offers a centralized hub where every
            family member can create their personal profiles, add books to their
            reading lists, and track their progress. This interactive and
            personalized experience makes reading a shared journey, fostering a
            sense of camaraderie and healthy competition among family members.
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
            This family reading program that parents can also use brings numerous
            benefits for both children and parents alike. It promotes a positive
            reading environment at home, encouraging a love for books and fostering
            literacy skills in children. By engaging in shared reading activities,
            parents can actively participate and bond with their children over
            stories, creating cherished moments together. Additionally, the program
            provides access to a wide range of age-appropriate content, ensuring
            that children are exposed to suitable material. This empowers parents to
            feel confident that their kids are exploring books that align with their
            developmental stage. Moreover, the program offers an opportunity for
            families to spend quality time together, enjoying the wonders of
            storytelling and strengthening their connections. Overall, a family
            reading program that includes parents is a fantastic way to cultivate a
            love for reading, promote family togetherness, and spark lifelong
            learning in children.
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
            If you're ready for epic tales, incredible friendships, and the thrill
            of reading, join us on this amazing journey. Let's explore the wonderful
            world of books together!
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
@import url("https://fonts.cdnfonts.com/css/socake");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap");



/* -- Mobile phones -- */
@media(max-width: 916px) {
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
  font-size: 38px;
  text-shadow: 15px 15px 10px rgba(0, 0, 0, 0.329);
  text-align: right;
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



.content {
  margin-left: 1rem;
  margin-right: 1rem;
}

.product_details {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  row-gap: 2rem;
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
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  width: 100%;
  justify-items: center;
  justify-content: center;
}

.book_covers .book_cover {
  filter: drop-shadow(15px 15px 8px rgba(0, 0, 0, 0.329));
  width: 8rem;
  height: auto;
}

}

/*-- Desktop --*/
@media(min-width: 916px) {

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



.content {
  margin-left: 1rem;
  margin-right: 1rem;
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