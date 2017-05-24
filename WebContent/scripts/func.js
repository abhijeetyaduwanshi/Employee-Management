(function() {
	'use strict';

	console.log("func.js inited");
	
	(function(){
		$('#getAll_btn').show();
		$('#empId_input').show();
		$('#getEmp_btn').show();
		$('#addEmpExpand').show();
		$('#addEmpSection').hide();
		$('#updateEmpSection').hide();
		//$('#deleteEmpSection').hide();
		$('#employeeTable').show();
	})();
	
	$('#getAll_btn').click(function(){
		$('#getAll_btn').show();
		$('#empId_input').show();
		$('#getEmp_btn').show();
		$('#addEmpExpand').show();
		$('#addEmpSection').hide();
		$('#updateEmpSection').hide();
		//$('#deleteEmpSection').hide();
		$('#employeeTable').show();
	});
	
	$('#getEmp_btn').click(function(){
		$('#getAll_btn').show();
		$('#empId_input').show();
		$('#getEmp_btn').show();
		$('#addEmpExpand').show();
		$('#addEmpSection').hide();
		$('#updateEmpSection').hide();
		//$('#deleteEmpSection').hide();
		$('#employeeTable').show();
	});
	
	$('#addEmpExpand').click(function(){
		$('#getAll_btn').show();
		$('#empId_input').show();
		$('#getEmp_btn').show();
		$('#addEmpExpand').show();
		$('#addEmpSection').show();
		$('#updateEmpSection').hide();
		//$('#deleteEmpSection').hide();
		$('#employeeTable').show();
	});
	
	$('#employeeTable').on('click', 'table tbody tr td:nth-child(11)', function(){
		$('#getAll_btn').show();
		$('#empId_input').show();
		$('#getEmp_btn').show();
		$('#addEmpExpand').show();
		$('#addEmpSection').hide();
		$('#updateEmpSection').show();
		//$('#deleteEmpSection').hide();
		$('#employeeTable').show();
	});
	
	$('#employeeTable').on('click', 'table tbody tr td:nth-child(12)', function(){
		$('#getAll_btn').show();
		$('#empId_input').show();
		$('#getEmp_btn').show();
		$('#addEmpExpand').show();
		$('#addEmpSection').hide();
		$('#updateEmpSection').hide();
		//$('#deleteEmpSection').show();
		$('#employeeTable').show();
	});

})();