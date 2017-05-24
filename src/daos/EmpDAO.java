package daos;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import exceptions.AppException;
import models.Employee;
import utils.DBConnector;

public class EmpDAO {

	public List<Employee> getAllEmployees() throws AppException {
		List<Employee> empList = new ArrayList<Employee>();

		Connection conn = DBConnector.connect();
		PreparedStatement ps = null;
		ResultSet rs = null;

		try {
			ps = conn.prepareStatement("SELECT * FROM Employee");
			rs = ps.executeQuery();

			while (rs.next()) {
				Employee emp = new Employee();

				emp.setUid(rs.getInt("UID"));
				emp.setFname(rs.getString("Fname"));
				emp.setLname(rs.getString("Lname"));
				emp.setEmail(rs.getString("Email"));
				emp.setAddress1(rs.getString("Address1"));
				emp.setAddress2(rs.getString("Address2"));
				emp.setCity(rs.getString("City"));
				emp.setState(rs.getString("State"));
				emp.setZip(rs.getInt("Zip"));
				emp.setPhone(rs.getString("Phone"));

				empList.add(emp);
			}
		} catch (SQLException e) {
			e.printStackTrace();
			throw new AppException("Error: " + e.getMessage(), e.getCause());
		} finally {
			DBConnector.closeResources(conn, ps, rs);
		}

		return empList;
	}

	public Employee getEmployee(int empId) throws AppException {
		Employee emp = null;

		Connection conn = DBConnector.connect();
		PreparedStatement ps = null;
		ResultSet rs = null;

		try {
			ps = conn.prepareStatement("SELECT * FROM Employee WHERE UID=?");
			ps.setInt(1, empId);
			rs = ps.executeQuery();

			if (rs.next()) {
				emp = new Employee();

				emp.setUid(rs.getInt("UID"));
				emp.setFname(rs.getString("Fname"));
				emp.setLname(rs.getString("Lname"));
				emp.setEmail(rs.getString("Email"));
				emp.setAddress1(rs.getString("Address1"));
				emp.setAddress2(rs.getString("Address2"));
				emp.setCity(rs.getString("City"));
				emp.setState(rs.getString("State"));
				emp.setZip(rs.getInt("Zip"));
				emp.setPhone(rs.getString("Phone"));
			} else {
				throw new AppException("Employee with the id = " + empId + " is not found");
			}
		} catch (SQLException e) {
			e.printStackTrace();
			throw new AppException("Error: " + e.getMessage(), e.getCause());
		} finally {
			DBConnector.closeResources(conn, ps, rs);
		}

		return emp;
	}

	public Employee addEmployee(Employee emp) throws AppException {

		Connection conn = DBConnector.connect();
		PreparedStatement ps = null;
		ResultSet rs = null;

		try {
			ps = conn.prepareStatement(
					"INSERT INTO Employee (Fname, Lname, Email, Address1, Address2, City, State, Zip, Phone) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
					PreparedStatement.RETURN_GENERATED_KEYS);
			ps.setString(1, emp.getFname());
			ps.setString(2, emp.getLname());
			ps.setString(3, emp.getEmail());
			ps.setString(4, emp.getAddress1());
			ps.setString(5, emp.getAddress2());
			ps.setString(6, emp.getCity());
			ps.setString(7, emp.getState());
			ps.setInt(8, emp.getZip());
			ps.setString(9, emp.getPhone());
			ps.executeUpdate();

			rs = ps.getGeneratedKeys();

			if (rs.next()) {
				emp.setUid(rs.getInt(1));
			}
		} catch (SQLException e) {
			e.printStackTrace();
			throw new AppException("Error: " + e.getMessage(), e.getCause());
		} finally {
			DBConnector.closeResources(conn, ps, rs);
		}

		return emp;
	}

	public Employee updateEmployee(int empId, Employee emp) throws AppException {

		Connection conn = DBConnector.connect();
		PreparedStatement ps = null;
		ResultSet rs = null;

		try {

			ps = conn.prepareStatement(
					"UPDATE Employee SET Fname = ?, Lname = ?, Email = ?, Address1 = ?, Address2 = ?, City = ?, State = ?, Zip = ?, Phone = ? WHERE  UID = ?");
			ps.setString(1, emp.getFname());
			ps.setString(2, emp.getLname());
			ps.setString(3, emp.getEmail());
			ps.setString(4, emp.getAddress1());
			ps.setString(5, emp.getAddress2());
			ps.setString(6, emp.getCity());
			ps.setString(7, emp.getState());
			ps.setInt(8, emp.getZip());
			ps.setString(9, emp.getPhone());
			ps.setInt(10, empId);
			ps.executeUpdate();

		} catch (SQLException e) {
			e.printStackTrace();
			throw new AppException("Error: " + e.getMessage(), e.getCause());
		} finally {
			DBConnector.closeResources(conn, ps, rs);
		}

		return emp;
	}

	public Employee deleteEmployee(int empId) throws AppException {
//		Employee emp = new Employee();

		Connection conn = DBConnector.connect();
		PreparedStatement ps = null;
		ResultSet rs = null;

		try {
			ps = conn.prepareStatement("DELETE FROM Employee WHERE UID=?");
			ps.setInt(1, empId);
			// rs = ps.executeQuery();
			ps.executeUpdate();

			// if (rs.next()) {
			// emp = new Employee();

//			emp.setUid(rs.getInt("UID"));
//			emp.setFname(rs.getString("Fname"));
//			emp.setLname(rs.getString("Lname"));
//			emp.setEmail(rs.getString("Email"));
//			emp.setAddress1(rs.getString("Address1"));
//			emp.setAddress2(rs.getString("Address2"));
//			emp.setCity(rs.getString("City"));
//			emp.setState(rs.getString("State"));
//			emp.setZip(rs.getInt("Zip"));
//			emp.setPhone(rs.getString("Phone"));
			// } else {
			// throw new AppException("Employee with the id = " + empId + " is
			// not found");
			// }
		} catch (SQLException e) {
			e.printStackTrace();
			throw new AppException("Error: " + e.getMessage(), e.getCause());
		} finally {
			DBConnector.closeResources(conn, ps, rs);
		}

		return null;
	}
}
