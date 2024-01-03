<template>
    <div>
        <h1>About Page</h1>
        
        <div class="card-display flex m-10">
            <div class="image">
                <img :src="courses[0].pictureUrl" width="700px"/>
            </div>
            <div class="description">
                <h1>{{ courses[0].title }}</h1>
               <p><b>Duration :</b>{{ courses[0].time }}</p>
               <p><b>Description:</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eos corporis doloribus accusantium quam. Animi fuga tempore quos veniam vitae nihil quis impedit ducimus culpa explicabo, voluptatibus, facere ut quia?
               Dolorem pariatur expedita illo provident id, in incidunt nostrum soluta neque deleniti itaque temporibus vel nemo saepe atque illum voluptatem, doloribus reprehenderit assumenda rem labore magni? Ut doloribus inventore necessitatibus?
               Voluptatibus quae numquam natus facere error, fugit voluptatem ipsum iure rem quis laborum aspernatur enim quo tempora sunt placeat eum accusantium. Laudantium accusantium natus laborum voluptate cumque magni cum quidem.
               Blanditiis ipsa excepturi vero ipsum quia inventore harum id libero molestias sunt. Temporibus rerum sequi facilis nobis unde pariatur ut quod. Adipisci ad omnis quidem impedit vitae optio blanditiis maxime!
               Magnam molestiae vel architecto deserunt illo, itaque voluptatum delectus! Sapiente debitis perspiciatis assumenda, iusto repudiandae in totam! Expedita debitis vel dolores cupiditate sequi odit sapiente doloremque. Animi deleniti perferendis accusamus?</p> 
                
                <p><b>Level :</b> Beginner</p>
            </div>
        </div>
    </div>
</template>

<script setup>
//const productId = this.$route.query.category;
const store=useUserStore();

const cards=await useFetch('/api/cards');
const detail=await useFetch('/api/card/3')

// console.log(detail);

const arr=cards.data.value;

let courses=[];
arr.forEach(function(course){
          if(course.pictureUrl.indexOf(store.img)!=-1){
            courses.push(course);
          }
        });

// console.log(courses.pictureUrl);


</script>

<style >
    .card-display{
        display: flex;
        margin: 10px ;
    }
    
</style>