// const dataArray = JSON.parse(jsonData);
// console.log(dataArray)
console.log("jsonData")




// let tbody = document.getElementById("tbody")

// document.addEventListener("DOMContentLoaded", function() {
//   var tbody = document.getElementById("tbody");

// // fetch function
// fetch("http://localhost:3000/blogs")
//   .then(res => res.json())
//   .then(json => {
//     json.map(data => {
//       console.log("data1",data)
//       // tbody.append(td_fun(data));
//       tbody.innerHTML += td_fun(data);
      
//     })
//   }) .catch(error => {
//     console.error('Error:', error);
//   });
// });

// // create td
// function td_fun(item) {
//   console.log("item",item)
//   let td = document.createElement('div');
//   td.innerHTML = `
//     <div class="box1">
//     <img src="" alt="" />
//   <div class="boxtext">
//     <div class="boxdiv">Technology</div>
//     <h1>Lorem ipsum, dolor sit amet, consectetur adipisicing elit.</h1>
//     <p style="font-size: 0.7em;" >
//       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//       Temporibus fuga reiciendis voluptatum rerum enim eligendi,
//       incidunt eveniet distinctio corporis repudiandae.
//     </p>
//     <div class="boxauthor">
//       <img src="" alt="" class="boxauthorimg" />
//       <div class="boxauthorsname">
//         <div class="name">${item.author}</div>
//         <div class="date" style="color: grey;" >xx.xx.xxxx</div>
//       </div>
//     </div>
//   </div>
// </div>
// </div>
//     `;
//   return td;
// }









document.addEventListener("DOMContentLoaded", function() {
  var tbody = document.getElementById("tbody");
  var tmain = document.getElementById("sec2");

  // fetch function
  fetch("../database/jsonData.json")
  // fetch("http://localhost:3000/blogs")
    .then(res => res.json())
    .then(json => {
      console.log("data1", json);
      json.blogs.map(data => {
        console.log("data1", data);
        // tbody.innerHTML += td_fun(data);
        tbody.append(td_fun(data));
        
      });
      tmain.append(td_fun1(json));
    })
    .catch(error => {
      console.error('Error:', error);
    });
});

// create td
function td_fun(item) {
  // console.log("item", item);
  let div = document.createElement('div');
  div.className = "mainContainer";
  div.innerHTML = `
    <div class="box1" key="item.id">
      <img src=${item.imageurl} alt="" />
      <div class="boxtext">
        <div class="boxdiv">${item.tags}</div>
        <a href="../blog.html?id=${item.id}"><h1>${item.title}</h1></a>
        <a href="../blog.html?id=${item.id}"><p class="boxContent">
        ${item.content.slice(0,180)}
        </p></a>
        <div class="boxauthor">
          <img src=${item.img0} alt="" class="boxauthorimg" />
          <div class="boxauthorsname">
            <div class="name namestyle">${item.author}</div>
            <div class="date datestyle" style="color: grey;">${item.date}</div>
          </div>
        </div>
      </div>
    </div>
  `;
  return div;
}


function td_fun1(item) {
  let data = item.blogs[0]
  console.log("item-mini", item.blogs[0]);
  console.log("item-mini", item ,item.index);
  let div = document.createElement('div');
  div.innerHTML = `
     <div class="sec2content">
        <img src=${data.imageurl} alt="" />
        <div class="s2text">
          <div class="div">${data.tags}</div>
          <h1>${data.title}</h1>
          <p">
          ${data.content.slice(0, 500)}
          </p>
          <div class="author">
            <img src=${data.img0} alt="" class="authorimg" />
            <div class="authorsname">
              <div class="name namestyle">${data.author}</div>
              <div class="date datestyle" style="color: grey;">${data.date}</div>
            </div>
          </div>
        </div>
      </div>
  `;
  return div;
}
