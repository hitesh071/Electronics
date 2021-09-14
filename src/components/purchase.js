import React, { useState, useEffect } from 'react';
import Devices from '../../src/Data/apiData';
import './purchase.css';
import DataTable from 'react-data-table-component';
console.log(Devices);
const columns = [
  {
    name: 'S.No',
    selector: 'id',
    center: true,
    sortable: false
  },
  {
    name: 'Name',
    selector: 'name'
  },
  {
    name: 'Code',
    selector: 'code'
  },
  {
    name: 'Availability',
    selector: 'availability'
  },
  {
    name: 'Need To repair',
    selector: 'repair'
  },
  {
    name: 'Durability',
    selector: 'durability'
  },
  {
    name: 'Mileage',
    selector: 'mileage'
  }
];
const customStyles = {
  headCells: {
    style: {
      'font-family': 'firaSans-semibold',
      'font-size': '15px',
      'border-bottom': '1px solid Black',
      'border-top': '1px solid Black'
    }
  },
  cells: {
    style: {
      'font-family': 'firaSans-regular',
      'font-size': '14px',
      'text-align': 'center'
    }
  },
  header: {
    style: {
      'font-family': 'firaSans-semibold',
      color: '#737373'
    }
  }
};

export default function Purchase() {
  const [tableData, setTableData] = useState();
  const [searchData, setsearchData] = useState();
  const [searchText, setSearchText] = useState();
  useEffect(() => {
    if (Devices && Devices.data) {
      var electronicsList = [];

      Devices.data.map((record, index) => {
        let option = {
          id: index + 1,
          name: record.name,
          code: record.code,
          availability: record.availability === true ? 'True' : 'False',
          repair: record.needing_repair === true ? 'True' : 'False',
          durability: record.durability,
          mileage: record.mileage
        };
        electronicsList.push(option);
      });
      setTableData(electronicsList);
    }
  }, [Devices]);
  // const search = () => {
  //   if (Devices && Devices.data && searchText) {
  //     console.log(searchText);
  //     var electronicsList = [];
  //     var electronicsList = [];
  //     // var searchResult = [];

  //     const searchResult = Devices.data.filter(record =>
  //       record.name.includes(searchText)
  //     );

  //     console.log(searchResult);
  //     searchResult.map((record, index) => {
  //       let option = {
  //         id: index + 1,
  //         name: record.name,
  //         code: record.code,
  //         availability: record.availability === true ? 'True' : 'False',
  //         repair: record.needing_repair === true ? 'True' : 'False',
  //         durability: record.durability,
  //         mileage: record.mileage
  //       };
  //       electronicsList.push(option);
  //     });
  //     setsearchData(electronicsList);
  //   }
  // };
  const handleChange = e => {
    setSearchText(e.target.value);
  };
  // console.log(searchText);
  return (
    <div>
      <div style={{ width: '335px' }}>
        <input
          type="text"
          name="search"
          value={searchText}
          onChange={handleChange}
          placeholder="Search"
        />
      </div>

      <DataTable
        title="Avaialable"
        columns={columns}
        data={tableData} // add for checkbox selection
        className="rdt_TableHead"
        responsive="true"
        striped="true"
        highlightOnHover="true"
        pagination="true"
        customStyles={customStyles}
      />
    </div>
  );
}
