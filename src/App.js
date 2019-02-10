import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactTable from "react-table";
// import axios from 'axios'

class App extends Component {
  render (){
    // url = ''
    // axios.get(url)
    //   .then(response => displayData(response))
    const d = {
      "_id": {
        "$oid": "5c609b482df4a368873b46f1"
      },
      "timestamp": "1549835080484",
      "nodes": [
        {
          "id": "123",
          "application_info": {
            "timestamp": "1549832342646",
            "num_requests": "13241",
            "num_savedBytes": "65424",
            "num_keys_saved": "1",
            "elements_cached": "13238",
            "time_interval": "5000"
          },
          "machine_info": {
            "timestamp": "1549566653000",
            "cpu": {
              "usage": "3",
              "idle": "92.1"
            },
            "memory": {
              "total": "12456540",
              "used": "4268800",
              "free": "8187740",
              "buffers": "360536"
            },
            "disk_space": {
              "used": "448920",
              "available": "9346000"
            },
            "load": {
              "average_1_min": "0.42",
              "average_5_min": "0.46",
              "average_15_min": "0.45"
            }
          }
        },
        {
          "id": "13",
          "application_info": {
            "timestamp": "1549832342646",
            "num_requests": "312",
            "num_savedBytes": "65424",
            "num_keys_saved": "1",
            "elements_cached": "312",
            "time_interval": "5013300"
          },
          "machine_info": {
            "timestamp": "12313",
            "cpu": {
              "usage": "3",
              "idle": "92.5"
            },
            "memory": {
              "total": "52342",
              "used": "4268800",
              "free": "8187740",
              "buffers": "360536"
            },
            "disk_space": {
              "used": "448920",
              "available": "9346000"
            },
            "load": {
              "average_1_min": "0.42",
              "average_5_min": "0.46",
              "average_15_min": "0.45"
            }
          }
        }
      ]
    }
    const data = d.nodes
    const columns = [{
      Header: 'ID',
      accessor: 'id' // String-based value accessors!
    }, {
      Header: 'Num Requests',
      accessor: 'application_info.num_requests',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    },{
      Header: 'Num Saved Bytes',
      accessor: 'application_info.num_savedbytes',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    },{
      Header: 'Num Keys Saved',
      accessor: 'application_info.num_keys_saved',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    },{
      Header: 'Elements Cached',
      accessor: 'application_info.elements_cached',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    },{
      Header: 'CPU Usage',
      accessor: 'machine_info.cpu.usage',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    },{
      Header: 'CPU Idle',
      accessor: 'machine_info.cpu.idle',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    },{
      Header: 'Total Memory',
      accessor: 'machine_info.memory.total',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    },{
      Header: 'Free Memory',
      accessor: 'machine_info.memory.free',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    },{
      Header: 'Buffer Memory',
      accessor: 'machine_info.memory.buffers',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    },{
      Header: 'Disk Space Used',
      accessor: 'machine_info.disk_space.used',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    },{
      Header: 'Disk Space Available',
      accessor: 'machine_info.disk_space.available',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    },{
      Header: 'Avg 1 Min Load',
      accessor: 'machine_info.load.average_1_min',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    },{
      Header: 'Avg 5 Min Load',
      accessor: 'machine_info.load.average_5_min',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    },{
      Header: 'Avg 15 Min Load',
      accessor: 'machine_info.load.average_15_min',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    }]
   
    return <ReactTable
      data={data}
      columns={columns}
    />
    }
}


export default App;
