<template>
    <div>
        <div class="card_section">
              <div class="all_cards">
              <div class="first_part">
                
                  <h2 class="heading">Recommended for you</h2>
                
                <div class="cards">
                  
                  <card-details :courses="courses_one"/>
                  
                </div>
                
              </div>
              <div class="second_part">
                
                  <h2 class="heading">Most Popular</h2>
                
                <div class="cards">
                  <card-details :courses="courses_two"/>
                  
                  
                </div>
                
              </div>
              <div class="third_part">
                
                  <h2 class="heading">Trending</h2>
                
                <div class="cards">
                  
                  <card-details :courses="courses_one"/>
                </div>
                
              </div>
            </div>
          </div>
          </div>
          
</template>

<script setup>
const courses_one=[
  {
    id: 1,
    title: "How to easily create a website with React",
    time: "3 hours 30 minutes",
    width:"266px",
    height:"156px",
    pictureUrl:
      "https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-react.jpg",
    imageAlt: "Morris Mcoey"
  
  },
  {
    id: 2,
    title: "GraphQL: introduction to graphQL for beginners",
    time: "2 hours 46 minutes",
    width:"266px",
    height:"156px",
    pictureUrl:
      "https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-graphql.jpg",
    imageAlt: "Ted Hawkins"
  
  },
  {
    id: 3,
    title: "Angular - the complete guide for beginner",
    time: "1 hour 30 minutes",
    width:"266px",
    height:"156px",
    pictureUrl:
      "https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-angular.jpg",
    imageAlt: "Juanita Bell"
  
  },
  {
    id: 3,
    title: "The Python Course: build web application ",
    time: "3 hours 30 minutes",
    width:"266px",
    height:"156px",
    pictureUrl:
      "https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-python.jpg",
    imageAlt: "Claire Robertson"
  
  },
  


];

const courses_two=[
  {
    id: 1,
    title: "Applying JavaScript and using the console.",
    time: "1 hour 30 minutes",
    width:"266px",
    height:"156px",
    pictureUrl:
      "https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-javascript.jpg",
    imageAlt: "Juanita Bell"
  
  },
  {
    id: 1,
    title: "WordPress:complete WordPress theme and plugin",
    time: "2 hours 30 minutes",
    width:"266px",
    height:"156px",
    pictureUrl:
      "https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-wordpress.jpg",
    imageAlt: "Claire Robertson"
  
  },
  {
    id: 2,
    title: "CSS: ultimate CSS course from beginner to advanced",
    time: "1 hour 30 minutes",
    width:"266px",
    height:"156px",
    pictureUrl:
      "https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-css.jpg",
    imageAlt: "Juanita Bell"
  
  },
  {
    id: 3,
    title: "Gatsby JS: build blog with GraphQL and React",
    time: "3 hours 56 minutes",
    width:"266px",
    height:"156px",
    pictureUrl:
      "https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-gatsby.jpg",
    imageAlt: "Morris Mcoey"
  
  },
  

]
</script>

<style >
@import url("~/assets/css/styles.css");
@import url("~/assets/css/styles2.css");
</style>