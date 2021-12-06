import { Box } from "@mui/system";

interface TabPanelProps {
  children: JSX.Element | string;
  value: number;
  index: number;
  [key: string]: any;
}

export const TabPanel = ({
  children,
  value,
  index,
  ...otherProps
}: TabPanelProps) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      {...otherProps}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};
