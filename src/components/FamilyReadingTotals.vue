<template>
  <div>
    <div class="loading" v-if="isLoading">
      <img src="../assets/images/book_pages_opening.gif" />
    </div>
    <div v-else>
      <h4 class="total-books-read" id="books-read">Total Books Read:</h4>
      <h4 class="book-total" id="all-books">{{familyBookTotal}}</h4>
      <h4 class="total-minutes-read" id="all-minutes-read">Total Minutes of Reading:</h4>
      <h4 class="minute-total" id="total-minutes">{{familyMinuteTotal}}</h4>
    </div>
  </div>
</template>

<script>
import readingListService from '../services/ReadingListService';
import activityService from '../services/ActivityService';
export default {
    name:"family-reading-totals",
    isLoading: true,
    data(){
        return {
            familyBookTotal: 0,
            familyMinuteTotal: 0
        }
    },
    created() {
        readingListService
            .getNumBooksFinishedPerFamily(this.$store.state.user.familyId)
            .then((response)=> {
                this.familyBookTotal = response.data;
            })
        activityService
            .getTotalMinutesReadPerFamily(this.$store.state.user.familyId)
            .then((response)=> {
                this.familyMinuteTotal = response.data;
                this.isLoading = false;
            })
    }

}
</script>