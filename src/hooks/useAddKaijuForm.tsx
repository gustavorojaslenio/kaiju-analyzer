import { ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "../redux";
import {
  setKaijuDNAValue,
  setKaijuDNAError,
  createKaijuDNA
} from "../redux/kaijuDNA";
import { validateKaijuDNA } from "../utils";

export const useAddKaijuForm = () => {
  const dispatch = useDispatch();
  const { dna, hasError } = useSelector(
    (state: ApplicationState) => state.kaijuDNA
  );

  useEffect(() => {
    const isValid = validateKaijuDNA(dna);
    dispatch(setKaijuDNAError(!isValid));
  }, [dna, dispatch]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setKaijuDNAValue(e.target.value));
  };

  const handleSubmit = async () => {
    dispatch(createKaijuDNA(dna));
  };

  return {
    handleSubmit,
    handleChange,
    dna,
    hasError
  };
};
