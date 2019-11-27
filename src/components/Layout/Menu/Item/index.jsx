import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./MenuItem.module.css";
import { Link, NavLink } from "react-router-dom";

const resolveLink = (authData, link) =>
  typeof link === "function" ? link(authData) : link;

const MenuItem = ({ link, title, dropdown, external, authData }) => {
  const [open, setOpen] = useState(false);
  const [openClick, setOpenClick] = useState(false);

  const toggleDropdownList = () => setOpenClick(!openClick)
  const disbleDropdownList = () => setOpenClick(false)

  return (
    <div
      className={styles.container}
      onPointerEnter={() => setOpen(true)}
      onPointerLeave={() => !openClick ? setOpen(false) : undefined}
    >
      <NavLink
        to={link}
        exact
        activeClassName={styles.open}
        className={classNames(styles.menuItem, { [styles.open]: open })}
        onClick={toggleDropdownList}
        onBlur={disbleDropdownList}
      >
        {title}
      </NavLink>
      {dropdown && (
        <div onClick={disbleDropdownList}
          className={classNames(styles.dropdown, {
            [styles.dropdownOpen]: open
          })}
        >
          {dropdown.map((item, index) =>
            <Link to={item.link} key={index}>
              <div className={styles.dropdownItem}>{item.title}</div>
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

MenuItem.propTypes = {
  label: PropTypes.string,
  link: PropTypes.string,
  dropdown: PropTypes.array
};

export default MenuItem;
