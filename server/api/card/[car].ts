// import express from 'express';

// const app=express();


// app.get('/api/card/:car',(req,res) =>{
//  return cards.find(pcard => pcard===car);
// })


const cards=[
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
      id: 4,
      title: "The Python Course: build web application ",
      time: "3 hours 30 minutes",
      width:"266px",
      height:"156px",
      pictureUrl:
        "https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-python.jpg",
      imageAlt: "Claire Robertson"
    
    },
    {
        id: 5,
        title: "Applying JavaScript and using the console.",
        time: "1 hour 30 minutes",
        width:"266px",
        height:"156px",
        pictureUrl:
          "https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-javascript.jpg",
        imageAlt: "Juanita Bell"
      
      },
      {
        id: 6,
        title: "WordPress:complete WordPress theme and plugin",
        time: "2 hours 30 minutes",
        width:"266px",
        height:"156px",
        pictureUrl:
          "https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-wordpress.jpg",
        imageAlt: "Claire Robertson"
      
      },
      {
        id: 7,
        title: "CSS: ultimate CSS course from beginner to advanced",
        time: "1 hour 30 minutes",
        width:"266px",
        height:"156px",
        pictureUrl:
          "https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-css.jpg",
        imageAlt: "Juanita Bell"
      
      },
      {
        id: 8,
        title: "Gatsby JS: build blog with GraphQL and React",
        time: "3 hours 56 minutes",
        width:"266px",
        height:"156px",
        pictureUrl:
          "https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-gatsby.jpg",
        imageAlt: "Morris Mcoey"
      
      },
      
    
];

export default defineEventHandler(async (event)  =>{
    const { car } = event.context.params;
    console.log(car);
    const data= cards.find(pcard => pcard.id==car);
    console.log("cards",JSON.stringify(cards));
    
    console.log("data" ,JSON.stringify(data));
    
    return data;
})






