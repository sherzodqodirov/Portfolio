import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './maintabs.scss'
import TabsData from "../tabsdata/TabsData";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{pt:'50px'}}>
                    {children}
                </Box>
            )}
        </div>
    );
}


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
        <div className='tabsbankinfo'>
            <h1>Выберите цель кредита</h1>
            <Box sx={{width: '100%'}}>
                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Все кредиты" {...a11yProps(0)} />
                        <Tab label="Любые бизнес-цели без залога" {...a11yProps(1)} />
                        <Tab label="Транспорт и оборудование" {...a11yProps(2)} />
                        <Tab label="Участие в тендере, реализация госконтракта" {...a11yProps(3)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <TabsData/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <h1>NO DATA!</h1>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <h1>NO DATA!!</h1>
                </TabPanel>
             <TabPanel value={value} index={3}>
                 <h1>NO DATA!!!</h1>
             </TabPanel>
            </Box>
        </div>
    );
}
