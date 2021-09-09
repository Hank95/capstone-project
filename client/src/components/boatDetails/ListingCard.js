import styled from "styled-components";
import { Link } from "react-router-dom";

const ListingCard = ({ boat, setSelected }) => {
  const src = `/listings/${boat.id}`;
  return (
    <Card
      as={Link}
      to={src}
      onMouseEnter={() => setSelected(boat)}
      onMouseLeave={() => setSelected(null)}
    >
      <Image>AHOY!</Image>
      <Content>
        <h2>{boat.title}</h2>
        <p>
          {boat.year} {boat.make}, {boat.model}
        </p>
        <p>Price per day: ${boat.price}</p>
      </Content>
    </Card>
  );
};

const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  cursor: pointer;
  margin: 6px;
  border-radius: 6px;
  &:hover {
    box-shadow: 0px 0px 15px 0px #848484;
  }
`;

const Content = styled.div`
  margin-left: 25px;
  /* padding: 10px; */
`;
const Image = styled.div`
  height: 100px;
  width: 100px;
  margin-left: 10px;
  color: white;
  align-items: center;
  justify-content: center;
  background-color: rgb(58, 142, 216);
`;

export default ListingCard;
