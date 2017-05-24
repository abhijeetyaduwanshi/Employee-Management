package rest.controllers;

import java.util.List;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import daos.EmpDAO;
import exceptions.AppException;
import models.Employee;
import rest.AppResponse;

@Path("/emp")
public class EmployeeController {

	@GET
	@Path("/all")
	@Produces(MediaType.APPLICATION_JSON)
	public AppResponse getAll() {
		AppResponse response = new AppResponse();

		try {
			EmpDAO dao = new EmpDAO();
			List<Employee> empList = dao.getAllEmployees();
			response.setPayload(empList);
		} catch (AppException e) {
			e.printStackTrace();
			response.setStatus(AppResponse.ERROR);
			response.setMessage(e.getMessage());
		}

		return response;
	}

	@GET
	@Path("get/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public AppResponse getEmployee(@PathParam("id") int empId) {
		AppResponse response = new AppResponse();

		try {
			EmpDAO dao = new EmpDAO();
			Employee emp = dao.getEmployee(empId);
			response.setPayload(emp);
		} catch (AppException e) {
			e.printStackTrace();
			response.setStatus(AppResponse.ERROR);
			response.setMessage(e.getMessage());
		}

		return response;
	}

	@POST
	@Path("/add")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public AppResponse addEmployee(Employee emp) {
		AppResponse response = new AppResponse();

		try {
			EmpDAO dao = new EmpDAO();
			emp = dao.addEmployee(emp);
			response.setPayload(emp);
		} catch (AppException e) {
			e.printStackTrace();
			response.setStatus(AppResponse.ERROR);
			response.setMessage(e.getMessage());
		}

		return response;
	}

	@PUT
	@Path("update/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public AppResponse updateEmployee(@PathParam("id") int empId, Employee emp) {
		AppResponse response = new AppResponse();

		try {
			EmpDAO dao = new EmpDAO();
			emp = dao.updateEmployee(empId, emp);
			response.setPayload(emp);
		} catch (AppException e) {
			e.printStackTrace();
			response.setStatus(AppResponse.ERROR);
			response.setMessage(e.getMessage());
		}

		return response;
	}

	@DELETE
	@Path("delete/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public AppResponse deleteEmployee(@PathParam("id") int empId) {
		AppResponse response = new AppResponse();

		try {
			EmpDAO dao = new EmpDAO();
			Employee emp = dao.deleteEmployee(empId);
			response.setPayload(emp);
		} catch (AppException e) {
			e.printStackTrace();
			response.setStatus(AppResponse.ERROR);
			response.setMessage(e.getMessage());
		}

		return response;
	}

}
