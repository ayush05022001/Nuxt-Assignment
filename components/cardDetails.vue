<template>
   
    <div class="card" v-for="course in courses" :key="course.id" >
        
      <div class="one">
        <NuxtLink :to="'/about/'+course.id"  >
                      <img :width=course.width :height=course.height :src="course.pictureUrl" @click="() => {store.img=course.pictureUrl;console.log(store.img)}"/> 
                    </NuxtLink>
                    </div>
                    <div class="desc">
                      <h4>
                        {{ course.title }}
                      </h4>
                      <p>
                        {{course.time}}
                      </p>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect><rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9"></rect><rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9"></rect></svg>
                      <span>Beginner</span>
                    </div>
                    <div class="line">

                    </div>

  
                    <div class="footer">
                      <span>{{course.imageAlt}}</span>
                    </div>
                  </div>
              
    

<!-- <div>
  {{ courses[0].title }}
</div> -->
</template>

<script setup>

const random=Math.ceil(Math.random()*12);

onMounted(() =>{
  console.log(courses);
  const courses_each=courses;
console.log("Component",courses_each);

})


const {courses}=defineProps(['courses']);
const store=useUserStore();    

    
    function update(){
      
    }
</script>

<style >

</style>