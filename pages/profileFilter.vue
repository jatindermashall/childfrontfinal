<template>
  <div>
    <!-- Navigation Start  -->
     <Header/>
    <!-- Navigation End  -->

    <!-- Search section -->
    
     
    <!--Search Section -->

    <Searchinner/>

    

    


 

    

    <!-- footer start -->
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/parts/Header.vue";
import Searchinner from "~/components/parts/Searchinner.vue";
import Footer from "~/components/parts/Footer.vue";
export default {
  components: {
    Header,
     Searchinner, 
     Footer
  }
};
</script>

<style></style>
