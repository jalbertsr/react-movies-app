import React, { Component } from 'react'
import { Table, Col, Row } from 'antd'
import uuidv4 from 'uuid/v4'
import Api from '../../Services/dataService'
import Utils from '../../Services/utilsService'

export default class ListTable extends Component {
  constructor () {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount () {
    Api.getMostVoted()
        .then(info => {
          this.setState({
            data: info.results.map(movie => ({
              key: uuidv4(),
              title: movie.title,
              popularity: movie.popularity,
              genres: movie.genre_ids.reduce((acc, id) => (acc += Utils.getGenres(id) + ' '), '')
            }))
          })
        })
  }

  render () {
    const columns = [{
      title: 'Title',
      dataIndex: 'title',
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.title.length - b.title.length
    }, {
      title: 'Popularity',
      dataIndex: 'popularity',
      sorter: (a, b) => b.popularity - a.popularity
    }, {
      title: 'Genres',
      dataIndex: 'genres',
      filters: Utils.getFilter(),
      filterMultiple: true,
      onFilter: (value, record) => record.genres.indexOf(value) === 0,
      sorter: (a, b) => a.genres.length - b.genres.length
    }]

    return (
      <Row>
        <Col span={13} offset={5}>
          <Table columns={columns} dataSource={this.state.data} />
        </Col>
      </Row>
    )
  }
}
