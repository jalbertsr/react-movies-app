import React from 'react'
import { Card } from 'antd'

const CardTamplate = ({name, date, vote, image, id}) => (
  <a href={`/movie/${id}`}>
    <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
      <div className='custom-image'>
        <img alt='example' width='100%' src={`https://image.tmdb.org/t/p/w500${image}`} />
      </div>
      <div className='custom-card'>
        <h3>{name}</h3>
        <p>{`Date: ${date} || Votes: ${vote}`}</p>
      </div>
    </Card>
  </a>
)

export default CardTamplate
