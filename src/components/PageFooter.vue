<template>
  <div class="page-footer">
    <div class="page-footer-content">
      <div class="logo"><h1>BookBound</h1></div>
      <div class="nav"><h1>Return to top</h1></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PageFooter",
};
</script>
<style>
.page-footer {
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  bottom: -8vh;
  background-color: var(--background-color-green-mute);
  color: var(--font-color);
  height: 60px;
  width: 100vw;
}

.page-footer-content {
  display: flex;
  justify-content: space-between;
  width:100%;
}

.page-footer h1 {
  font-family: var(--header-font);
  font-size: 22px;
}

.logo{
    margin-left:150px;
}

.nav{
    margin-right:150px;

}
</style>
