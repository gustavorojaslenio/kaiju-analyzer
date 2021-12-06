import { ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import KaijuCRUDService from "../Api/KaijuCRUDService";
import { ApplicationState } from "../redux";
import { setKaijuDNAValue, setKaijuDNAError } from "../redux/kaijuDNA";
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
    try {
      const res = await KaijuCRUDService.post({
        dna
      });
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  };

  return {
    handleSubmit,
    handleChange,
    dna,
    hasError
  };
};
