import styled from "styled-components";
import { Link } from "react-router-dom";

const MarkerCard = ({ boat }) => {
  const src = `/listings/${boat.id}`;
  return (
    <Marker>
      <Image
        src={`https://ahoyphotos.s3.us-east-2.amazonaws.com/${boat.photo_blob.key}`}
        alt="Boat Image"
      />
      <h2>{boat.title}</h2>

      <Button as={Link} to={src}>
        More Details
      </Button>
    </Marker>
  );
};

const Marker = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  text-align: center;
`;
const Image = styled.img`
  height: 100px;
  object-fit: contain;
  border-radius: 6px;
`;

const Button = styled.button`
  cursor: pointer;
  font-size: 1.3rem;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 8px 16px;
  text-decoration: none;
  width: 100%;
  background-color: rgba(58, 142, 216, 1);
  display: flex;
  justify-content: center;
  align-self: center;
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default MarkerCard;
