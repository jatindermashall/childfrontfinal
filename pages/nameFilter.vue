<template>
  <div>
    <!-- Navigation Start  -->
     <Header/>
    <!-- Navigation End  -->

    <!-- Search section -->
    
     
    <!--Names List Section -->

    <Nameslist/>

   

    

    


 

    

    <!-- footer start -->
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/parts/Header.vue";
import Nameslist from "~/components/Nameslist.vue";
import Footer from "~/components/parts/Footer.vue";
export default {
  components: {
     Header,
     Nameslist, 
     Footer
  }
};
</script>

<style></style>
