import React from 'react';

function ToolsCard(props) {
  const { tool } = props;
  return (
    <div className="card">
      <a href={tool.link} target="_blank" rel="noreferrer">
        {tool.title}
      </a>
      <p>{tool.description}</p>
      <p>
        {tool.tags.map((element, index) => (
          <span key={index}>#{element} </span>
        ))}
      </p>
    </div>
  );
}

export default ToolsCard;
