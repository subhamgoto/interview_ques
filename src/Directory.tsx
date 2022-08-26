import React, { useEffect, useState } from "react";

const Directory = ({ data, path = "", onMatch, search }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleChildrenVisibility = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (search && data.name === search) {
      onMatch([path, data.name].join("/"));
    }
  }, [data.name, search, onMatch, path]);
  return (
    <div>
      <div className={data.name === search ? "highlighted" : ""}>
        {data.isFolder && (
          <span className="collapse-icon" onClick={toggleChildrenVisibility}>
            {isOpen ? "-" : "+"}
          </span>
        )}{" "}
        {data.name}
      </div>
      {isOpen && (
        <ul>
          {data.items.map((item) => {
            return (
              <li key={item.name}>
                <Directory
                  search={search}
                  data={item}
                  path={[path, data.name].join("/")}
                  onMatch={onMatch}
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Directory;
