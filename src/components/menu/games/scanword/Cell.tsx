export const Cell = (props) => {
  const { id, answer } = props;

  const letters = answer.split("");

  return (
    <div style={{ display: 'flex', marginBottom: '10px', gap: '5px' }}>
      {letters.map((_, index) => (
        <div 
          key={`${id}-${index}`} 
          style={{
            width: '40px',
            height: '40px',
            border: '1px solid black',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textTransform: 'uppercase',
            fontWeight: 'bold'
          }}
        >
          <input></input>
        </div>
      ))}
    </div>
  );
};
