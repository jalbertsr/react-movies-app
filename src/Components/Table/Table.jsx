import React, { Component } from 'react'
import { Table, Col, Row } from 'antd'

export default class ListTable extends Component {
  constructor () {
    super()
    this.state = {
    }
  }

  render () {
    const columns = [{
      title: 'Title',
      dataIndex: 'title',
      filters: [{
        text: 'Joe',
        value: 'Joe'
      }, {
        text: 'Jim',
        value: 'Jim'
      }, {
        text: 'Black',
        value: 'Black'
      }],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length
    }, {
      title: 'Rate',
      dataIndex: 'rate',
      sorter: (a, b) => a.age - b.age
    }, {
      title: 'Address',
      dataIndex: 'address',
      filters: [{
        text: 'London',
        value: 'London',
      }, {
        text: 'New York',
        value: 'New York',
      }],
      filterMultiple: false,
      onFilter: (value, record) => record.address.indexOf(value) === 0,
      sorter: (a, b) => a.address.length - b.address.length
    }]
    
    const data = [{
      key: '1',
      title: 'John Brown',
      rate: 32,
      address: 'New York No. 1 Lake Park'
    }, {
      key: '2',
      title: 'Jim Green',
      rate: 42,
      address: 'London No. 1 Lake Park'
    }, {
      key: '3',
      title: 'Joe Black',
      rate: 32,
      address: 'Sidney No. 1 Lake Park'
    }, {
      key: '4',
      title: 'Jim Red',
      rate: 32,
      address: 'London No. 2 Lake Park'
    }]
    
    function onChange (pagination, filters, sorter) {
      console.log('params', pagination, filters, sorter)
    }

    return (
      <Row>
        <Col span={13} offset={5}>
          <Table columns={columns} dataSource={data} onChange={onChange} />
        </Col>
      </Row>
    )
  }
}
