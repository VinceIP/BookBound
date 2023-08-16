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
    <div class="product_details">
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
      <img
        id="bookcover"
        src="../assets/images/book covers/winniethepooh.jpg"
        alt="winnie the pooh"
      />
      <img
        id="bookcover"
        src="../assets/images/book covers/aliceinwonderland.jpg"
        alt="alice in wonderland"
      />
      <img
        id="bookcover"
        src="../assets/images/book covers/dracula.jpg"
        alt="dracula"
      />Why do I get Unknown Word error when inserting the 3 span tags?
      <img
        id="bookcover"
        src="../assets/images/book covers/anneofgreengables.jpg"
        alt="anne of green gables"
      />
    </div>
    <div class="product_details">
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
      <img
        id="bookcover"
        src="../assets/images/book covers/frankenstein.jpg"
        alt="frankie"
      />
      <img
        id="bookcover"
        src="../assets/images/book covers/greatgatbsy.jpg"
        alt="great gatbsy"
      />
      <img
        id="bookcover"
        src="../assets/images/book covers/GUEST_a0eb4016-52b3-4bbe-a1b9-8c208c81bb42.jpg"
        alt="wizard of oz"
      />
      <img
        id="bookcover"
        src="../assets/images/book covers/gulliverstravels.jpg"
        alt="gulliver's traavels"
      />
    </div>
    <div class="product_details">
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
      <img id="bookcover" src="../assets/images/book covers/jekyllhyde.jpg" alt="" />
      <img
        id="bookcover"
        src="../assets/images/book covers/journeytocenterofearth.jpg"
        alt=""
      />
      <img id="bookcover" src="../assets/images/book covers/littlewomen.jpg" alt="" />
      <img id="bookcover" src="../assets/images/book covers/peterrabbit.jpg" alt="" />
    </div>
    <div class="product_details">
      <h1>
        If you're ready for epic tales, incredible friendships, and the thrill
        of reading, join us on this amazing journey. Let's explore the wonderful
        world of books together!
      </h1>
    </div>
    <div class="book_covers">
      <img
        id="bookcover"
        src="../assets/images/book covers/pictureofdoriangray.jpg"
        alt="dorian gray"
      />
      <img
        id="bookcover"
        src="../assets/images/book covers/theOdyssey.jpg"
        alt="odyessy"
      />
      <img
        id="bookcover"
        src="../assets/images/book covers/velvateenrabbit.jpg"
        alt="velvateen rabbit"
      />
      <img
        id="bookcover"
        src="../assets/images/book covers/wutheringheights.jpg"
        alt="wuthering heights"
      />
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

.home {
  padding:0.5rem;
  background: var(--background-color);
}

.title {
  display: flex;
  font-family: var(--header-font);
  background-color: var(--background-color-green-mute);
  color: var(--font-color);
  align-items: center;
  justify-content: center;
  margin: 30px 15px 30px 15px;
  border-radius: 50%;
  height: 250px;
  box-shadow: var(--panel-shadow);
}

.title h1{
  font-size: 68px;
  text-shadow: 15px 15px 10px rgba(0, 0, 0, 0.329);
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
  padding:0rem 1rem 0rem 1rem;
  
}

@keyframes marquee {
  0% { transform: translateX(0%)}
  100% { transform: translateX(-50%)}
}

#bookcover {
  width: 200px;
  margin-bottom: 50px;
  margin-top: 50px;
  border: 11px;
  border-style: solid;
  border-color: rgb(187, 12, 12);
  border-radius: 2%;
}
.book_covers {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 400px;
}


.product_details {
  width: 80%;
  background: rgb(115, 147, 126);
  border: 2px;
  border-color: rgb(115, 147, 126);
  border-style: solid;
  border-radius: 80px;
  padding: 23px;
  margin: 0 auto;
}

.product_details h1 {
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
}
</style>