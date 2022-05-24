import { getBreadcrumbData } from "functions/Utils";
import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const Breadcrumb = ({ router, isAdmin = false }) => {
  const history = useHistory();

  const pathCurrent = history.location.pathname;
  const arrUrl = pathCurrent.split("/");
  const newLabel =
    arrUrl[arrUrl.length - 1] > 0
      ? arrUrl[arrUrl.length - 2]
      : arrUrl[arrUrl.length - 1];

  const [results, setResults] = React.useState([]);

  React.useEffect(() => {
    let newResult = getBreadcrumbData({ router: router, url: pathCurrent });
    setResults(newResult);
  }, [pathCurrent]);

  return (
    <div className={`page-breadcrumb ${!isAdmin ? 'breadcrumb-collection': ''}`}>
      <div className="container">
        <ol className="breadcrumb">
          {results.length > 0
            ? results.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={`breadcrumb-item ${
                      index == results.length - 1 ? "active" : ""
                    }`}
                  >
                    {index != results.length - 1 ? (
                      <>
                        <Link to={item.path}>
                          {item.label ? item.label : newLabel}
                        </Link>
                        <i className="icon las la-angle-right" />
                      </>
                    ) : (
                      item.label
                    )}
                  </li>
                );
              })
            : ""}
        </ol>
      </div>
    </div>
  );
};

export default Breadcrumb;
