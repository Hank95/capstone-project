import styled from "styled-components";

const BoatForm = ({
  boatData,
  handleChange,
  handleFile,
  handleSubmit,
  isLoading,
  errors,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <FormField>
        <Label htmlFor="title">Boat Name:</Label>
        <Input
          type="text"
          name="title"
          value={boatData.title}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Label htmlFor="title">Description:</Label>
        <Textarea
          rows="3"
          name="description"
          value={boatData.description}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <h4>Boat Type?</h4>
        <input
          type="radio"
          name="sailboat"
          value="true"
          onChange={handleChange}
        />
        <label for="html">Sailboat</label>
        <br></br>
        <input
          type="radio"
          name="sailboat"
          value="false"
          onChange={handleChange}
        />
        <label for="sailboat">Powerboat</label>
        <br></br>
      </FormField>
      <FormField>
        <Label htmlFor="price">Price per day(USD):</Label>
        <Input
          type="number"
          name="price"
          value={boatData.price}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Label htmlFor="make">Make:</Label>
        <Input
          type="text"
          name="make"
          value={boatData.make}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Label htmlFor="model">Model:</Label>
        <Input
          type="text"
          name="model"
          value={boatData.model}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Label htmlFor="year">Year:</Label>
        <Input
          type="number"
          name="year"
          value={boatData.year}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Label htmlFor="length">Length:</Label>
        <p>in feet</p>
        <Input
          type="number"
          name="length"
          value={boatData["length"]}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Label htmlFor="passengers">Passengers:</Label>
        <p>How many passengers will be allowed on your boat?</p>
        <Input
          type="number"
          name="passengers"
          value={boatData.passengers}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Label htmlFor="bed">Bunks:</Label>
        <p>
          If you are planning on allowing overnight trips, how many beds will be
          available?
        </p>
        <Input
          type="number"
          name="bed"
          value={boatData.bed}
          onChange={handleChange}
        />
      </FormField>
      {boatData.bed > 0 ? (
        <FormField>
          <Label htmlFor="sleep">Sleeps:</Label>
          <p>How many can your boat sleep?</p>
          <Input
            type="number"
            name="sleep"
            value={boatData.sleep}
            onChange={handleChange}
          />
        </FormField>
      ) : null}
      <FormField>
        <Label htmlFor="fuel">Fuel:</Label>
        <p>How many gallons of fuel can your boat hold</p>
        <Input
          type="number"
          name="fuel"
          value={boatData.fuel}
          onChange={handleChange}
        />
      </FormField>
      <Divider />
      <FormField>
        <h3>Included?</h3>
        <input
          type="checkbox"
          name="tender"
          value={boatData.tender}
          onChange={handleChange}
        />
        <label for="tender"> Tender</label>
        <br></br>
      </FormField>
      <Divider />
      <FormField>
        <h3>Allowed?</h3>
        <input
          type="checkbox"
          name="food"
          value={boatData.food}
          onChange={handleChange}
        />
        <label for="food"> Food</label>
        <br></br>
        <input
          type="checkbox"
          name="alcohol"
          value={boatData.alcohol}
          onChange={handleChange}
        />
        <label for="alcohol"> Alcohol</label>
        <br></br>
      </FormField>
      <FormField>
        <Label htmlFor="extras">Extras:</Label>
        <p>
          Please list anything else you would like a potential renter to know.
        </p>
        <Textarea
          rows="3"
          name="extras"
          value={boatData.extras}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Label htmlFor="location">Location:</Label>
        <Input
          type="text"
          name="location"
          value={boatData.location}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Label htmlFor="photo">Photo:</Label>
        <Input
          type="file"
          name="photo"
          // value={boatData.location}
          onChange={handleFile}
        />
      </FormField>
      <FormField>
        <Button type="submit">{isLoading ? "Loading..." : "Submit"}</Button>
      </FormField>
      <FormField>
        {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
      </FormField>
    </form>
  );
};

const FormField = styled.div`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const Error = styled.div`
  color: red;
  font-size: 30px;
`;

const Label = styled.label`
  color: #363636;
  display: block;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 8px;
`;
const Input = styled.input`
  border-radius: 6px;
  border: 1px solid transparent;
  border-color: #dbdbdb;
  -webkit-appearance: none;
  max-width: 100%;
  width: 100%;
  font-size: 1rem;
  line-height: 1.5;
  padding: 4px;
`;
const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0 16px 0;
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
const Textarea = styled.textarea`
  border-radius: 6px;
  border: 1px solid transparent;
  border-color: #dbdbdb;
  -webkit-appearance: none;
  max-width: 100%;
  width: 100%;
  font-size: 1rem;
  line-height: 1.5;
  padding: 4px;
  resize: none;
`;

export default BoatForm;
