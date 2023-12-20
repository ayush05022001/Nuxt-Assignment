<template>
    <div>
        <div class="main" >
          <div class="hero_section">
              <div class="result">
              <h1 class="mb-1 text-white display-4">Search Results for {{ store.lastName }}</h1>
      
              </div>
            </div>
            <div class="middle_region">
              <div class="filter_region">
            <div class="second_portion">
              <div class="left_side">
                  <h4>Showing 1-9 out of 11 courses</h4>
              </div>
              <div class="right_side">
                  <div class="grid_icon">
                      <i class="fa fa-th" aria-hidden="true"></i>
                  </div>
                  <div class="grid_icon">
                    <!-- <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.<style>svg{fill:#797272}</style><path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"/></svg> -->
                  </div>
                  <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle bg-light text-dark " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="margin: 10px;">
                      Release Date(newest First)
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                  </div>
              </div>
            </div>
            <div class="middle_region">
            <div class="flowers-wrap">
              <p><strong>Filter </strong></p>
              <form>
                <label><input type="checkbox" name="fl-colour" value="red" id="red" /> Angular</label><br>
                <label><input type="checkbox" name="fl-colour" value="yellow" id="yellow" /> Bootstrap</label><br> 
                <label><input type="checkbox" name="fl-colour" value="pink" id="pink" /> CSS3</label><br>                     
                <label><input type="checkbox" name="fl-colour" value="purple" id="purple" /> Figma</label><br>
                <label><input type="checkbox" name="fl-colour" value="green" id="green" /> GatsBy</label><br>  
                <label><input type="checkbox" name="fl-colour" value="other" id="other" /> GraphQL</label>
              </form>
             
              <form>
                <label><input type="checkbox" name="fl-size" value="tiny" id="tiny" /> Javscript</label><br>
                <label><input type="checkbox" name="fl-size" value="small" id="small" /> Node</label><br>
                <label><input type="checkbox" name="fl-size" value="medium" id="medium" /> Python</label><br> 
                <label><input type="checkbox" name="fl-size" value="large" id="large" /> React</label><br>
                <label><input type="checkbox" name="fl-size" value="giant" id="giant" /> WordPress</label>
              </form>  
              
            </div>
            <div class="all_cards">
              <card-details :courses="store.display" />
              <!-- <p>{{ store.display[0].title }}</p> -->
            </div>
          </div>
            
            </div>
            </div>
          </div>
    </div>
</template>

<script setup>
 const store=useUserStore();
//  const router=this.$router;

//  router.push('/search');
 console.log(store.display,"=============>");
const card=store.display;



 
//  for(let card in arr){
//   if(card.title.indexOf(store.lastName)!=-1){
//     s_card.push(card);
//   }
//  }


</script>

<style lang="scss" scoped>

</style>