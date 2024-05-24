import { useQuery } from '@tanstack/react-query';
import { nivelState } from '../config/zustand/nivel';
import { yearState } from '../config/zustand/year';
import { convertDateToPeriodo } from '../utils/calendario';
import { useEffect } from 'react';
import ErrorHandler from '../utils/errorManagment';

export default function useConvertDateToperiodo() {
  const nivel = nivelState.getState().nivel;
  const year = yearState.getState().year;
  const { data, isLoading, error } = useQuery({
    queryKey: ['date-to-periodo', nivel, year],
    queryFn: () => convertDateToPeriodo(),
    refetchOnWindowFocus: false,
  });
  useEffect(() => {
    if (!error) return;
    ErrorHandler(error);
  }, []);
  return { data, isLoading };
}
