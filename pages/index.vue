<template>
    <div>
      <div class="main-content" >
        <div class="first-section">
              <div class="elements">
                
                  
                    <h1 class="heading-content">Welcome to Geeks UI Learning Application</h1>
                  
                
                
                  
                    <p class="para">
                      Hand-picked Instructor and expertly crafted courses, designed for the modern students and entrepreneur.
                    </p>
                  
                
                <div class="buttons">
                  <button class="browse">
                    Browse Courses
                  </button>
                  <button class="question">
                    Are you Instructor?
                  </button>
                </div>
              </div>
              <div class="image">
                <img src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/hero-img.png" />
              </div>

            </div>
            <div class="second_section">
              <div class="items_container">
                <div class="first">
                  <div class="image">
                  <div class="image_icon" >
                    <iconify-icon icon="tabler:video" width="30"></iconify-icon>
                  </div>
                </div>
                  <div class="text_content">
                    <h4>
                      30,000 online courses
                    </h4>
                    <p>
                      Enjoy a variety of fresh topics
                    </p>
                  </div>

                  
                </div>
                <div class="second">
                  <div class="image_icon">
                    <iconify-icon icon="clarity:users-line" width="30"></iconify-icon>
                  </div>
                  <div class="text_content">
                      <h4>
                        Expert Instruction
                      </h4>
                      <p>
                        Find the right instructor for you
                      </p>
                  </div>
                </div>
                <div class="third">
                  <div class="image_icon">
                    <iconify-icon icon="mingcute:time-line" width="30"></iconify-icon>
                  </div>
                  <div class="text_content">
                    <h4>
                      Lifetime access
                    </h4>
                    <p>
                      Learn on your schedule
                    </p>
                  </div>
                </div>
              </div>
        </div>
      
        <Card />
      </div>
        
    </div>
    
</template>

<script setup>
    const store=useUserStore();
   

</script>

<style  >
@import url("~/assets/css/styles.css");
@import url("~/assets/css/styles2.css");


</style>