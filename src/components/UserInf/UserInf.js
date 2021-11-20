import React from 'react'
import Avatar from '../Avatar/Avatar'

function UserInf() {
	return (
		<div>
			<div className="w-60">
				<div className="bg-white shadow-xl rounded-lg py-3">
						<Avatar imageUrl={'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'} 
						name={"AvatarName"} />
						<h3 className="text-center text-xl text-gray-900 font-medium leading-8">Joh Doe</h3>
						<div className="text-center text-gray-400 text-xs font-semibold">
							<p>Web Developer</p>
						</div>
						<table className="text-xs my-3">
							<tbody>
								<tr>
									<td className="px-2 py-2 text-gray-500 font-semibold">
										<div class="bg-gray-500 pl-3 pr-3 pt-3 pb-3 rounded text-white fill-current shadow">
											<i class="fas fa-envelope inline-block w-5">Balance</i>
										</div>
									</td>
									<td className="px-2 py-2">135%</td>
								</tr>
							</tbody>
						</table>
				</div>
			</div>
		</div>
	)
}

export default UserInf
