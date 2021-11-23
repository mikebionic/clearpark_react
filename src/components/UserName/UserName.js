import React from 'react'

function UserName({name, description, balance}) {
	return (
		<div>
			<div className="p-2">
				<h3 className="text-center text-xl text-gray-900 font-medium leading-8">{name}</h3>
				<div className="text-center text-gray-400 text-xs font-semibold">
						<p>{description}</p>
				</div>
				<table className="justify-center flex text-xs my-3">
					<tbody>
						<tr>
							<td className="px-2 py-2 text-gray-500 font-semibold">Balance</td>
							<td className="px-2 py-2">{balance}</td>
						</tr>
					</tbody>
				</table>

				<div className="text-center my-3">
					<a className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#">View Profile</a>
				</div>
        </div>
		</div>
	)
}

export default UserName
