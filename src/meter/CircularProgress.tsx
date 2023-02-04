import React from 'react';
import Arc from './Arc'
import Needle from './Needle'
import Progress from './Progress'
import Speedometer from './Speedometer'

const Circular = () => {
  // const center = 250 / 2
  return (
    <div className="bg-white m-4 p-4 rounded-2xl">
    <Speedometer
      value={70}
      max={100}
      angle={300}
      lineCap="butt"
      accentColor="#779ed0"
    >
      <Needle baseOffset={0} circleRadius={10} color="#012e50" colorStroke="red" offset={15} />
      <Arc arcWidth={20} color='#779ed0' />
      <Progress arcWidth={10} />
    </Speedometer>
    </div>
  )
}

export default Circular;