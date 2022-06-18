const requestURL = "https://usersdogs.dmytrominochkin.cloud/dogs";
const BSrc = "https://usersdogs.dmytrominochkin.cloud";

let body = $('body').get(0);

let x = 0;

$.ajax(requestURL,{
	success: function(data){
		data.forEach(element => {
            main.insertAdjacentHTML("beforebegin", 
            `<div class="grid open_modal" onclick="display(this)"  value="${x}">
				<img src="${BSrc}${element.dogImage}" alt="The photo of the dog should be here">
				<div class="ta">
					<h2>${element.title}</h2>
					<p>${element.sex}</p>
				</div>
            </div>`);
            x++;
		});
	}
});



function display(elm) {
   
    var x = elm.getAttribute('value');
          
      $.ajax(requestURL,{
        success: function(data){
   
    $('#link')[0].src = BSrc + data[x].dogImage;
        $('#name')[0].innerHTML = data[x].title;
        $('#sex')[0].innerHTML = data[x].sex;
        $('#age')[0].innerHTML = data[x].age;
        $('#description')[0].innerHTML = data[x].description;
  
    ml.classList.add('mv'); 
    body.classList.add('bck'); 

    }
});
}


$('#close').click(function() {  
  ml.classList.remove('mv');
  body.classList.remove('bck'); 
});