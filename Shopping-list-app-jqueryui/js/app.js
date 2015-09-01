$(function (){

	//	var selected = [];	
	//
	//	$('#shopping-list-form').on("keydown", function(event){
	//		keypress = event.keyCode;
	//
	//		if (keypress = 13) {
	//			selected.push($(this).attr('name'));
	//		}
	//	});
	//	$('.list').on('click', 'add', function(event){
	//		this.append("<div class="row-content">\
	//		<input class="checkbox" type="checkbox"/>\
	//		<div class="item">\
	//		<div class="action-secondary"><i class="mdi-material-info"></i></div>\
	//		<h4 class="list-group-item-heading">List item</h4>\
	//		</div>\
	//		</div>");
	//		});

	$("#addButton").click(function () {           

		var listVal = $('#text-box').val();

		$('#list').append('<div class="row-content">\
<input class="checkbox" type="checkbox"/>\
<div class="item">\
<div class="action-secondary"><i class="mdi-material-info"></i></div>\
<h4 class="list-group-item-heading">'+listVal+'</h4>\
</div>\
</div>')

		$('#text-box').val('');
	});

	$("#deleteButton").on("click", function () {
		$('#list').html('');
	});





	//
	//grab 13 value compare with if 
	//
	//	push value of check box into array of items
	//
	//	prepare for add button 


	$('#text-box').keypress(function(e){
		if(e.which==13){
			$('#addButton').click();
			return false;
		}
	});

//	$("#row-content").mouseover(function(){ $("#deleteSingle").css('visibility','visible'); 
//	});							   
		 							   
									   
									  
	
	
});
