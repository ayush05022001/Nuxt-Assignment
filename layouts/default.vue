<template>
    <div>
     <Header />
        <div>
        <slot ></slot>
      </div>
        <Footer />
    </div>
</template>

<script >
import search from '../components/search.vue';
export default {
provide() {
    return {
      userData: this.userData, // Replace with your data source
    };
  },
  
}
// export default {
//   data() {
//     return {
//       receivedData: null,
//     };
//   },
//   mounted() {
//     this.$on('sendData', (data) => {
//       this.receivedData = data;
//     });
//   },
// };
// export default{
//   props:defineProps(['data'])
// }
// const data='';
// let flag=true;
// const sharedData='';
// const shared='';
// function submitValue(){
//   data=this.inputValue;
  
//   flag=!flag;
//   sharedData = useState('sharedData', () => ({ message: data }));
//  shared = useState('shared', () => ({ message: flag }));
// }
// console.log(this.inputValue);




</script>

<style >
@import url("~/assets/css/styles.css");
@import url("~/assets/css/styles2.css");
</style>