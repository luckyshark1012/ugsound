import React from 'react';

import { useNavigate } from 'react-router-dom'


import './buy_button.css';

const stats = [
  { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
  { id: 2, name: 'Assets under holding', value: '$119 trillion' },
  { id: 3, name: 'New users annually', value: '46,000' },
]

export default function SiteStateComponent() {
  const navigate = useNavigate();

  return (
    <div className="bg-white pt-8 pb-0 sm:pt-8 sm:pb-0">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="flex justify-around mx-auto max-w-7xl px-6 lg:px-8 my-8">
        <button className="button-64" role="button" onClick={() => navigate('/music_store')}><span className="text">Shop Now</span></button>
        <button className="button-64" role="button" onClick={() => navigate('/top_songs')}><span className="text">Listen Now</span></button>
      </div>
    </div>
  )
}
