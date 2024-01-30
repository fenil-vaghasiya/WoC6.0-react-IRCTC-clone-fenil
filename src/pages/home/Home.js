import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import Search from '../../components/search/Search'
import Expertise from '../../components/expertise/Expertise'
import IntroSection from '../../components/introSection/IntroSection'
import SearchUsingTrie from '../../components/search/SearchUsingTrie'

function Home() {

  let [responseData,setResponseData] = useState('');

  const fetchData = async()=>{
    const url = 'https://irctc1.p.rapidapi.com/api/v3/trainBetweenStations?fromStationCode=BVI&toStationCode=NDLS&dateOfJourney=2024-01-30';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f061460331msh7d3cfebd3fd09a9p19d94ajsn8f598b6315af',
        'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
      }
    };
    
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=>{
    fetchData();
  },[fetchData])

  return (
      <Layout>
        <IntroSection/>
        {/* <SearchUsingTrie/> */}
        <Search/>
        <Expertise/>
      </Layout>
  )
}

export default Home