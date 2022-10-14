import React, { useState, useEffect } from 'react';
import { TbTemperatureCelsius } from 'react-icons/tb';
import styles from './SearchTemp.module.css';

export const SearchTemp = () => {
  const [city, setCity] = useState('');
  const [dataTemp, setData] = useState(null);
  const [dataGeral, setDataGeral] = useState(null);
  const [show, setShow] = useState(false);
  const [hours, setHours] = useState('');
  //get data store 
  const dataStore = JSON.parse(localStorage.getItem('@dataStoreUser'));

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=32e98030c971e83daa9b089454f9fae2&units=metric&lang=pt-br`;

  useEffect(() => {
    const GetDataApiTemperature = async () => {
      const get = await fetch(url)
        .then(response => response.json())
        .then((data) => {
          const currenHours = new Date().getHours();
          if (currenHours >= 5 && currenHours < 12) {
            setHours('Bom dia')
          } else if (currenHours >= 12 && currenHours < 18) {
            setHours('Boa tarde')
          } else {
            setHours('Boa noite')
          }
          setData(data.main);
          setDataGeral(data);
        })
    }
    GetDataApiTemperature();
  }, [city]);

  const handleSearchForNameCity = () => {
    setShow(true)
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{hours}, {dataStore.firstName + ' ' + dataStore.lastName}.</h2>
      <p className={styles.paragraph}>Busque por clima atual da sua cidade, do seu bairro ou ateé masmo um país.</p>
      <form onSubmit={handleSearchForNameCity} className={styles.flex_search}>
        <input
          className={styles.enter_city}
          type="text"
          required
          onChange={(e) => setCity(e.target.value)}
          placeholder='Qual a cidade, bairro ou país?'
        />
      </form>

      <div className={styles.container_temp}>
        {dataTemp == null ?
          ''
          :
          (
            <div className={styles.data_response}>
              <span className={styles.current}>Atual</span>
              <h2 className={styles.nameCity}>{dataGeral.name}, {dataGeral.sys.country}</h2>
              <h1 className={styles.temp}>{(dataTemp.temp).toFixed(0)}<TbTemperatureCelsius /></h1>
              <div className={styles.datainline}>
                <p>Max: {(dataTemp.temp_max).toFixed(1)}°c | Min: {(dataTemp.temp_min).toFixed(1)}°c</p>
                <p>Sensação de {(dataTemp.feels_like).toFixed(1)}°c</p>
                <p>Umidade {(dataTemp.humidity)}%</p>
              </div>
            </div>
          )}
      </div>
    </div>
  )
}