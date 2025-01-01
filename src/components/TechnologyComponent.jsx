import { useState } from 'react';
import useDataFetcher from '../hooks/useDataFetcher'

export default function TechnologyComponent() {


  const { data, error, loading } = useDataFetcher();
  const technologyData = data.technology;
  const [currentIndex, setCurrentIndex] = useState(0);







  return (
    <div>Technology</div>
  )
}
