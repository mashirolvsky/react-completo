import Container from "../components/Container";
import LazyTest from "./lazy/LazyTest";

const Test = () => {
  return (
    <>
      <Container className="w-full flex flex-column py-8 px-8 align-center brd-sm rds-sm ">
        <h1 className="cursor-def typo-xlg">Test</h1>
      </Container>
      <Container className="w-full">
        <LazyTest />
      </Container>
    </>
  );
};

export default Test;
