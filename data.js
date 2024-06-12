const myImage = document.getElementById("abc");

myImage.addEventListener("mouseover", function() {
  myImage.src="https://img.theweek.in/content/dam/week/news/sports/images/2023/10/19/kohli%20(1).jpg"
myImage.addEventListener("mouseout", function() {
  myImage.src = "https://s3images.zee5.com/wp-content/uploads/2023/05/ANI-20230501184136.jpg";
});