import React from 'react'
import Avatar from '../Avatar/Avatar'

function UserInf() {
	// 	const deposit_btn = document.getElementById('deposit-btn');
	// 	deposit_btn.addEventListener('click', function(){

	// 	const depositStringToInt = getInputNumb("deposit-amount");

	// 	updateSpanTest("current-deposit", depositStringToInt);
	// 	updateSpanTest("current-balance", depositStringToInt);

	// 	//setting up the input field blank when clicked
	// 	document.getElementById('deposit-amount').value = "";

	//  })
	return (
		<div>
			<div className="w-60">
				<div className="bg-white shadow-xl rounded-lg py-3">
						<Avatar />
						<h3 className="text-center text-xl text-gray-900 font-medium leading-8">Joh Doe</h3>
						<div className="text-center text-gray-400 text-xs font-semibold">
							<p>Web Developer</p>
						</div>
						<div className="bg-purple-500 rounded-xl text-white">
							<div class="flex justify-center transform cursor-pointer">
								Balance
								<div className="w-5 p-0.5 flex items-center ml-1 bg-gray-800 rounded-xl">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
								</svg>
								</div>
							</div>
							<h2>$ <span id="current-deposit">00</span></h2>
							
						</div>
						<div>
							<h4>Balance Amount</h4>
							<input id="deposit-amount" type="text" placeholder="Enter Balance amount" /><br />
							<button id="deposit-btn">Change</button>
						</div>
				</div>
			</div>
		</div>
	)
}

export default UserInf
