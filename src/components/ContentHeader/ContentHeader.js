import React, { useEffect, useState } from "react";
import './ContentHeader.css';
import { FaEye, FaEdit, FaImages, FaUserAlt, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ContentHeader = () => {
  const [content, setContent] = useState([]);
  const [filteredContent, setFilteredContent] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetch("https://realestate-backend-10x.herokuapp.com/property_List/")
      .then((res) => res.json())
      .then((res) => {
        setContent(res.result);
      })
      .catch((err) => console.log(err));
  }, [0]);

  const onSearch = (query) => {
    setSearchValue(query);
    let data = content;
    const searchResult = data.filter(item =>
      item.property_type.toLowerCase().includes(query.toLowerCase()),
    );
    setFilteredContent(searchResult)
  }

  //add property
  let navigate = useNavigate();
  const addProperty = ()=>{
    navigate('/basic-info')
  }

  return (
    <div className="main-id">
      <div className="r-div">
        <h5 class="title11">USER ID : 06PPD125</h5>
        <h5 class="title2">
          <FaUserAlt />
          &nbsp;{window.localStorage.getItem('email')}&nbsp;
        </h5>
      </div>
      <div className="l-div">
        <div class="title1">
          <input onChange={(event) => onSearch(event.target.value)} value={searchValue} placeholder="Search PPD ID" name="search" class="title" />
          <span class="search">|</span>
          <FaSearch class="search2" />
        </div>
        <button class="button" onClick={addProperty}>+ Add Property</button>
      </div>
      <ul class="nav">
        <li class="li-ppid">
          <span>PPID</span>
        </li>
        <li class="li-width">
          <span>Image</span>
        </li>
        <li class="li-width">
          <span>Property</span>
        </li>
        <li class="li-contact">
          <span>Contact</span>
        </li>
        <li class="li-width">
          <span>Area</span>
        </li>
        <li class="li-width">
          <span>Views</span>
        </li>
        <li class="li-width">
          <span>Status</span>
        </li>
        <li class="li-width">
          <span>Days Left</span>
        </li>
        <li class="li-width">
          <span>Actions</span>
        </li>
      </ul>
      {filteredContent.length > 0 ?
        filteredContent.map((item, index) => {
          return (
            <ul class="nav" key={index}>
              <li class="li-ppid">
                <span class="c">{item.PPDId}</span>
              </li>
              <li class="li-width">
                <span class="icon-css">
                  <FaImages />
                </span>
              </li>
              <li class="li-width">
                <span class="c">{item.propertyType}</span>
              </li>
              <li class="li-contact">
                <span class="c">{item.mobile}</span>
              </li>
              <li class="li-width">
                <span class="c">{item.totalArea} Sq.ft</span>
              </li>
              <li class="li-width">
                <span class="c">{item.Views}+</span>
              </li>
              <li class="li-width">
                <span class="btn c">{item.Sold}</span>
              </li>
              <li class="li-width">
                <span class="c">{item.DaysLeft}</span>
              </li>
              <li class="li-width">
                <span class="icon-css">
                  <FaEye />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <FaEdit />
                </span>
              </li>
            </ul>
          )
        })
        : content.length <= 0 ?
          <ul class="nav">
            <li class="no-data">
              <span class="no-data">No data found...!</span>
            </li>
          </ul>
          : content.map((item, index) => {
            return (
              <ul class="nav" key={index}>
              <li class="li-ppid">
                <span class="c">{item.PPDId}</span>
              </li>
              <li class="li-width">
                <span class="icon-css">
                  <FaImages />
                </span>
              </li>
              <li class="li-width">
                <span class="c">{item.propertyType}</span>
              </li>
              <li class="li-contact">
                <span class="c">{item.mobile}</span>
              </li>
              <li class="li-width">
                <span class="c">{item.totalArea} Sq.ft</span>
              </li>
              <li class="li-width">
                <span class="c">{item.Views}+</span>
              </li>
              <li class="li-width">
                <span class="btn c">{item.Sold}</span>
              </li>
              <li class="li-width">
                <span class="c">{item.DaysLeft}</span>
              </li>
              <li class="li-width">
                <span class="icon-css">
                  <FaEye />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <FaEdit />
                </span>
              </li>
            </ul>
            )
          })
      }
    </div>
  );
};
export default ContentHeader;
