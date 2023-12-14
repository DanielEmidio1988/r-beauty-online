import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'daterangepicker/daterangepicker.css';
import 'daterangepicker/moment.min.js';
import 'daterangepicker/daterangepicker.js';
import 'moment/locale/pt-br';
import moment from 'moment';

const DateRangePicker = () => {
  const datePickerRef = useRef(null);

  useEffect(() => {
    moment.locale('pt-br');

    $(datePickerRef.current).daterangepicker({
      opens: 'left',
      startDate: moment().subtract(7, 'days'),
      endDate: moment(),
      ranges: {
        'Últimos 7 Dias': [moment().subtract(6, 'days'), moment()],
        'Últimos 30 Dias': [moment().subtract(29, 'days'), moment()],
        'Este Mês': [moment().startOf('month'), moment().endOf('month')],
        'Mês Passado': [
          moment().subtract(1, 'month').startOf('month'),
          moment().subtract(1, 'month').endOf('month'),
        ],
      },
    }, (start, end, label) => {
      
    });
  }, []);

  return (
    <input
      type="text"
      id="dateRangePicker"
      ref={datePickerRef}
    />
  );
};

export default DateRangePicker;