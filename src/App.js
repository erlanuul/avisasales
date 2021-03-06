import logo from './assets/logo.svg'
// import checkerOff from './assets/checker-off.svg'
// import checkerOn from './assets/checker-on.svg'
import './App.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Tickets from './tickets'

function App() {
	const [checked, setChecked] = useState([false, false, false, false, false])

	function check(item) {
		const trueValue = [...checked]
		trueValue[item] = !trueValue[item]
		let positiveItemCount = 0
		for (let i = 1; i <= 4; i++) {
			if (trueValue[i] === true) {
				positiveItemCount++
			}
		}
		positiveItemCount === 4 ? (trueValue[0] = true) : (trueValue[0] = false)
		setChecked(trueValue)
	}

	function allChecked(props) {
		if (props === false) {
			const arr = checked.map(item => {
				if (item === false) {
					item = true
				}
				return item
			})

			setChecked(arr)
		} else if (props === true) {
			const arr = checked.map(item => {
				if (item === true) {
					item = false
				}
				return item
			})
			setChecked(arr)
		}
	}

	const [searchId, setSearchId] = useState()

	// useEffect(() => {
	// 	axios.get(`https://front-test.beta.aviasales.ru/search`).then(resp => {
	// 		setSearchId(resp.data.searchId)
	// 	})
	// }, [])

	// useEffect(() => {
	// 	if (searchId) {
	// 		async function subscribe() {
	// 			let response
	// 			await axios
	// 				.get(
	// 					`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`
	// 				)
	// 				.then(resp => {
	// 					response = resp.data
	// 				})
	// 				.catch(() => {
	// 					subscribe()
	// 				})
	// 			if (response.stop === false) {
	// 				subscribe()
	// 			} else if (response.stop === true) {
	// 				console.log(response)
	// 			}
	// 		}
	// 		subscribe()
	// 	}
	// }, [searchId])

	return (
		<div className='App all-center'>
			<div className='app-wrapper all-center'>
				<div className='header all-center'>
					<img src={logo} alt='logo' />
				</div>
				<div className='body align-flex-start'>
					<div className='sideBar align-flex-start'>
						<p className='default-text-style'>???????????????????? ??????????????????</p>
						<label className='checkItems'>
							<input
								onClick={() => allChecked(checked[0])}
								type='checkbox'
								checked={checked[0]}
							/>
							<span className='default-text-style'>??????</span>
						</label>
						<label className='checkItems'>
							<input
								onClick={() => check(1)}
								type='checkbox'
								checked={checked[1]}
							/>
							<span className='default-text-style'>?????? ??????????????????</span>
						</label>
						<label className='checkItems'>
							<input
								onClick={() => check(2)}
								type='checkbox'
								checked={checked[2]}
							/>
							<span className='default-text-style'>1 ??????????????????</span>
						</label>
						<label className='checkItems'>
							<input
								onClick={() => check(3)}
								type='checkbox'
								checked={checked[3]}
							/>
							<span className='default-text-style'>2 ??????????????????</span>
						</label>
						<label className='checkItems'>
							<input
								onClick={() => check(4)}
								type='checkbox'
								checked={checked[4]}
							/>
							<span className='default-text-style'>3 ??????????????????</span>
						</label>
					</div>
					<div className='ticketOutBar all-center'>
						<div className='filterBar all-center'>
							<div className='filterButton default-text-style all-center filterLeftButton'>
								?????????? ??????????????
							</div>
							<div className='filterButton default-text-style all-center'>
								?????????? ??????????????
							</div>
							<div className='filterButton default-text-style all-center filterRightButton'>
								??????????????????????
							</div>
						</div>
						<div className='ticketBar all-center'>
							<Tickets />
							<Tickets />
							<Tickets />
							<Tickets />
							<Tickets />
							<div className='showMoreButton default-text-style all-center'>
								???????????????? ?????? 5 ??????????????!
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
