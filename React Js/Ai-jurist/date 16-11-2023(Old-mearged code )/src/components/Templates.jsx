import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const Templates = () => {
  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] = useState(0);
  const [filteredTemplates, setFilteredTemplates] = useState([]);

  const handleClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const categories = [
    { id: 0, name: "All" },
    { id: 1, name: "Accounting & Tax" },
    { id: 2, name: "Agreements" },
    { id: 3, name: "Business & Plans" },
    { id: 4, name: "Construction" },
    { id: 5, name: "Consulting" },
    { id: 6, name: "Contracts" },
    { id: 7, name: "Employment" },
    { id: 8, name: "Financial" },
    { id: 9, name: "Healthcare" },
    { id: 10, name: "Manufacturing" },
    { id: 11, name: "Marketing" },
    { id: 12, name: "Real Estate" },
    { id: 13, name: "Sales" },
    { id: 14, name: "Software" },
    { id: 15, name: "Tax form templates" },
    { id: 16, name: "Technology" },
  ];

  const templateColors = {
    1: "#ff009980",
    2: "#3CB37180",
    3: "#FF634780",
    4: "#1E90FF80",
    5: "#6A5ACD80",
    6: "#3CB37180",
    7: "#6A5ACD80",
    8: "#ff009980",
    9: "#3CB37180",
    10: "#1E90FF80",
    11: "#FF634780",
    12: "#ff009980",
    13: "#6A5ACD80",
    14: "#ff009980",
    15: "#FF634780",
    16: "#6A5ACD80",
  };

  const templates = [
    { id: 0, name: "Accounting & Tax", categoryId: 1 },
    { id: 1, name: "Agreements", categoryId: 2 },
    { id: 2, name: "Business & Plans", categoryId: 3 },
    { id: 3, name: "Construction", categoryId: 4 },
    { id: 4, name: "Consulting", categoryId: 5 },
    { id: 5, name: "Contracts", categoryId: 6 },
    { id: 6, name: "Employement", categoryId: 7 },
    { id: 7, name: "Financial", categoryId: 8 },
    { id: 8, name: "Healthcare", categoryId: 9 },
    { id: 9, name: "Manufacturing", categoryId: 10 },
    { id: 10, name: "Marketing", categoryId: 11 },
    { id: 11, name: "Real Estate", categoryId: 12 },
    { id: 12, name: "Sales", categoryId: 13 },
    { id: 13, name: "Software", categoryId: 14 },
    { id: 14, name: "Tax from template", categoryId: 15 },
    { id: 15, name: "Technology", categoryId: 16 },
    { id: 16, name: "Accounting & Tax", categoryId: 1 },
    { id: 17, name: "Agreements", categoryId: 2 },
  ];

  useEffect(() => {
    if (selectedCategory) {
      const filtered = templates.filter(
        (template) => template.categoryId === selectedCategory
      );
      setFilteredTemplates(filtered);
    } else {
      setFilteredTemplates(templates);
    }
  }, [selectedCategory]);

  return (
    <>
      <div className="main-wrapper">
        <div className="container">
          <div className="templates">
            <div className="page-title d-flex justify-content-between align-items-center">
              <h1 className="page-heading mb-0">Templates</h1>
              <NavLink to="/templates/createtemplate">
                <button className="btn btn-primary">Create Template</button>
              </NavLink>
            </div>

            <div className="row">
              <div className="col-lg-3">
                <div className="card templates-card">
                  <div className="card-body">
                    <div className="searchBar position-relative">
                      <input
                        type="search"
                        name="searchBar"
                        placeholder="Search Category"
                        className="searchInput w-100"
                        onChange={(e) => {
                          setSearch(e.target.value);
                        }}
                      />
                      <CiSearch className="position-absolute search-icon" />
                    </div>
                    <hr />
                    <div className="templates-left-card">
                      <ul className="categories">
                        {categories
                          .filter((category) => {
                            if (search === "") {
                              return category;
                            } else if (
                              category.name
                                .toLowerCase()
                                .includes(search.toLowerCase())
                            ) {
                              return category;
                            }
                          })
                          .map((category) => {
                            return (
                              <li
                                onClick={() => handleClick(category.id)}
                                className={`${
                                  selectedCategory === category.id
                                    ? "selected"
                                    : ""
                                }`}
                                key={category.id}
                              >
                                {category.name}
                              </li>
                            );
                          })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 pt-3 pt-lg-0">
                <div className="template-boxes">
                  <div className="card templates-card">
                    <div className="card-body">
                      {filteredTemplates.length > 0 ? (
                        <div className="row">
                          {filteredTemplates
                            .filter((template) => template.name !== "All")
                            .map((template) => {
                              return (
                                <div
                                  className="py-3 col-xxl-3 col-xl-4 col-lg-6 col-md-4 col-sm-6 mt-lg-0 mt-3"
                                  key={template.id}
                                >
                                  <NavLink to="/templates/updatetemplate">
                                    <div
                                      className={`template-box template_category_${template.categoryId}`}
                                      style={{
                                        backgroundColor:
                                          templateColors[template.categoryId],
                                      }}
                                    >
                                      <h3 className="template-name">
                                        {template.name}
                                      </h3>
                                    </div>
                                  </NavLink>
                                </div>
                              );
                            })}
                        </div>
                      ) : (
                        <p>No Templates Available for the Selected Category.</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Templates;
