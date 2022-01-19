import React from 'react'
import s7_logo from './assets/s7-logo.svg'
import './tickets.css'

export default function Tickets() {
	return (
		<div className='ticketBox all-center'>
			<div className='ticketHeader align-center'>
				<h2 className='default-text-style'>13 400 Р</h2>
				<img src={s7_logo} alt='logo' />
			</div>
			<div className='ticketInfo align-center'>
				<div className='ticketRoute ticketInfoPropsBox'>
					<p className='ticketInfoTitle default-text-style align-center'>
						MOW - HTK
					</p>
					<p className='ticketInfoItem default-text-style align-center'>
						10:45 - 08:00
					</p>
				</div>
				<div className='ticketLength ticketInfoPropsBox'>
					<p className='ticketInfoTitle default-text-style align-center'>
						В ПУТИ
					</p>
					<p className='ticketInfoItem default-text-style align-center'>
						21ч 15м
					</p>
				</div>
				<div className='ticketStops ticketInfoPropsBox'>
					<p className='ticketInfoTitle default-text-style align-center'>
						2 ПЕРЕСАДКИ
					</p>
					<p className='ticketInfoItem default-text-style align-center'>
						HKG, JNB
					</p>
				</div>
			</div>
			<div className='ticketInfo align-center'>
				<div className='ticketRoute ticketInfoPropsBox'>
					<p className='ticketInfoTitle default-text-style align-center'>
						MOW - HTK
					</p>
					<p className='ticketInfoItem default-text-style align-center'>
						11:20 - 00:50
					</p>
				</div>
				<div className='ticketLength ticketInfoPropsBox'>
					<p className='ticketInfoTitle default-text-style align-center'>
						В ПУТИ
					</p>
					<p className='ticketInfoItem default-text-style align-center'>
						13ч 30м
					</p>
				</div>
				<div className='ticketStops ticketInfoPropsBox'>
					<p className='ticketInfoTitle default-text-style align-center'>
						1 ПЕРЕСАДКА
					</p>
					<p className='ticketInfoItem default-text-style align-center'>HKG</p>
				</div>
			</div>
		</div>
	)
}
