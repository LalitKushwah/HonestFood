'use strict'

module.exports = {
	responseObj: {
		'status': 500,
		'message': 'Internal Server Error',
		'body': {}
	},
	errorFileNotFound: {
		'status': 404,
		'message': 'PDF file not found',
		'body': {}
	},
	databaseStatus: {
		ENTITY_CREATED: 'Entity created',
		ENTITY_MODIFIED: 'Entity modified',
		ENTITY_DELETED: 'Entity deleted',
		ENTITY_FETCHED: 'Entity fetched',
		ENTITY_NOT_FOUND: 'Entity not found',
		DATABASE_ERROR: 'Database error',
		DATABASE_CONNECTION_ESTABLISHED: 'Database Connection Established',
		ERP_DATABASE_CONNECTION_NOT_ESTABLISHED: 'ERP Database Connection Error',
		WRITE_IN_ENTITY: 'Write in entity successfully'
	},
	serviceStatus: {
		USER_CREATED_SUCCESSFULLY: 'User created successfully',
		PAYMENT_CREATED_SUCCESSFULLY: 'Payment created successfully',
		USER_MODIFIED_SUCCESSFULLY: 'User modified successfully',
		USER_FETCHED_SUCCESSFULLY: 'User fetched successfully',
		USER_LIST_FETCHED_SUCCESSFULLY: 'User list fetched successfully',
		USER_AUTHENTICATED_SUCCESSFULLY: 'User authenticated successfully',
		USER_LOGIN_ID_ALREADY_EXIST: 'UserLoginId already exist',
		CATEGORY_CREATED_SUCCESSFULLY: 'Category created successfully',
		CATEGORY_FETCHED_SUCCESSFULLY: 'Category fetched successfully',
		PRODUCT_CREATED_SUCCESSFULLY: 'Product created successfully',
		PRODUCT_MODIFIED_SUCCESSFULLY: 'Product modified successfully',
		PRODUCT_FETCHED_SUCCESSFULLY: 'Product fetched successfully',
		PRODUCT_UPDATED_SUCCESSFULLY: 'Product updated successfully',
		DUPLICATE_PRODUCT_ENTERED: 'Oops! Entered Product Code or ProductSys Code already exist!  Please enter a different one',
		ORDER_CREATED_SUCCESSFULLY: 'Order created successfully',
		ORDER_MODIFIED_SUCCESSFULLY: 'Order modified successfully',
		ORDER_DELETED_SUCCESSFULLY: 'Order Deleted Successfully',
		ORDER_FETCHED_SUCCESSFULLY: 'Order fetched successfully',
		DATA_NOT_FOUND: 'Data not found',
		DATA_INVALID: 'Data invalid',
		INTERNAL_SERVER_ERROR: 'Internal server error'
	},
	controllerStatus: {
		BAD_REQUEST: 'Required fields missing',
		ACCESS_NOT_ALLOWED: 'Access not allowed',
		TOKEN_MISSING: 'Token missing from header',
		INVALID_TOKEN: 'Invalid Token'
	},
	serviceHelperStatus: {
		OPERATION_SUCCESSFULLY_EXECUTED: 'Operation executed successfully'
	},
	databaseCredentials: {
		'user': 'MSAPP',
		'password': 'salesapp',
		'connectString': '192.168.50.31:1521',
		'databaseName': 'ORCL'
	}
}
