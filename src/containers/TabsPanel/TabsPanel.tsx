import { SyntheticEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import { AddKaijuDNA, KaijuAnalytics } from "../";
import { TabPanel } from "./components";
import { setCurrentTab } from "../../redux/App";
import { ApplicationState } from "../../redux/rootReducer";

const createTabProps = (index: number) => ({
  id: `tab-${index}`,
  "aria-controls": `tabpanel-${index}`
});

export const TabsPanel = () => {
  const { tab } = useSelector((state: ApplicationState) => state.app);
  const dispatch = useDispatch();

  const handleChange = (e: SyntheticEvent, newValue: number) => {
    dispatch(setCurrentTab(newValue));
  };

  return (
    <Grid item xl={6} md={8} marginX="auto">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={tab}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Add Kaiju" {...createTabProps(0)} />
          <Tab label="Kaiju Analytics" {...createTabProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={tab} index={0}>
        <AddKaijuDNA />
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <KaijuAnalytics />
      </TabPanel>
    </Grid>
  );
};
