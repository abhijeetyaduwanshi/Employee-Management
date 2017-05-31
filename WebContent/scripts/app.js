(function() {
	'use strict';

	console.log("app.js inited");

	//	get all employee table refresh
	$('#getAll_btn').click(function() {
		all();
	});
	
	//	get all employee
	function all() {
		$.ajax({
			type : 'GET',
			url : 'api/emp/all',
			success : function(data) {
				console.log(data);

				$('#employeeTable').html("");
				var value;
				var tableHeader = "<h2>All Employees</h2>";
				var table = "<table class='table'><thead><tr><th>UID</th><th>First Name</th><th>Last Name</th><th>Email</th><th>Address 1</th><th>Address 2</th><th>City</th><th>State</th><th>Zip</th><th>Phone</th></tr></thead>";
				for (var i = 0; i < data.payload.length; i++) {
					table = table + "<tbody><tr>";
					value = data.payload[i].uid;
					table = table + "<td class='uid'>" + value + "</td>";
					value = data.payload[i].fname;
					table = table + "<td class='fname'>" + value + "</td>";
					value = data.payload[i].lname;
					table = table + "<td class='lname'>" + value + "</td>";
					value = data.payload[i].email;
					table = table + "<td class='email'>" + value + "</td>";
					value = data.payload[i].address1;
					table = table + "<td class='address1'>" + value + "</td>";
					value = data.payload[i].address2;
					table = table + "<td class='address2'>" + value + "</td>";
					value = data.payload[i].city;
					table = table + "<td class='city'>" + value + "</td>";
					value = data.payload[i].state;
					table = table + "<td class='state'>" + value + "</td>";
					value = data.payload[i].zip;
					table = table + "<td class='zip'>" + value + "</td>";
					value = data.payload[i].phone;
					table = table + "<td class='phone'>" + value + "</td>";
					table = table + "<td>" + "<button class='buttonsEdit'><span class='glyphicon glyphicon-edit' aria-hidden='true'></span></button>" + "</td>";
					table = table + "<td>" + "<button type='button' data-toggle='modal' data-target='#deleteModal' class='buttonsDelete'><span class='glyphicon glyphicon-trash' aria-hidden='true'></span></button>" + "</td>";
					table = table + "</tr>";
				}

				table = table + "</tbody></table>";
				$('#employeeTable').html(tableHeader + table);
			},
			error : function(error) {
				console.log(error);
			},
			complete : function() {
				console.log("Request is complete");
			}
		});
	}all();
	
	//	update form
	$('#employeeTable').on('click', 'table tbody tr td:nth-child(11)', function(){
		$("#update_header_input").html("Update Employee with UID " + $(this).closest('tr').children('td.uid').text());
		$("#update_uid_input").val($(this).closest('tr').children('td.uid').text());
		$("#update_fname_input").val($(this).closest('tr').children('td.fname').text());
		$("#update_lname_input").val($(this).closest('tr').children('td.lname').text());
		$("#update_email_input").val($(this).closest('tr').children('td.email').text());
		$("#update_address1_input").val($(this).closest('tr').children('td.address1').text());
		$("#update_address2_input").val($(this).closest('tr').children('td.address2').text());
		$("#update_city_input").val($(this).closest('tr').children('td.city').text());
		$("#update_state_input").val($(this).closest('tr').children('td.state').text());
		$("#update_zip_input").val($(this).closest('tr').children('td.zip').text());
		$("#update_phone_input").val($(this).closest('tr').children('td.phone').text());
	});
	
	//	update functionality
	$('#updateEmpSection form').submit(function() {
		var empId = new Number ($("#update_uid_input").val());
		
		var emp = {
				uid : $("#update_uid_input").val(),
				fname: $("#update_fname_input").val(),
				lname: $("#update_lname_input").val(),
				email: $("#update_email_input").val(),
				address1: $("#update_address1_input").val(),
				address2: $("#update_address2_input").val(),
				city: $("#update_city_input").val(),
				state: $("#update_state_input").val(),
				zip: $("#update_zip_input").val(),
				phone: $("#update_phone_input").val()
		};
			
		$.ajax({
			type : 'PUT',
			url : 'api/emp/update/' + empId,
			data: JSON.stringify(emp),
			contentType: 'application/json',
			success : function(data) {
				console.log(data);

				$("#update_uid_input").val("");
				$("#update_fname_input").val("");
				$("#update_lname_input").val("");
				$("#update_email_input").val("");
				$("#update_address1_input").val("");
				$("#update_address2_input").val("");
				$("#update_city_input").val("");
				$("#update_state_input").val("");
				$("#update_zip_input").val("");
				$("#update_phone_input").val("");
				all();
			},
			error : function(error) {
				console.log(error);
			},
			complete : function() {
				console.log("Request is complete");
			}
		});
		
		console.log(emp);
		return false;
	});
	
	//	delete
	$('#employeeTable').on('click', 'table tbody tr td:nth-child(12)', function(){
		$("#delete_header_input").html("Are you sure you want to delete the Employee with UID " + $(this).closest('tr').children('td.uid').text());
		$("#delete_uid_input").html($(this).closest('tr').children('td.uid').text());
		$("#delete_fname_input").html($(this).closest('tr').children('td.fname').text());
		$("#delete_lname_input").html($(this).closest('tr').children('td.lname').text());
		$("#delete_email_input").html($(this).closest('tr').children('td.email').text());
		$("#delete_address1_input").html($(this).closest('tr').children('td.address1').text());
		$("#delete_address2_input").html($(this).closest('tr').children('td.address2').text());
		$("#delete_city_input").html($(this).closest('tr').children('td.city').text());
		$("#delete_state_input").html($(this).closest('tr').children('td.state').text());
		$("#delete_zip_input").html($(this).closest('tr').children('td.zip').text());
		$("#delete_phone_input").html($(this).closest('tr').children('td.phone').text());
	});
	
	//	delete functionality
	$('#deleteEmp_btn').click(function() {
		var empId = new Number ($("#delete_uid_input").html());
		
		$.ajax({
			type : 'DELETE',
			url : 'api/emp/delete/' + empId,
			success : function(data) {
				console.log(data);

				$("#delete_header_input").html("");
				$("#delete_uid_input").html("");
				$("#delete_fname_input").html("");
				$("#delete_lname_input").html("");
				$("#delete_email_input").html("");
				$("#delete_address1_input").html("");
				$("#delete_address2_input").html("");
				$("#delete_city_input").html("");
				$("#delete_state_input").html("");
				$("#delete_zip_input").html("");
				$("#delete_phone_input").html("");
				all();
			},
			error : function(error) {
				console.log(error);
			},
			complete : function() {
				console.log("Request is complete");
			}
		});
	});
	
	//	get emp with uid
	$('#getEmp_btn').click(function() {
		var empId = new Number ($("#empId_input").val());
		
		if(!isNaN(empId)) {
			$.ajax({
				type : 'GET',
				url : 'api/emp/get/' + empId,
				success : function(data) {
					console.log(data);

					$('#employeeTable').html("");
					var value;
					var tableHeader = "<h2>" + "Employee with UID: " + empId + "</h2>";
					var table = "<table class='table'><thead><tr><th>UID</th><th>First Name</th><th>Last Name</th><th>Email</th><th>Address 1</th><th>Address 2</th><th>City</th><th>State</th><th>Zip</th><th>Phone</th></tr></thead>";
					table = table + "<tbody><tr>";
					value = data.payload.uid;
					table = table + "<td class='uid'>" + value + "</td>";
					value = data.payload.fname;
					table = table + "<td class='fname'>" + value + "</td>";
					value = data.payload.lname;
					table = table + "<td class='lname'>" + value + "</td>";
					value = data.payload.email;
					table = table + "<td class='email'>" + value + "</td>";
					value = data.payload.address1;
					table = table + "<td class='address1'>" + value + "</td>";
					value = data.payload.address2;
					table = table + "<td class='address2'>" + value + "</td>";
					value = data.payload.city;
					table = table + "<td class='city'>" + value + "</td>";
					value = data.payload.state;
					table = table + "<td class='state'>" + value + "</td>";
					value = data.payload.zip;
					table = table + "<td class='zip'>" + value + "</td>";
					value = data.payload.phone;
					table = table + "<td class='phone'>" + value + "</td>";
					table = table + "<td>" + "<button class='buttonsEdit'><span class='glyphicon glyphicon-edit' aria-hidden='true'></span></button>" + "</td>";
					table = table + "<td>" + "<button type='button' data-toggle='modal' data-target='#deleteModal' class='buttonsDelete'><span class='glyphicon glyphicon-trash' aria-hidden='true'></span></button>" + "</td>";
					table = table + "</tr>";
					table = table + "</tbody></table>";

					$('#employeeTable').html(tableHeader + table);
					$("#empId_input").val("");
				},
				error : function(error) {
					console.log(error);
				},
				complete : function() {
					console.log("Request is complete");
				}
			});
		} else {
			alert("Please enter a valid number");
		}
	});
	
	//	creating a new employee
	$('#addEmpSection form').submit(function() {
		
		var emp = {
				fname: $("#fname_input").val(),
				lname: $("#lname_input").val(),
				email: $("#email_input").val(),
				address1: $("#address1_input").val(),
				address2: $("#address2_input").val(),
				city: $("#city_input").val(),
				state: $("#state_input").val(),
				zip: $("#zip_input").val(),
				phone: $("#phone_input").val()
		};
		
		$.ajax({
			type : 'POST',
			url : 'api/emp/add',
			data: JSON.stringify(emp),
			contentType: 'application/json',
			success : function(data) {
				console.log(data);
				
				$("#fname_input").val("");
				$("#lname_input").val("");
				$("#email_input").val("");
				$("#address1_input").val("");
				$("#address2_input").val("");
				$("#city_input").val("");
				$("#state_input").val("");
				$("#zip_input").val("");
				$("#phone_input").val("");
				all();
			},
			error : function(error) {
				console.log(error);
			},
			complete : function() {
				console.log("Request is complete");
			}
		});
		
		console.log(emp);
		return false;
	});
})();