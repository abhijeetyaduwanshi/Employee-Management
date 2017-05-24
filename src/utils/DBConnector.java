package utils;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class DBConnector {

	static {
		try {
			Class.forName("org.sqlite.JDBC");
			System.out.println("Driver loaded");
		} catch (ClassNotFoundException e) {
			System.err.println("Error loading driver. " + e.getMessage());
			e.printStackTrace();
		}
	}

	public static Connection connect() {
		Connection conn = null;

		try {
			conn = DriverManager.getConnection(
					"jdbc:sqlite:C:\\Users\\ayaduwanshi\\workspaceEmpExt\\Employee\\database\\empDB.sqlite");
			System.out.println("Connection successfull");
		} catch (SQLException e) {
			System.err.println("Connection error: " + e.getMessage());
			e.printStackTrace();
		}

		return conn;
	}

	public static void closeResources(Connection conn, PreparedStatement ps, ResultSet rs) {

		try {
			if (conn != null) {
				conn.close();
			}
			if (ps != null) {
				ps.close();
			}
			if (rs != null) {
				rs.close();
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	// public static void main(String[] args) {
	// DBConnector.connect();
	// }
}
