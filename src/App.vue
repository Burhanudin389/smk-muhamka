<template>
    <!-- START : NAVBAR -->
    <Navbar />
    <!-- END : NAVBAR -->
    <!-- START : CONTENT -->
    <router-view />
    <!-- END : CONTENT -->
    <!-- START : FOOTER -->
    <Footer />
    <!-- END : FOOTER -->
</template>

<script>
    import Navbar from "@/pages/partials/Navbar.vue";
    import Footer from "@/pages/partials/Footer.vue";

    export default {
        components: {
            Navbar,
            Footer,
        }
    }
</script>