import { Button, FormControl, Grid } from "@mui/material";
import { useAddKaijuForm } from "../../hooks";
import { AddKaijuInput } from "./components/AddKaijuInput";

export const AddKaijuDNA = () => {
  const { handleSubmit, handleChange, dna, hasError } = useAddKaijuForm();
  return (
    <Grid container>
      <FormControl fullWidth variant="outlined">
        <AddKaijuInput
          dna={dna}
          hasError={hasError}
          handleChange={handleChange}
        />
      </FormControl>
      <Button
        type="submit"
        sx={{ margin: "15px auto", maxWidth: "150px" }}
        variant="contained"
        onClick={handleSubmit}
        disabled={hasError}
      >
        Submit DNA
      </Button>
    </Grid>
  );
};
