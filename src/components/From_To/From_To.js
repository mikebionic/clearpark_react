import React from 'react'

function From_To() {
	return (
		<div>
			<div className="w-full flex justify-center items-center">
				<div className="container flex flex-col gap-1 mx-5">
						<div className="bg-gray-100 rounded-lg w-full h-auto mt-2 flex flex-row justify-between divide-x divide-solid divide-gray-400">
								<div className="relative flex-1 flex flex-col px-4">
										<label className="text-gray-800 text-base font-semibold tracking-wider">From</label>
										<label className="text-green-800 text-2xl font-bold">152</label>
								</div>
								<div className="relative flex-1 flex flex-col px-4">
										<label className="text-gray-800 text-base font-semibold tracking-wider">To</label>
										<label className="text-green-800 text-2xl font-bold">564</label>
								</div>
						</div>
				</div>
		</div>
		</div>
	)
}

export default From_To
