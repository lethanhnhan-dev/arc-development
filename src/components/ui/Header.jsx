import {
	AppBar,
	Button,
	Menu,
	MenuItem,
	Tab,
	Tabs,
	Toolbar,
	useScrollTrigger,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Import Assets
import logo from "../../assets/logo.svg";

function ElevationScroll(props) {
	const { children } = props;
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}

ElevationScroll.propTypes = {
	children: PropTypes.element.isRequired,
};

const useStyles = makeStyles((theme) => ({
	toolbarMargin: {
		...theme.mixins.toolbar,
		marginBottom: "2rem",
	},
	logo: {
		height: "7em",
	},
	logoContainer: {
		padding: 0,
		width: "300px",
		"&:hover": {
			backgroundColor: "transparent",
		},
	},
	tabContainer: {
		marginLeft: "auto",
	},
	tab: {
		...theme.typography.tab,
		minWidth: "10",
		marginLeft: "10px",
	},
	button: {
		...theme.typography.estimate,
		borderRadius: "50px",
		marginLeft: "50px",
		marginRight: "25px",
		height: "45px",
	},
	menu: {
		backgroundColor: theme.palette.common.blue,
		color: "white",
		borderRadius: "2px",
	},
	menuItem: {
		...theme.typography.tab,
		opacity: 0.7,
		"&:hover": {
			opacity: 1,
		},
	},
}));

const Header = () => {
	const classes = useStyles();
	const [value, setValue] = useState(0);
	const [anchorEl, setAnchorEl] = useState(null);
	const [open, setOpen] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState(0);

	const handleChange = (e, value) => {
		setValue(value);
	};

	const handleClick = (e) => {
		setAnchorEl(e.currentTarget);
		setOpen(true);
	};
	const handleClose = (e) => {
		setAnchorEl(null);
		setOpen(false);
	};

	const handleMenuItemClick = (e, i) => {
		setAnchorEl(null);
		setOpen(false);
		setSelectedIndex(i);
	};

	const menuOptions = [
		{ name: "Services", link: "/services" },
		{ name: "Custom Sofware Development", link: "/customsoftware" },
		{ name: "Mobile App Development", link: "/mobileapps" },
		{ name: "Website Development", link: "/websites" },
	];

	useEffect(() => {
		if (window.location.pathname === "/" && value !== 0) {
			setValue(0);
		} else if (window.location.pathname === "/services" && value !== 1) {
			setValue(1);
		} else if (window.location.pathname === "/revolution" && value !== 2) {
			setValue(2);
		} else if (window.location.pathname === "/about" && value !== 3) {
			setValue(3);
		} else if (window.location.pathname === "/contact" && value !== 4) {
			setValue(4);
		} else if (window.location.pathname === "/estimate" && value !== 5) {
			setValue(5);
		}
	}, [value]);

	return (
		<React.Fragment>
			<ElevationScroll>
				<AppBar position="fixed">
					<Toolbar disableGutters>
						<Button
							component={Link}
							disableRipple
							to="/"
							className={classes.logoContainer}
							onClick={() => setValue(0)}
						>
							<img alt="company logo" src={logo} />
						</Button>
						<Tabs
							value={value}
							className={classes.tabContainer}
							onChange={handleChange}
							indicatorColor="primary"
						>
							<Tab
								className={classes.tab}
								label="Home"
								component={Link}
								to="/"
							/>
							<Tab
								aria-owns={anchorEl ? "simple-menu" : undefined}
								aria-haspopup={anchorEl ? "true" : undefined}
								className={classes.tab}
								label="Services"
								component={Link}
								to="/services"
								onMouseOver={(event) => handleClick(event)}
							/>
							<Tab
								className={classes.tab}
								label="The Revolution"
								component={Link}
								to="/revolution"
							/>
							<Tab
								className={classes.tab}
								label="About Us"
								component={Link}
								to="/about"
							/>
							<Tab
								className={classes.tab}
								label="Contact"
								component={Link}
								to="/contact"
							/>
						</Tabs>
						<Button
							variant="contained"
							color="secondary"
							className={classes.button}
						>
							Free Estimate
						</Button>
						<Menu
							id="simple-menu"
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
							MenuListProps={{ onMouseLeave: handleClose }}
							classes={{ paper: classes.menu }}
							elevation={0}
						>
							{menuOptions.map((option, i) => (
								<MenuItem
									component={Link}
									to={option.link}
									classes={{ root: classes.menuItem }}
									onClick={(event) => {
										handleMenuItemClick(event, i);
										setValue(1);
										handleClose();
									}}
									selected={
										i === selectedIndex && value === 1
									}
									key={option.name}
								>
									{option.name}
								</MenuItem>
							))}
						</Menu>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<div className={classes.toolbarMargin} />
		</React.Fragment>
	);
};

export default Header;
