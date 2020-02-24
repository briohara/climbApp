import React from "react";
import MaterialTable from "material-table";

const Table = props => {
  const {
    columns,
    tableTitle,
    getData,
    createData,
    updateData,
    deleteData,
    additionalFields
  } = props;

  const jwt = localStorage.getItem("JWT");

  return (
    <MaterialTable
      title={tableTitle}
      columns={columns}
      data={query =>
        new Promise((resolve, reject) => {
          getData(jwt).then(res => {
            resolve({
              data: !res.data ? [] : res.data,
              page: 0,
              totalCount: !res.data ? 0 : res.data.length
            });
          });
        })
      }
      editable={{
        isDeletable: rowData =>
          rowData.canDelete === true || rowData.canDelete === undefined,
        onRowAdd: newData =>
          new Promise((resolve, reject) => {
            if (additionalFields && additionalFields.length > 0) {
              additionalFields.forEach(f => {
                newData[f.name] = f.value;
              });
            }

            createData(jwt, newData)
              .then(() => {
                resolve();
              })
              .catch(err => {
                console.error(err);
              });
          }),

        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            newData._id = oldData._id;
            newData.userId = oldData.userId;
            updateData(jwt, newData)
              .then(() => {
                console.log("successful");
                resolve();
              })
              .catch(err => {
                console.error(err);
              });
          }),

        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            deleteData(jwt, oldData._id)
              .then(() => {
                console.log("successful");
                resolve();
              })
              .catch(err => {
                console.error(err);
              });
          })
      }}
      options={{
        search: false,
        paging: false,
        actionsColumnIndex: -1
      }}
    />
  );
};

export default Table;
