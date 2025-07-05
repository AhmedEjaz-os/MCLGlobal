import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, IconButton, MenuItem, Pagination, Select } from "@mui/material";

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "university", label: "University", minWidth: 170 },
  { id: "course", label: "Course", minWidth: 170 },
  { id: "intake", label: "Intake", minWidth: 170 },
  { id: "status", label: "Status", minWidth: 170 },
  { id: "actions", label: "Actions", minWidth: 100 },
];

function createData(name, university, course, intake, status) {
  return { name, university, course, intake, status };
}

const rows = [
  createData(
    "Tom Harry",
    "University of Arizona",
    "MS Computer",
    "June 2025",
    "Active"
  ),
  createData(
    "John Tim",
    "University of East Carolina",
    "BS English",
    "May 2025",
    "Active"
  ),
  createData(
    "John Tim",
    "University of East Carolina",
    "BS English",
    "May 2025",
    "Active"
  ),
  createData(
    "John Tim",
    "University of East Carolina",
    "BS English",
    "May 2025",
    "Active"
  ),
  createData(
    "John Tim",
    "University of East Carolina",
    "BS English",
    "May 2025",
    "Active"
  ),
  createData(
    "Tom Harry",
    "University of Arizona",
    "MS Computer",
    "June 2025",
    "Active"
  ),
  createData(
    "John Tim",
    "University of East Carolina",
    "BS English",
    "May 2025",
    "Active"
  ),
  createData(
    "John Tim",
    "University of East Carolina",
    "BS English",
    "May 2025",
    "Active"
  ),
  createData(
    "John Tim",
    "University of East Carolina",
    "BS English",
    "May 2025",
    "Active"
  ),
  createData(
    "John Tim",
    "University of East Carolina",
    "BS English",
    "May 2025",
    "Active"
  ),
  createData(
    "Tom Harry",
    "University of Arizona",
    "MS Computer",
    "June 2025",
    "Active"
  ),
  createData(
    "John Tim",
    "University of East Carolina",
    "BS English",
    "May 2025",
    "Active"
  ),
  createData(
    "John Tim",
    "University of East Carolina",
    "BS English",
    "May 2025",
    "Active"
  ),
  createData(
    "John Tim",
    "University of East Carolina",
    "BS English",
    "May 2025",
    "Active"
  ),
  createData(
    "John Tim",
    "University of East Carolina",
    "BS English",
    "May 2025",
    "Active"
  ),
  createData(
    "Tom Harry",
    "University of Arizona",
    "MS Computer",
    "June 2025",
    "Active"
  ),
  createData(
    "John Tim",
    "University of East Carolina",
    "BS English",
    "May 2025",
    "Active"
  ),
  createData(
    "John Tim",
    "University of East Carolina",
    "BS English",
    "May 2025",
    "Active"
  ),
  createData(
    "John Tim",
    "University of East Carolina",
    "BS English",
    "May 2025",
    "Active"
  ),
  createData(
    "John Tim",
    "University of East Carolina",
    "BS English",
    "May 2025",
    "Active"
  ),
];

function CourseApplicationTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [order, setOrder] = React.useState("asc"); // 'asc' or 'desc'
  const [orderBy, setOrderBy] = React.useState(""); // which column is sorted
  const [selectedPage, setSelectedPage] = React.useState(1);
  const [lastPage, setLastPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const sortRows = (rows, order, orderBy) => {
    if (orderBy) {
      return rows.sort((a, b) => {
        if (a[orderBy] < b[orderBy]) {
          return order === "asc" ? -1 : 1;
        }
        if (a[orderBy] > b[orderBy]) {
          return order === "asc" ? 1 : -1;
        }
        return 0;
      });
    }
    return rows;
  };

  const sortedRows = sortRows(rows, order, orderBy);

  return (
    <Paper
      sx={{
        width: "auto",
        borderRadius: 2,
        boxShadow: "none",
        overflow: "auto", // Ensure scroll for overflow
        maxWidth: "100%",
      }}
    >
      <TableContainer
        sx={{
          maxHeight: 440,
          backgroundColor: "#DFEDFF",
          boxShadow: "none",
          border: "none",
          overflowX: "auto",
        }}
      >
        <Table
          sx={{
            backgroundColor: "#DFEDFF",
            boxShadow: "none",
          }}
          stickyHeader
          aria-label="normal"
        >
          <TableHead sx={{ boxShadow: "none" }}>
            <TableRow
              sx={{
                backgroundColor: "#033C82", // Dark blue background for header
                color: "#fff", // White text
                borderTopLeftRadius: "7px", // Border-radius on left side
                borderTopRightRadius: "7px", // Border-radius on right side
                boxShadow: "none",
              }}
            >
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    fontSize: "12.2px",
                    fontWeight: "700",
                    color: "#fff", // White text color
                    textAlign: "center",
                    backgroundColor: "#033C82", // Dark blue background
                    cursor: "pointer",
                    borderTopLeftRadius:
                      column.id === "name" ? "7.63px" : "0px",
                    borderTopRightRadius:
                      column.id === "actions" ? "7.63px" : "0px",
                  }}
                  onClick={() => handleRequestSort(column.id)}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    {column.label}
                    {orderBy === column.id ? (
                      order === "asc" ? (
                        <svg
                          width="6"
                          height="9"
                          viewBox="0 0 6 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.720772 2.96144C0.696863 2.90381 0.690582 2.84039 0.702724 2.77919C0.714865 2.71799 0.744884 2.66176 0.788982 2.61763L2.68153 0.725078C2.71083 0.695751 2.74561 0.672486 2.78391 0.656612C2.8222 0.640739 2.86324 0.632568 2.90469 0.632568C2.94615 0.632568 2.98719 0.640739 3.02548 0.656612C3.06378 0.672486 3.09856 0.695751 3.12786 0.725078L5.02041 2.61763C5.06457 2.66174 5.09465 2.71797 5.10684 2.77919C5.11903 2.8404 5.11279 2.90387 5.08889 2.96153C5.065 3.0192 5.02453 3.06848 4.97261 3.10314C4.9207 3.13779 4.85966 3.15626 4.79724 3.15622H1.01215C0.949761 3.1562 0.888781 3.13769 0.836917 3.10302C0.785053 3.06835 0.744634 3.01908 0.720772 2.96144ZM4.79724 6.31046H1.01215C0.949724 6.31041 0.888692 6.32889 0.836775 6.36354C0.784858 6.3982 0.744391 6.44748 0.720496 6.50515C0.696602 6.56281 0.690355 6.62627 0.702547 6.68749C0.714738 6.74871 0.744819 6.80494 0.788982 6.84905L2.68153 8.7416C2.71083 8.77093 2.74561 8.79419 2.78391 8.81007C2.8222 8.82594 2.86324 8.83411 2.90469 8.83411C2.94615 8.83411 2.98719 8.82594 3.02548 8.81007C3.06378 8.79419 3.09856 8.77093 3.12786 8.7416L5.02041 6.84905C5.06457 6.80494 5.09465 6.74871 5.10684 6.68749C5.11903 6.62627 5.11279 6.56281 5.08889 6.50515C5.065 6.44748 5.02453 6.3982 4.97261 6.36354C4.9207 6.32889 4.85966 6.31041 4.79724 6.31046Z"
                            fill="white"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="6"
                          height="9"
                          viewBox="0 0 6 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.720772 2.96144C0.696863 2.90381 0.690582 2.84039 0.702724 2.77919C0.714865 2.71799 0.744884 2.66176 0.788982 2.61763L2.68153 0.725078C2.71083 0.695751 2.74561 0.672486 2.78391 0.656612C2.8222 0.640739 2.86324 0.632568 2.90469 0.632568C2.94615 0.632568 2.98719 0.640739 3.02548 0.656612C3.06378 0.672486 3.09856 0.695751 3.12786 0.725078L5.02041 2.61763C5.06457 2.66174 5.09465 2.71797 5.10684 2.77919C5.11903 2.8404 5.11279 2.90387 5.08889 2.96153C5.065 3.0192 5.02453 3.06848 4.97261 3.10314C4.9207 3.13779 4.85966 3.15626 4.79724 3.15622H1.01215C0.949761 3.1562 0.888781 3.13769 0.836917 3.10302C0.785053 3.06835 0.744634 3.01908 0.720772 2.96144ZM4.79724 6.31046H1.01215C0.949724 6.31041 0.888692 6.32889 0.836775 6.36354C0.784858 6.3982 0.744391 6.44748 0.720496 6.50515C0.696602 6.56281 0.690355 6.62627 0.702547 6.68749C0.714738 6.74871 0.744819 6.80494 0.788982 6.84905L2.68153 8.7416C2.71083 8.77093 2.74561 8.79419 2.78391 8.81007C2.8222 8.82594 2.86324 8.83411 2.90469 8.83411C2.94615 8.83411 2.98719 8.82594 3.02548 8.81007C3.06378 8.79419 3.09856 8.77093 3.12786 8.7416L5.02041 6.84905C5.06457 6.80494 5.09465 6.74871 5.10684 6.68749C5.11903 6.62627 5.11279 6.56281 5.08889 6.50515C5.065 6.44748 5.02453 6.3982 4.97261 6.36354C4.9207 6.32889 4.85966 6.31041 4.79724 6.31046Z"
                            fill="white"
                          />
                        </svg>
                      )
                    ) : null}
                  </Box>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody sx={{ backgroundColor: "#DFEDFF", boxShadow: "none" }}>
            {sortedRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow
                    sx={{ backgroundColor: "#DFEDFF", boxShadow: "none" }}
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={index}
                  >
                    <TableCell
                      sx={{
                        backgroundColor: "#DFEDFF",
                        boxShadow: "none",
                        textAlign: "center",
                      }}
                    >
                      {row.name}
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor: "#DFEDFF",
                        boxShadow: "none",
                        textAlign: "center",
                      }}
                    >
                      {row.university}
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor: "#DFEDFF",
                        boxShadow: "none",
                        textAlign: "center",
                      }}
                    >
                      {row.course}
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor: "#DFEDFF",
                        boxShadow: "none",
                        textAlign: "center",
                      }}
                    >
                      {row.intake}
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor: "#DFEDFF",
                        boxShadow: "none",
                        textAlign: "center",
                      }}
                    >
                      <Box
                        sx={{
                          padding: "3.87px 7.74px",
                          backgroundColor:
                            row.status === "Active"
                              ? "#28C76F29"
                              : row.status === "Rejected"
                              ? "#B3194229"
                              : "#FF5F1529",
                          color:
                            row.status === "Active"
                              ? "#28C76F"
                              : row.status === "Rejected"
                              ? "#B31942"
                              : "#FF5F15",
                          textAlign: "center",
                          borderRadius: "3.1px",
                          width: "57.19px",
                          height: "18.74px",
                          margin: "0 auto",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {row.status}
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor: "#DFEDFF",
                        boxShadow: "none",
                        textAlign: "center",
                      }}
                    >
                      <IconButton color="primary" size="small">
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.05427 1.54236H2.24031C1.53818 1.54236 0.968994 2.11155 0.968994 2.81367V10.4416C0.968994 11.1437 1.53818 11.7129 2.24031 11.7129H9.86822C10.5703 11.7129 11.1395 11.1437 11.1395 10.4416V6.62763M4.14729 8.5346V6.94546L9.7093 1.38344C10.1481 0.944611 10.8596 0.94461 11.2985 1.38344V1.38344C11.7373 1.82227 11.7373 2.53376 11.2985 2.97259L8.27907 5.99197L5.73644 8.5346H4.14729Z"
                            stroke="#28C76F"
                            stroke-width="0.889922"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#DFEDFF",
          borderBottomLeftRadius: "7px",
          borderBottomRightRadius: "7px",
          padding: "10px 20px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <span
            style={{ fontSize: "14px", color: "#4A4A4A", marginRight: "10px" }}
          >
            Showing
            <Select
              value={rowsPerPage}
              onChange={(e) => setRowsPerPage(e.target.value)}
              sx={{
                marginLeft: "10px",
                ".MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            >
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={Math.floor(rows.length / 2)}>
                {Math.floor(rows.length / 2)}
              </MenuItem>
              <MenuItem value={rows.length}>{rows.length}</MenuItem>
            </Select>{" "}
            of {rows.length}
          </span>
        </div>
        <Pagination
          count={lastPage}
          page={selectedPage} // Set the current page
          onChange={(e, pageNumber) => setSelectedPage(pageNumber)}
          variant="outlined"
          shape="rounded"
          sx={{
            "& .MuiPaginationItem-root": {
              fontSize: "14px",
              color: "#4A4A4A",
              backgroundColor: "#FFFFFF",
              border: "transparent",
              height: "32px",
              borderRadius: "4px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "&.Mui-selected": {
                backgroundColor: "#033C82",
                color: "#FFFFFF",
              },
              "&:hover": {
                backgroundColor: "#F1F1F1",
              },
            },
          }}
        />
      </Box>
    </Paper>
  );
}

export default CourseApplicationTable;
