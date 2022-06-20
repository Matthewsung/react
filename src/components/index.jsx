import { useState } from "react";
import { Button, Table, Form, Col, Row } from "react-bootstrap";
const Main = () => {
  const [text, setText] = useState({
    user: "",
    comments: "",
    create_date: new Date().toLocaleString(),
  });
  const [list, setList] = useState([]);
  const changeText = (e) => {
    const { value, name } = e.target;
    setText({
      ...text,
      [name]: value,
    });
    console.log(text);
  };
  const submitComments = () => {
    console.log(text);
    setList([...list, text]);
  };

  const List = ({ val, idx }) => {
    return (
      <tr>
        <td>{idx + 1}</td>
        <td>{val.user}</td>
        <td>{val.comments}</td>
        <td>{val.create_date}</td>
      </tr>
    );
  };
  return (
    <>
      <h1>코멘트를 달아주세요</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <td>번호</td>
            <td>아이디</td>
            <td>코멘트</td>
            <td>게시일</td>
          </tr>
        </thead>
        <tbody>
          {list &&
            list.map((val, idx) => {
              // <List val={val} idx={idx} key={idx} />;
              return (
                <tr key={`text_${idx}`}>
                  <td>{idx + 1}</td>
                  <td>{val.user}</td>
                  <td>{val.comments}</td>
                  <td>{val.create_date}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>

      <Form onChange={changeText}>
        <Row>
          <Col xs={2}>
            <Form.Control name="user" placeholder="작성자를 입력하세요" />
          </Col>
          <Col xs={6}>
            <Form.Control name="comments" placeholder="댓글을 달아주세요" />
          </Col>
          <Col xs={2}>
            <Button onClick={submitComments}>넣기</Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Main;
