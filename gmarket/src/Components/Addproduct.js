import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import calavo from "../image/calavo.png"

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Fruits and Vegetables" {...a11yProps(0)} />
                    <Tab label="Pantrys" {...a11yProps(1)} />
                    <Tab label="Eggs and Dairys" {...a11yProps(2)} />
                    <Tab label="Frozens" {...a11yProps(3)} />
                    <Tab label="Beverange" {...a11yProps(4)} />
                    <Tab label="Snacks" {...a11yProps(5)} />
                    <Tab label="Households" {...a11yProps(6)} />
                    <Tab label="More" {...a11yProps(6)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <div className="cardtabs">
                    <div className="tabstext d-flex justify-content-between">
                        <h1>Fresh Fruit</h1>
                        <h2>See all</h2>
                    </div>
                    <div className=" tabscorecard ">
                            <div className="tabsproductcard">
                                    <div className="tabsimg">
                                    <img className="w-100" src={calavo} alt="img"/>
                                </div>
                                <div className="tabscardtext">
                                   <p>Calavo Hass Avocados</p>
                                    <h5><div>$5.99</div>  <div className="addtabscard">+</div></h5>
                                </div>
                            </div>
                    <div className="tabsproductcard">
                                    <div className="tabsimg">
                                    <img className="w-100" src={calavo} alt="img"/>
                                </div>
                                <div className="tabscardtext">
                                   <p>Calavo Hass Avocados</p>
                                    <h5><div>$5.99</div>  <div className="addtabscard">+</div></h5>
                                </div>
                            </div>
                    <div className="tabsproductcard">
                                    <div className="tabsimg">
                                    <img className="w-100" src={calavo} alt="img"/>
                                </div>
                                <div className="tabscardtext">
                                   <p>Calavo Hass Avocados</p>
                                    <h5><div>$5.99</div>  <div className="addtabscard">+</div></h5>
                                </div>
                            </div>
                    <div className="tabsproductcard">
                                    <div className="tabsimg">
                                    <img className="w-100" src={calavo} alt="img"/>
                                </div>
                                <div className="tabscardtext">
                                   <p>Calavo Hass Avocados</p>
                                    <h5><div>$5.99</div>  <div className="addtabscard">+</div></h5>
                                </div>
                            </div>
                    <div className="tabsproductcard">
                                    <div className="tabsimg">
                                    <img className="w-100" src={calavo} alt="img"/>
                                </div>
                                <div className="tabscardtext">
                                   <p>Calavo Hass Avocados</p>
                                    <h5><div>$5.99</div>  <div className="addtabscard">+</div></h5>
                                </div>
                            </div>
                    </div>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
               malumot yoq
            </TabPanel>
            <TabPanel value={value} index={2}>
                malumot yoq ! 1
            </TabPanel>
         <TabPanel value={value} index={3}>
             malumot yoq !! 2
            </TabPanel>
        <TabPanel value={value} index={4}>
            malumot yoq !!! 3
            </TabPanel>
        <TabPanel value={value} index={5}>
            malumot yoq !!! 4
            </TabPanel>
        <TabPanel value={value} index={6}>
            malumot yoq !!!! 5
            </TabPanel>
        </Box>
    );
}