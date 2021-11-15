import React from 'react';
import Nav from '../components/Navbar/Navbar';
import Table from '../components/Table/Table'
function UserTable() {
	return (
		<div>
			<Nav />
			<div className="w-full">
				<Table />
			</div>
		</div>
	)
}

export default UserTable
