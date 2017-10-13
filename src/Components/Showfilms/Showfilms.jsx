import React, { Component } from 'react'
import CardTemplate from '../CardTemplate/CardTemplate'
import Api from '../../Services/dataService.js'
import { Row, Col } from 'antd'
import uuidv4 from 'uuid/v4'
import './Showfilms.css'

export default class Showfilms extends Component {
  constructor (props) {
    super(props)
    this.state = {
      results: []
    }
  }

  componentWillReceiveProps (nextProps) {
    Api.getMovies(this.props.category)
    .then(data => {
      this.setState({
        results: data.results
      })
      console.log(this.state)
    })
  }

  componentDidMount () {
    Api.getMovies(this.props.category)
    .then(data => {
      this.setState({
        results: data.results
      })
      console.log(this.state)
    })
  }

  render () {
    return (
      <div>
        <Row>
          <Col span={12} offset={6}>
            <h1 className='title'>{ this.props.currentPage } </h1>
          </Col>
        </Row>
        <Row gutter={24}>
          {
            this.state.results.map(film => {
              return (
                <Col className='gutter-row' span={5} offset={1}>
                  <CardTemplate
                    key={uuidv4()}
                    name={film.title}
                    date={film.release_date}
                    vote={film.vote_average}
                    image={film.poster_path}
                    id={film.id}
                  />
                </Col>
              )
            })
          }
        </Row>
      </div>
    )
  }
}
