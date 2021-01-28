import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ToolsCard from './ToolsCard';

function ToolsList() {
  const dataTools = useSelector((state) => state.tools.allTools);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([...dataTools]);
  }, [dataTools]);

  return (
    <section>
      {data.length > 0 ? (
        data.map((element) => <ToolsCard key={element.id} tool={element} />)
      ) : (
        <div>Loading...</div>
      )}
    </section>
  );
}

export default ToolsList;
