import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Style from "./HTSTTable.module.css";

export default function HTSTable() {
  const [searchText, setSearchText] = useState("");
  const [activePage, setActivePage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [records, setRecords] = useState(
    [
      {
        id: 1,
        cell1: "Table cell",
        cell2: "Table cell",
        cell3: "Table cell",
        cell4: "Table cell",
        cell5: "Table cell",
      },
      {
        id: 2,
        cell1: "Table cell",
        cell2: "Table cell",
        cell3: "Table cell",
        cell4: "Table cell",
        cell5: "Table cell",
      },
      {
        id: 3,
        cell1: "Table cell",
        cell2: "Table cell",
        cell3: "Table cell",
        cell4: "Table cell",
        cell5: "Table cell",
      },
      {
        id: 4,
        cell1: "Table cell",
        cell2: "Table cell",
        cell3: "Table cell",
        cell4: "Table cell",
        cell5: "Table cell",
      },
      {
        id: 5,
        cell1: "Table cell",
        cell2: "Table cell",
        cell3: "Table cell",
        cell4: "Table cell",
        cell5: "Table cell",
      },
      {
        id: 6,
        cell1: "Table cell",
        cell2: "Table cell",
        cell3: "Table cell",
        cell4: "Table cell",
        cell5: "Table cell",
      },
      {
        id: 1,
        cell1: "Table cell",
        cell2: "Table cell",
        cell3: "Table cell",
        cell4: "Table cell",
        cell5: "Table cell",
      },
      {
        id: 2,
        cell1: "Table cell",
        cell2: "Table cell",
        cell3: "Table cell",
        cell4: "Table cell",
        cell5: "Table cell",
      },
      {
        id: 3,
        cell1: "Table cell",
        cell2: "Table cell",
        cell3: "Table cell",
        cell4: "Table cell",
        cell5: "Table cell",
      },
      {
        id: 4,
        cell1: "Table cell",
        cell2: "Table cell",
        cell3: "Table cell",
        cell4: "Table cell",
        cell5: "Table cell",
      },
      {
        id: 5,
        cell1: "Table cell",
        cell2: "Table cell",
        cell3: "Table cell",
        cell4: "Table cell",
        cell5: "Table cell",
      },
      {
        id: 6,
        cell1: "Table cell",
        cell2: "Table cell",
        cell3: "Table cell",
        cell4: "Table cell",
        cell5: "Table cell",
      },
      {
        id: 1,
        cell1: "Table cell",
        cell2: "Table cell",
        cell3: "Table cell",
        cell4: "Table cell",
        cell5: "Table cell",
      },
      {
        id: 2,
        cell1: "Table cell",
        cell2: "Table cell",
        cell3: "Table cell",
        cell4: "Table cell",
        cell5: "Table cell",
      },
      {
        id: 3,
        cell1: "Table cell",
        cell2: "Table cell",
        cell3: "Table cell",
        cell4: "Table cell",
        cell5: "Table cell",
      },
      {
        id: 4,
        cell1: "Table cell",
        cell2: "Table cell",
        cell3: "Table cell",
        cell4: "Table cell",
        cell5: "Table cell",
      },
      {
        id: 5,
        cell1: "Table cell",
        cell2: "Table cell",
        cell3: "Table cell",
        cell4: "Table cell",
        cell5: "Table cell",
      },
      {
        id: 6,
        cell1: "Table cell",
        cell2: "Table cell",
        cell3: "Table cell",
        cell4: "Table cell",
        cell5: "Table cell",
      },
      {
        id: 1,
        cell1: "Table cell",
        cell2: "Table cell",
        cell3: "Table cell",
        cell4: "Table cell",
        cell5: "Table cell",
      },
      {
        id: 2,
        cell1: "Table cell",
        cell2: "Table cell",
        cell3: "Table cell",
        cell4: "Table cell",
        cell5: "Table cell",
      },
      {
        id: 3,
        cell1: "Table cell",
        cell2: "Table cell",
        cell3: "Table cell",
        cell4: "Table cell",
        cell5: "Table cell",
      },
      {
        id: 4,
        cell1: "Table cell",
        cell2: "Table cell",
        cell3: "Table cell",
        cell4: "Table cell",
        cell5: "Table cell",
      },
      {
        id: 5,
        cell1: "Table cell",
        cell2: "Table cell",
        cell3: "Table cell",
        cell4: "Table cell",
        cell5: "Table cell",
      },
      {
        id: 6,
        cell1: "Table cell",
        cell2: "Table cell",
        cell3: "Table cell",
        cell4: "Table cell",
        cell5: "Table cell",
      },
      {
        id: 1,
        cell1: "Table cell",
        cell2: "Table cell",
        cell3: "Table cell",
        cell4: "Table cell",
        cell5: "Table cell",
      },
      {
        id: 2,
        cell1: "Table cell",
        cell2: "Table cell",
        cell3: "Table cell",
        cell4: "Table cell",
        cell5: "Table cell",
      },
      {
        id: 3,
        cell1: "Table cell",
        cell2: "Table cell",
        cell3: "Table cell",
        cell4: "Table cell",
        cell5: "Table cell",
      },
      {
        id: 4,
        cell1: "Table cell",
        cell2: "Table cell",
        cell3: "Table cell",
        cell4: "Table cell",
        cell5: "Table cell",
      },
      {
        id: 5,
        cell1: "Table cell",
        cell2: "Table cell",
        cell3: "Table cell",
        cell4: "Table cell",
        cell5: "Table cell",
      },
      {
        id: 6,
        cell1: "Table cell",
        cell2: "Table cell",
        cell3: "Table cell",
        cell4: "Table cell",
        cell5: "Table cell",
      },
    ].map((r, i) => {
      r.id = i + 1;
      return r;
    })
  );

  const [filterRecords, setFilterRecords] = useState([] as Array<object>);

  useEffect(() => {
    const filteredRecords = [] as Array<object>;
    if (searchText) {
      records.forEach((record) => {
        const rowStr = `${record.id}${record.cell1}${record.cell2} ${record.cell3}${record.cell4}${record.cell5}`;
        if (rowStr.includes(searchText)) {
          filteredRecords.push(record);
        }
      });
    }
    setFilterRecords(filteredRecords);
  }, [searchText]);

  useEffect(() => {
    const maxPageNumber = getMaxPageNumber();
    if (maxPageNumber < activePage) {
      setActivePage(maxPageNumber);
    }
  }, [records, filterRecords]);

  const clearSearchText = () => {
    setSearchText("");
  };

  const handlePageSize = (e) => {
    const maxPageNumber = getMaxPageNumber(e.target.value);
    if (maxPageNumber < activePage) {
      setActivePage(maxPageNumber);
    }
    setPageSize(e.target.value);
  };

  const getMaxPageNumber = (pageSizePar?: number) => {
    const div = String(
      (searchText ? filterRecords : records).length / (pageSizePar ?? pageSize)
    );
    const isFloat = div.includes(".");
    return isFloat ? parseInt(div) + 1 : Number(div) == 0 ? 1 : Number(div);
  };

  const getPaginationItems = () => {
    let pageNumberToShow = [];
    const items = [];
    const maxPageNumber = getMaxPageNumber();
    if (activePage < 3) {
      if (maxPageNumber < 3) {
        pageNumberToShow = [
          ...Array.from(Array(maxPageNumber).keys()).map((e) => e + 1),
        ];
      } else {
        pageNumberToShow = [1, 2, 3];
      }
    } else if (activePage > maxPageNumber - 2) {
      pageNumberToShow = [maxPageNumber - 2, maxPageNumber - 1, maxPageNumber];
    } else {
      pageNumberToShow = [activePage - 1, activePage, activePage + 1];
    }
    for (let i = 0; i < pageNumberToShow.length; i++) {
      items.push(
        <li className="page-item" key={pageNumberToShow[i]}>
          <a
            className={`page-link ${Style.pageLinkColor} ${
              activePage == pageNumberToShow[i] ? Style.activePageNumber : ""
            }`}
            onClick={() => setPaginationNumber(pageNumberToShow[i])}
          >
            {pageNumberToShow[i]}
          </a>
        </li>
      );
    }
    return items;
  };

  const handlePaginationNext = () => {
    const maxPageNumber = getMaxPageNumber();
    if (activePage == maxPageNumber) {
      return;
    }
    setActivePage(activePage + 1);
  };

  const handlePaginationPrevious = () => {
    if (activePage == 1) {
      return;
    }
    setActivePage(activePage - 1);
  };

  const setPaginationNumber = (pageNum) => setActivePage(pageNum);

  return (
    <div>
      <div className="mt-5">
        <Table responsive="sm" bordered>
          <thead>
            <tr>
              <th colSpan={3} className={Style.thRightBorderRemove}>
                <div className={`${Style.showRecord}`}>
                  <span className={Style.showRecordText}>Show</span>
                  <select name="ShowRecord" onChange={handlePageSize}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                  </select>
                  <span className={Style.showRecordText}>Entries</span>
                </div>
              </th>
              <th colSpan={4}>
                <div className={Style.searchBar}>
                  <span className={Style.searchIconSpan}>
                    <i className={`bi bi-search ${Style.searchIcon}`} />
                  </span>
                  <input
                    type="text"
                    placeholder="Search HTS..."
                    value={searchText}
                    onChange={(e) => {
                      setSearchText(e.target.value);
                    }}
                    className={Style.searchText}
                  />
                  {searchText && (
                    <button
                      className={Style.clearButton}
                      onClick={clearSearchText}
                    >
                      X
                    </button>
                  )}
                </div>
              </th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th>Sr.</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
            </tr>
          </thead>
          <tbody>
            {(searchText ? filterRecords : records)
              .slice(activePage * pageSize - pageSize, activePage * pageSize)
              .map((record, index) => {
                return (
                  <tr key={index}>
                    <td>{record.id}</td>
                    <td>{record.cell1}</td>
                    <td>{record.cell2}</td>
                    <td>{record.cell3}</td>
                    <td>{record.cell4}</td>
                    <td>{record.cell5}</td>
                  </tr>
                );
              })}
            {searchText && filterRecords.length == 0 && (
              <tr>
                <td colSpan={7}>No Record Found</td>
              </tr>
            )}
            <tr>
              <td colSpan={7}>
                <div className={`${Style.pagination}`}>
                  <ul className={`pagination`}>
                    <li className="page-item">
                      <a
                        className={`page-link ${Style.pageLinkColor}`}
                        aria-label="Previous"
                        onClick={handlePaginationPrevious}
                      >
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only"></span>
                      </a>
                    </li>
                    {getPaginationItems()}
                    <li className="page-item">
                      <a
                        className={`page-link ${Style.pageLinkColor}`}
                        aria-label="Next"
                        onClick={handlePaginationNext}
                      >
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
