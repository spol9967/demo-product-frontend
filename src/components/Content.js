import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import axios from "axios";

function Content() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filterList, setfilterList] = useState([]);
  const [activeFilter, setactiveFilter] = useState(["all"]);
  const uri = "https://demo-product-backend.herokuapp.com";
  
  useEffect(() => {
    axios.get(uri + "/product").then((res) => {
      setProducts(res.data);
      grabCategories(res.data)
    });

    if (
      activeFilter.length === 0 ||
      activeFilter.length === filterList.length ||
      activeFilter.includes("all")
    ) {
      // filteredList = products;
      setfilterList(products)
    } else {
      // filteredList = products.filter(item =>activeFilter.includes(item.categories));
      setfilterList(products.filter(item =>activeFilter.includes(item.categories)))
    }
  }, [products]);

  const grabCategories = (p) =>{
    const newCategory = categories;
    p.map((product)=>{
        if(!newCategory.includes(product.categories)){
            newCategory.push(product.categories)
            setCategories(newCategory)
            console.log(categories)
        }
    })
  }

  const onChange = (filter) =>{
    if (filter === "ALL") {
        if (activeFilter.length === filterList.length) {
        //   this.setState({ activeFilter: [] });
          setactiveFilter([])
        } else {
        //   this.setState({ activeFilter: filterList.map(filter => filter.value) });
          setactiveFilter(filterList.map(filter => filter.categories))
        }
      } else {
        if (activeFilter.includes(filter)) {
          const filterIndex = activeFilter.indexOf(filter);
          const newFilter = [...activeFilter];
          newFilter.splice(filterIndex, 1);
          setactiveFilter(newFilter);
        } else {
            setactiveFilter([...activeFilter, filter]);
        }
      }
  }

    

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-3">
          <Filter onChange={onChange} categories={categories} activeFilter={activeFilter} />
        </div>
        <div className="col-md-9">
          <div className="product-list container-fluid d-flex flex-column  align-items-center">
            <div className="container">
              <p className="product-title">Dals & beans</p>
              <div className="row">
                {filterList &&
                    filterList.map((product) => {
                    return (
                      <div className="col-md-6" key={product._id}>
                        <div className="card p-3">
                          <div className="card-body text-center">
                            <img src={product.imageuri} alt="" className="product-image"/>
                            <h5 className="card-title">
                              {product.productname}
                            </h5>
                            <p>{product.description}</p>
                            <p>{product.availablein}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
