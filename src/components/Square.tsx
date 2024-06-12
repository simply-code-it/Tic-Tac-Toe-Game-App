interface SquarePropTypes {
  value: string | null;
  onSquareClick: ()=> void
}
const Square: React.FC<SquarePropTypes> = ({ value, onSquareClick }) => {
  return (
    <>
      <button className="square" onClick={onSquareClick}>{value}</button>
    </>
  );
};

export default Square;
