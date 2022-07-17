import React from "react";
import style from "./Navbar.module.css";
import { Divider } from "@mui/material";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 3,
    top: 3,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    background: "rgb(238,67,128)",
    color: "white",
  },
}));

export const Navbar = ({ position }) => {
  function handleSearch(e) {
    if (e.key === "Enter") {
      console.log(e.target.value, "by enter");
    }
  }

  function handleDebounce(e) {
    console.log(e.target.value);
  }
  return (
    <div>
      <div className={style.topFirstcont} style={{ position: `${position}` }}>
        <div className={style.topBox}>
          <Link to="/home">
            <div className={style.homeLogo}>
              <img
                src="https://www.netmeds.com/assets/gloryweb/images/home-logo-netmeds-new.svg"
                alt="logo"
              />
            </div>
          </Link>
          {/* logo part over */}
          <div className={style.SearchBarBox}>
            <span>Deliver to</span>
            <select name="" id="">
              <option>401204</option>
              <option>400050</option>
              <option>760042</option>
              <option>400057</option>
            </select>
            <Divider
              orientation="vertical"
              style={{ height: "60%", marginLeft: "25px" }}
            ></Divider>
            <input
              type="text"
              placeholder="Search for medicene & wellness products..."
              onChange={handleDebounce}
              onKeyDown={handleSearch}
            />
          </div>
          {/* all serach part is over */}
          <div className={style.imgAndKey}>
            <img
              src="https://www.netmeds.com/assets/gloryweb/images/icons/upload_rx.svg"
              alt="uploadImage"
            />
            <div>Upload</div>
          </div>
          <div className={style.imgAndKey}>
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={4}>
                <ShoppingCartIcon style={{ color: "white", width: "40px" }} />
              </StyledBadge>
            </IconButton>
            <div>Cart</div>
          </div>
          <div className={style.imgAndKey}>
            <Link to="/signin" className={style.imgAndKey}>
              Login/Sign
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
