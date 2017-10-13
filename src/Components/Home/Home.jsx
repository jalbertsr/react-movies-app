import React from 'react'
import { Input, Col, Row } from 'antd'
import './Home.css'

const Home = () => (
  <Row>
    <Col span={12} offset={6}>
      <Input className='input' placeholder='Search a film...' />
    </Col>
  </Row>
)

export default Home
