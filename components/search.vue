<template>
<div class="search collapse navbar-collapse "  >
              <span>
                <i class="fa fa-search" aria-hidden="true" style="color: #ccc;"></i>
              </span>
              
              <input v-model="inputValue" @keyup.enter="submitValue" ref="input" type="text" style="border: none;" placeholder="Search Courses" />
          
            </div>
</template>

<script >
export default{
  inject:['this.inputvalue'],
    data(){
        return{
            data:'',
        }
    },
    props:{
        
    },
    methods: {
      setup(){
        

      },
  async submitValue() {
      // Access the input value
      const store=useUserStore();
      const router=this.$router;
      const cards=await useFetch('/api/cards');
      // store.display=[];
      let arr2=[];
 const arr=cards.data.value;
 store.flag=false;
      store.lastName=this.inputValue;
      this.inputValue="";
      
 
 arr.forEach(function(course){
          if(course.title.indexOf(store.lastName)!=-1){
            arr2.push(course);
          }
        })
//  console.log(store.display);
 store.update(arr2);
 
      router.push('/search');
      
      
      console.log(store.display,"------->");
      

      

    //   data = this.inputValue;


      // Additional logic based on the input value
    },
}
}

</script>

<style >

</style>